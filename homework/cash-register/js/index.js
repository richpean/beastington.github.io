$(document).ready(function () {
	// cash register total
	var total = 0

	$('#entry').submit(function (event) {

		// disables submition 
		event.preventDefault()
		var newEntry = $('#newEntry').val()
		newEntry = parseFloat(newEntry)

		total += newEntry

		newEntry = "$" + newEntry.toFixed(2)
		$('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>')

		totalStr = "$" + total.toFixed(2)
		$('#total').text(totalStr)
		$('#newEntry').val('')
	})
})
