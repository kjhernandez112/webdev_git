var favoritecolor ={ 
color: 'purple.',
aboutMe: function(){
	return "My favorite color is " + this.color
	}
}
	
function clickHandler(el){
 var element1 = document.getElementById('1');
 var element2 = document.getElementById('2');
 element2.innerHTML = favoritecolor.aboutMe();
 element2.style.color = "purple";
} 

