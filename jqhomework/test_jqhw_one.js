$(document).ready(function(){
$('#button-1').css('background-color', '#00FF00');
$('#button-2').css('background-color', '#ff004d');

$('#button-1').click(function() {
	var value =	$('#box-1').val()
	display(value);
});

$('#button-2').click(function() {
	var value =	$('#box-2').val()
	display(value);

})
	
function display(food){
	$('#display').append("<li class='input-1'>" + food + "</li>");	
}
	function display(food){
	$('#display').append("<li class='input-2'>" + food + "</li>");
	}

$( '#button-1' ).click(function() {
  $( 'h1' ).empty();
});

$('button-2').click(function() {
	$('h2').animate()('margin-right:50px');
//I know I'm missing something to make this animate. What am I missing?//

});
});



// $('.hello').click(function() {
// 	var value =	$('.hello').val()
// 	display(value);
// });

// $('.goodbye').click(function() {
// 	var value =	$('#box-2').val()
// 	display(value);

// })

// function display(hello){
// 	$('#display').empty("<li class='input-1'>" + food + "</li>");
// }