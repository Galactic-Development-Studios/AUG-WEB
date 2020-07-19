var state = "hidden";
function toggleMobNavBar(){
	
	var navbar = document.getElementById("mobileNavBar");
	if (state == "hidden"){
		navbar.style.left = "0%";
		state = "shown";
		console.log("openMobNav");
	}else if (state == "shown"){
		navbar.style.left = "-30%";
		state = "hidden";
		console.log("closingMobNav");
}
}