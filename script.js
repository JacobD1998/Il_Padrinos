document.getElementById("greenButton").addEventListener("click", changeToGreen());			
function changeToGreen(){
	document.getElementsByTagName("body").style.backgroundColor = "#566B2F";
	alert("Hello!");
}

document.getElementById("redButton").addEventListener("click", changeToMaroon());			
function changeToMaroon(){
	document.getElementsByTagName("body").style.backgroundColor = "maroon";
	alert("Hello!");
}