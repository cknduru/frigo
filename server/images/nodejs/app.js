const http = require('http');

const hostname = '';
const port = 3000;

function getFoodItemsFromDb()
{
	return ["Meat", "Vegetables", "Beans"];
}

function sendFoodItems(response) {
	// set HTTP response code
  	response.writeHead(200, {"Content-Type": "application/json"});

  	var json = JSON.stringify({ 
   	 foodItems: getFoodItemsFromDb(), 
  	});
  	response.end(json);
}

const server = http.createServer((req, res) => {
  sendFoodItems(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});