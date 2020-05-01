var express = require('express')
var redis = require('redis')
var cors = require('cors')
var app = express()
var client = redis.createClient("6379", "docker-compose_redis_1")

app.use(cors())

function sendFoodItems(res, result) 
{
    var json = JSON.stringify({
    	foodItems: result,
    });

    res.end(json);
}

function sendFoodItemsFromRedis(res)
{
	// set HTTP response code
    res.writeHead(200, {"Content-Type": "application/json"});

    // this is for testing, remove later
	client.flushall();
	client.lpush('food_items', 'Meat');
	client.lpush('food_items', 'Vegetables');
	client.lpush('food_items', 'Beans');
	client.lpush('food_items', 'Maize');

	client.lrange('food_items', '-100', '100', function (error, result)
	{
	    if (error)
	    {
	        console.log(error);
	        sendFoodItems(res, error);
	    } else
	    {
	        sendFoodItems(res, result);
	    }
	});
}

app.get('/getFood', function (req, res, next) {
	sendFoodItemsFromRedis(res);
})
 
app.listen(3000, function () {
  console.log('listening on port 3000')
})