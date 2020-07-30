//variables
var username = window.atob(localStorage.getItem("UIDSaved"));
var isStaff;

//Check if userCameIncorrectly
if (localStorage.getItem("UIDSaved") == null || localStorage.getItem("UIDSaved") == "") {
	console.warn("userBad");
	window.location.href = "index.html";
}else{
	console.log("userGood");
}
//LoadUserName
insertUserName();
function insertUserName(){
	document.getElementById("userNameWelcome").innerHTML = "Welcome, "+username;
}
//Check if staff & hide staff group
function checkIfStaff(){
	if (username == "SamSam"){
		isStaff = true;
	}else if (username == "Teddy9264"){
		isStaff = true;
	}
	else if (username == "Galaxy"){
		isStaff = true;
	}
	else if (username == "davo2212"){
		isStaff = true;
	}
	else if (username == "Gubbys"){
		isStaff = true;
	}
	else{
		isStaff = false;
	}
}
hideStaffGroup();
function hideStaffGroup(){
	checkIfStaff();
	if (isStaff == false){
		document.getElementById("staffGroupLI").style.display = "none";
	}
}
//Logout
function logout(){
	localStorage.setItem("UIDSaved","");
	localStorage.setItem("PWDSaved","");
	window.location.href= "index.html";
}