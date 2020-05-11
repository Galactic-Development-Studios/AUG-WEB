var userName;
var password;
var groups;
function lookForUser(){
	userName = document.getElementById("username").value;
	password = document.getElementById("password").value;

	if (userName == "SamSam"){
		if (password == "SamSam") {
			console.log("userSamSamLogged");
			groups = new array [
			"FL", "GM", "IF", "KSP", "MC", "P2", "RB", "SM", "TF"
			];
			changePageUC();
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}else if (userName == ""){
		if (password == "SamSam") {
			console.log("userTeddyLogged")
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}	else if (userName == "Galaxy"){
		if (password == "Gold5121") {
			console.log("userGalaxyLogged")
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}	else if (userName == ""){
		if (password == "SamSam") {
			console.log("userSamSamLogged")
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}	else{
		window.alert("Username or password incorrect");
		console.warn("USERWrong");
	}
}
function changePageUC(){
	var loginScreen = document.getElementById("homePageBodySpecial2");
	var userCenter = document.getElementById("UserCenter");
	var header = document.getElementById("userNameHereHeader");
	console.log("Changed, Variables Loaded");
	loginScreen.style.display = "none";
	userCenter.style.display = "block";

	header.innerHTML = userName;

	//Show groups
}