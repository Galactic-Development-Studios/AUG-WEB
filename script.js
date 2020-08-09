function openMobNav(){
	var MobNav = document.getElementById("mobNav");
	var MobNavButton = document.getElementById("mobNavButton");
	document.body.style.overflowY = "hidden";
	document.getElementById("noScroll").style.overflowY = "hidden";
	mobNav.style.right = "0%";
	mobNavButton.style.display = "none";
	window.scrollTo(0,0);
}
function closeMobNav(){
	var MobNav = document.getElementById("mobNav");
	var MobNavButton = document.getElementById("mobNavButton");
	document.body.style.overflowY = "auto";
	document.getElementById("noScroll").style.overflowY = "auto";
	mobNav.style.right = "-110%";
	mobNavButton.style.display = "block";
	window.scrollTo(0,0);
}