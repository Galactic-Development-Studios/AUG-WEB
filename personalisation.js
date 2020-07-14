//check if user is logged in correctly
if (localStorage.getItem("UID") == null) {
	window.location.href="index.html";
}
var userName = localStorage.getItem("UID");
document.getElementById("userNameWelcome").innerHTML = "Welcome, " + userName;
var isStaff;
function hideStaffGroup(){
	if (isStaff == false){
		document.getElementById("staffGroupLI").style.display = "none";
	}
}
 function checkIfStaff(){
 	if (localStorage.getItem("UID") == "SamSam"){
 		isStaff = true;
 		console.log("isStaff");
 	}else{
 		isStaff = false;
 		console.log("isNotStaff");
 		hideStaffGroup();
 	}
 }
function logOut(){
	localStorage.setItem("UID","");
	localStorage.setItem("PWD","");
	window.location.href="index.html";
}