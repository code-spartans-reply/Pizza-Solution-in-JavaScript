var input = {
	"ingredients": "",
	"matrix": 0
};
var countM;
var countT;
$(document).ready(function(){
	var rows, cols;

	$.ajax({
		method: "GET",
		url: "small.in", //medium
		success: function(data){
		var getData = generateInput(data);
		
		makeGrid(getData.matrix[0], getData.matrix[1]);

		}
		
	});

});
function generateInput(data) {
	var numberOfRows, numberOfCol;
	//do the string operations
	if(typeof data == "string"){
		var s = data.split("\n"); 
		var n = s.shift(); // 6 7 1 5
	}
	input.matrix = n.split(" "); //["6", "7", "1", "5"]
	input.ingredients = s;
	return input;
}
function makeGrid(row, col){
	var getCol = [];
	var elemGrid = $("#grid");
	var list = "";
	console.log(input.ingredients);
	var c = 0;
	for (i=0; i<input.ingredients.length; i++){
		var items = "";
		c=i;
		getCol[i] = new Array();
		for(j=0; j < input.ingredients.length; j++){
			getCol[i].push(input.ingredients[j].charAt(c));	
			items += "<td>"+getCol[i][j]+"</td>";
		}
		list += "<tr class='table-row'>"+items+"</tr>"
	}
	console.log(getCol);
	elemGrid.append(list);
}
function makeSlice(contents, M, T){
	var sliceClass = {
		"red": "#f00",
		"green": "#ff0",
		"yellow": "#000"
	};

	switch(contents){
		case 'M':{
			countM++;
			
			break;
		}
		case 'T': {
			countT++;
			
			break;
		}
		default: 0;
	} 
	return count = {"m": countM, "t": countT};
}

/*
	"row": 0, //rows
	"col": 0, //columns
	"minIngredient": 1, //min 1 of each ingredient per slice
	"maxCellsPerSlice": 5 //max 6 cells per slice

*/