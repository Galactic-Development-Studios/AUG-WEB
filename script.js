//Game List
console.log(document.getElementById('close3').style.display);
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
			document.getElementById("close3").style.display = "inline";
}