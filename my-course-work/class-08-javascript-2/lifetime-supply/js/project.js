document.getElementById('click-me').onclick = calculateLifeTimeDrinks;

function calculateLifeTimeDrinks () {
	var currentAge = document.getElementById('age').value;
	var plannedAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var numPerDay = document.getElementById('num-per-day').value;

	//String concatnation
	var total = (plannedAge - currentAge) * 365 * numPerDay;
	console.log(total)

	document.getElementById('solution').innerHTML = total;
	document.getElementById('drink').innerHTML = favDrink;
}