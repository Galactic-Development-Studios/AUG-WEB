//Game List
function showGameList(){
	document.getElementById("gameList").style.display= "block";
	document.getElementById("close1").style.display = "none";
		document.getElementById("close2").style.display = "none";
			document.getElementById("close3").style.display = "none";
}
function closeGameList(){
		document.getElementById("gameList").style.display= "none";
		document.getElementById("close1").style.display = "block";
		document.getElementById("close2").style.display = "block";
			document.getElementById("close3").style.display = "block";
}
function timeOutCheck(){
	loadVar = setTimeout(loadFin, 2500);
}
function loadFin(){
	var page = document.getElementById("page");
	var spinner = document.getElementById("loader");

	spinner.style.display="none";
	page.style.display="block";
}
