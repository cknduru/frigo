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

function initData()
{
	//localStorage.clear();
	for(var i = 0; i < localStorage.length; i++)
	{
	    var retrivedFoodItem = localStorage.getItem(localStorage.key(i));
	    createAndDisplayFoodItem(retrivedFoodItem, false);
	}
}