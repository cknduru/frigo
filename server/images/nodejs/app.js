var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
function getFoodItemsFromDb()
{
       return ["Meat", "Vegetables", "Beans"];
}

function sendFoodItems(response) 
{
    // set HTTP response code
    response.writeHead(200, {"Content-Type": "application/json"});

    var json = JSON.stringify({
    foodItems: getFoodItemsFromDb(),
    });
    response.end(json);
}

app.get('/getFood', function (req, res, next) {
	sendFoodItems(res);
})
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})