/*document.getElementById('clickme').onclick = tellFortune;

function tellFortune () {
	// 1: Get your inputs
	var hometown = document.getElementById('hometown').value;
	var partner = document.getElementById('partner').value;
	var numKids = document.getElementById('numKids').value;
	var jobTitle = document.getElementById('jobTitle').value;
	
	// 2: Run your function logic
	var theFortune = 'You will be a ' + jobTitle + ' in ' + hometown + ', ' + ' and married to ' + partner + ' with ' + numKids + ' kids.';

	// 3: Ouput 
	document.getElementById('output').innerHTML = theFortune;
}*/

$(document).ready(function () {
	$('#clickme').click(tellFortune)
	// 1: Get your inputs
	function tellFortune () {
		var hometown = $('#hometown').val();
		var partner = $('#partner').val();
		var numKids = $('#numKids').val();
		var jobTitle = $('#jobTitle').val();
	// 2: Run your function logic
		var fortuneStr = 'You will be a ' + jobTitle + ' in ' + hometown + ', ' + ' and married to ' + partner + ' with ' + numKids + ' kids.';
	// 3: Ouput 
		$('#output').text(fortuneStr)
	}
})