let navbarMblState = "hidden";
function toggleMobileNavBar(){
	const navbar = document.getElementById("mobileNavBar");
	const btn = document.getElementById("mobileNavButton");
	const btnImg = document.getElementById("mobileNavButtonImg");
if (navbarMblState == "hidden"){
	navbar.style.right="0";
	btnImg.src = "assets/images/icons/x.svg";
	navbarMblState = "shown";
	window.addEventListener('scroll', noScroll);
	 window.scrollTo(0, 0);
	document.body.style.overflowY = "hidden";
}else if (navbarMblState == "shown") {
	navbar.style.right="-111vw";
	btnImg.src = "assets/images/icons/3lines.svg";
	navbarMblState = "hidden";
	window.removeEventListener('scroll', noScroll);
	document.body.style.overflowY = "none";
}
}
function noScroll() {
  window.scrollTo(0, 0);
}