$(document).ready(function(){
	var total = 0

	$('#entry').submit(function (event) {

		event.preventDefault()
		var newCost = $('#newEntry').val()
		newCost = parseFloat(newCost)
		//cost = parseFloat(cost)
		total += newCost
		var addtoreceipt = '<tr><td></td><td>' + '$' + newCost + '</td></tr>'
		$('#entries').append(addtoreceipt)
		$('#total').text("$" + total.toFixed(2))
		$('#newEntry').val('')
	})

})




/*$(document).ready(function(){
	$('#entry').submit(function(event) {
		event.preventDefault()
		var cost = $('#newEntry').val()
		$('tbody#entries').text('<tr>' + cost + '</tr>')

		//alert('<tr>' + cost + '</tr>')

	})


})*/
