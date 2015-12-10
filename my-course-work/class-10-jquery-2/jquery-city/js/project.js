$(document).ready(function (){ 

	/*$('#first').hover(function(){
		$('#bigimage').attr('src','img/1.jpg')

	})
	$('#second').hover(function(){
		$('#bigimage').attr('src','img/2.jpg')

	})
	$('#third').hover(function(){
		$('#bigimage').attr('src','img/3.jpg')

	})

	$('#fourth').hover(function(){
		$('#bigimage').attr('src','img/4.jpg')

	})*/

$('.thumb').hover(function(){
	var imgSrc = $(this).attr('src')
	$('#bigimage').attr('src', imgSrc)
}) 
	
})

