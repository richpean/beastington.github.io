
$(document).ready( function() {
	var total = 0;

	$('.math div').click(function () {
		var num = $(this).text()
		num = parseInt(num)
		total += num
		$("#out").html(total);
	})

	/*// Add 10 event
	$('#a10').click(add10)

	function add10 () {
		total += 10
		$('#out').text(total)
	}

	// Add 20 event
	$('#a20').click(add20)

	function add20 () {
		total += 20
		$('#out').text(total)
	}

	// Add 30 event
	$('#a30').click(add30)

	function add30 () {
		total += 30
		$('#out').text(total)
	}

	// Subtract 10 event
	$('#n10').click(sub10)

	function sub10 () {
		total -= 10
		$('#out').text(total)
	}

	// Subtract 20 event
	$('#n20').click(sub20)

	function sub20 () {
		total -= 20
		$('#out').text(total)
	}*/

	// Subtract 30 event
	$('#blue').click(blueBG)

	function blueBG () {
		$('#out').css("background-color" , "blue")
	}

	// change to red
	$('#red').click(redBG)

	function redBG () {
		$('#out').css("background-color" , "red")
	}

	$('#out').click(whiteBG)

	function whiteBG () {
		$('#out').css("background-color" , "white")
	}

})