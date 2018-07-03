// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event) {
  $('table tr').remove();

  //Create var and assign it to val using jQuery to select id 
  var rows=$('#inputHeight').val();
  var cells=$('#inputWeight').val();

  //create a for loop that iterates over and creates new grid dependent on user input 
  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    for (var j = 1; j <= cells; j++) {
      $( 'tr:last' ).append("<td></td>");
      $('td').attr('class','pixel');
    }
  }
    event.preventDefault();

});

// Select color input
$("#pixelCanvas").on('click','.pixel',function(){
  var paint=$("#colorPicker").val();
  $( this ).css("background-color",paint);
});