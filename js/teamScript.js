var ham=document.querySelector('.hamburger');
var nav=document.querySelector('.nav');

const style=getComputedStyle(nav);




ham.addEventListener("click", navopen);

function navopen(){
	if (nav.style.display == 'none'){
		nav.style.display='block';
	}
	else{
		nav.style.display='none';
	}
}



// To close the navbar when clicked anywhere else except the icon
// var bodyVar=document.querySelectorAll("* div:not(.hamburger)");
// for(i=0;i<bodyVar.length;i++){
// 	bodyVar[i].addEventListener("click", navclose);
// }
// function navclose(){
// 	if(nav.style.display == 'block'){
// 		nav.style.display='none';
// 	}
// }