//Game List
function showGameList(){
	document.getElementById('gameList').style.display= 'block';
	document.getElementById('close1').style.display = 'none';
		document.getElementById('close2').style.display = 'none';
			document.getElementById('close3').style.display = 'none';
	document.getElementById('gameList').innerHTML = "<div id='gameListItemFullWidth'><p>Click window to close</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/FL.png'><p>Flashing Lights</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/GM.png'><p>Garry's Mod</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/IF.png'><p>Infinite Flight</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/KSP.png'><p>Kerbal Space Program</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/MC.png'><p>Minecraft</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/P2.png'><p>Payday 2</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/RB.png'><p>Roblox</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/SM.png'><p>Surving Mars</p></div><div id='gameListItem'><img id='gameListItemImg' src='assets/images/gameIcons/TF.png'><p>Team Fortress</p></div>"
}
function closeGameList(){
		document.getElementById('gameList').style.display= 'none';
		document.getElementById('close1').style.display = 'block';
		document.getElementById('close2').style.display = 'block';
			document.getElementById('close3').style.display = 'block';
			document.getElementById('gameList').innerHTML = '';
}
function timeOutCheck(){
	loadVar = setTimeout(loadFin, 2500);
}
function loadFin(){
	var page = document.getElementById('page');
	var spinner = document.getElementById('loader');

	spinner.style.display='none';
	page.style.display='block';
}
