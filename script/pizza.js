// create arrays for each option
var sizeArray = document.getElementsByClassName("size");
var meatArray = document.getElementsByClassName("meat");
var vegetableArray = document.getElementsByClassName("vegetable");
var cheeseArray = document.getElementsByClassName("cheese");
var sauceArray = document.getElementsByClassName("sauce");
var crustArray = document.getElementsByClassName("crust");

// create variables to hold choices
var yourSize;
var chosenMeats = [];
var chosenVegetables = [];
var yourCheese;
var yourSauce;
var yourCrust;
var allSelections = [];
var allCosts = [];

//create variables to hold costs
var sizeCost = 0;
var meatCost = 0;
var vegetableCost = 0;
var cheeseCost = 0;
var sauceCost = 0;
var crustCost = 0;
var totalCost = 0

function getTotal(){

// run subfunctions to get choices
	getSize();
	getMeat();
	getVegetables();
	getCheese();
	getSauce();
	getCrust();

// find the total cost
	totalCost = sizeCost + meatCost + vegetableCost + cheeseCost + sauceCost + crustCost;

// create arrays of selection and costs
	allSelections = [yourSize, chosenMeats, chosenVegetables, yourCheese, yourSauce, yourCrust, "Total"]
	allCosts = [sizeCost, meatCost, vegetableCost, cheeseCost, sauceCost, crustCost, totalCost];

// create a table to show selections and costs
	tableCreate();
	
// make the receipt element visible
	document.getElementById("receipt").style.display="initial";

	/*document.getElementById("receipt").innerHTML="Excellent choice! \
	You ordered:" + "<br>" + yourSize + " " + sizeCost + "<br>" 
	+ yourCheese + " " + cheeseCost + "<br>" + yourCrust + " " 
	+ crustCost + "<br>" + yourSauce + " " + sauceCost + "<br>" 
	+ chosenMeats + " " + meatCost + "<br>" + chosenVegetables + " " + vegetableCost
	+ "<br>" + "Total: " + totalCost; */
};

function tableCreate() {

// remove existing table in case of resubmission
	var tables = document.getElementsByTagName("TABLE");
	for (var i=tables.length-1; i>=0;i-=1)
		if (tables[i]) tables[i].parentNode.removeChild(tables[i]);

// get the receipt element to hold the table
    var body = document.getElementById("receipt")[0];

// create and define attributes	
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');

// initialize variables to cycle through choice and cost arrays
	var q = 0;
	var p = 0;

// create a row
    for (var i = 0; i < 7; i++) {
        var tr = document.createElement('tr');

// create a column		
       for (var j = 0; j < 2; j++) {
            if (i == 7 && j == 0) {
                break

// if first column, insert choice			
            } else if (j == 0){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(allSelections[q]))
                tr.appendChild(td)
				q++;

// if second column, insert corresponding cost				
            } else if (j == 1){
                var td = document.createElement('td');
                td.appendChild(document.createTextNode("$" + allCosts[p] + ".00"))
                tr.appendChild(td)
				p++;
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    receipt.appendChild(tbl)
}

function getSize(){

	// cycle through sizeArray and set as choice if checked
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			yourSize = sizeArray[i].value;
		}
	}

	// set cost according to choice
	if (yourSize === "Personal Pizza") {
			sizeCost = 6;
		} else if (yourSize === "Medium Pizza") {
			sizeCost = 10;
		} else if (yourSize === "Large Pizza") {
			sizeCost = 14;
		} else if (yourSize === "Extra Large Pizza") {
			sizeCost = 16;
		}	
};

function getMeat(){
	// reset choice and cost in case of resubmission
	chosenMeats = [];
	meatCost = 0;

	// cycle through array add to chosenMeats if checked
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			chosenMeats.push(meatArray[i].value);
		}
	}	

	// determine cost of meat choice(s)
	if (chosenMeats.length === 0) {
		meatCost = 0;
	} else {
			meatCost = chosenMeats.length - 1;
		}

	// make multiple choices look nicer
	chosenMeats = chosenMeats.join(", ")
};

//same as meat function
function getVegetables(){
	chosenVegetables = [];
	vegetableCost = 0;
	for (var i = 0; i < vegetableArray.length; i++) {
		if (vegetableArray[i].checked) {
			chosenVegetables.push(vegetableArray[i].value);
		}
	}
	if (chosenVegetables.length === 0) {
		vegetableCost = 0;
	} else {
			vegetableCost = chosenVegetables.length - 1;
		}
	chosenVegetables = chosenVegetables.join(", ")	
};

// simplified size function
function getCheese(){
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			yourCheese = cheeseArray[i].value;
		}
	}
	if (yourCheese === "Extra cheese") {
			cheeseCost = 3;
		} 
};

// simplified size function
function getSauce(){
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			yourSauce = sauceArray[i].value;
		}
	}
};

// simplified size function
function getCrust(){
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			
			yourCrust = crustArray[i].value;
		}
	}
	if (yourCrust === "Cheese Stuffed Crust") {
			crustCost = 3;
		} 
};