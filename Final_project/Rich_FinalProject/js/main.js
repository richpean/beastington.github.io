
$(document).ready(function () {

  $( "input.firstname" )
    .keyup(function() {
      var value = $( this ).val();
      $( "span#username" ).text( value );
    })
    .keyup();

  $( "input.lastname" ).click(function() {
     //if( $("input.firstName").val() === "") {
          $( "p.sidecopy" ).fadeOut(1000, function() { 
          $( "p#namesidetext" ).fadeIn(1000); });
  //})
  })

  $( ".btn-large" ).click(function() {
      $(".firstname").text(function() {
          if($(this).val() === "")
          $( "p.alert" ).text( "You still have a little more work to do!" ).css('color','indianRed')
  
          /*else if($(this).val() === "null")
          $( ".form-footer" ).css( "margin-top", "40px" );*/          
      })
  })

})






//$( "#Name" ).click(function() {
  //$( "p.sidecopy" ).fadeOut(1600);
    //( "p#nameSideText" ).fadeIn(1600);
//});
 
//$( "#btn2" ).click(function() {
  //$( "div" ).show();
  //$( "#log" ).empty();});

/*$( "#Name" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
      $( "p.sidecopy" ).fadeOut(1600);
    $( "#nameSideText" ).text( "Validated..." ).show();
    return;
  }
 
  $( "#nameSideText" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});*/

/*$( ".btn-large" ).click(function() {
    $(".firstName, .lastName, .age, .input-field, textarea").each(function() {
        if($(this).val() === "")
        $( "p.alert" ).append( "You still have a little more work to do!" ); });
});*/