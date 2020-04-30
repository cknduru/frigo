function createAndDisplayFoodItem(foodItemText, persistItems)
{
	var foodItems = document.getElementById("foodItems");
	var node = document.createElement("LI");
	var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
	var newId = Math.floor(Math.random() * 1000000);

	if (persistItems) 
	{	
		localStorage.setItem(newId,  `${foodItemText} (${utc})`); 
		node.innerText = `${foodItemText} (${utc})`;
	} else
	{
		node.innerText = `${foodItemText}`;
	}

	node.id = newId;
	node.classList.add("list-group-item");
	node.onmousedown = removeItem;

	if (persistItems) {	localStorage.setItem(newId,  `${foodItemText} (${utc})`); }
	foodItems.appendChild(node);
}

function addItem()
{
	var foodItemText = document.getElementById("inputItem");
	createAndDisplayFoodItem(foodItemText.value, true);
	foodItemText.value = "";
}

function removeItem(event)
{
	var foodItems = document.getElementById("foodItems");
	foodItems.removeChild(event.target);
	localStorage.removeItem(event.target.id);
}

function CallbackGetFoodItems(foodItems)
{
	for(var i = 0; i < foodItems.length; i++)
	{
	   createAndDisplayFoodItem(foodItems[i], false);
	}
}

const getFoodItems = async (ip) => 
{
  	const response = await fetch("http://192.168.99.100:3000/getFood")
  						   .then(response => response.json())
  						   .then(response => CallbackGetFoodItems(response.foodItems));
}

function initData()
{
	getFoodItems("http://192.168.99.100:3000");
}