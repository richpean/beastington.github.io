document.getElementById('color-button').onclick = changeColor;

//the proper way to do it. 
//var red = document.getElementById('red').value;

function changeColor () {
	//get the value each time the button is clicked
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;
	
	var rgbStr = 'rgb(' + red + ',' + green + ',' + blue + ')';
	//document.getElementById('body').style.background = rgbStr;
	document.body.style.backgroundColor = rgbStr;
	document.getElementById('colorful-text').innerHTML = rgbStr;
}