$(document).ready(function(){
	
var names = Object.keys(data);

for (var i=0; i<names.length; i++){
	$('#list').append('<li>'+names[i]+'</li>');
//how to do loops//
}

$('#list li').click(function(){
	console.log(this);
	var person = this.innerHTML;
	var bio = data[person];
	$('#bio').append(bio);
 });
});



// 	var bio = data ['Vint Cerf'];
// 	$('#bio').append(bio);

// });


// $('list').html(function () {


// 	// 	var names = $('list').html()

// 	})
//console.log('hello');

// $('#list').click(function(){
// 	alert('hello')
