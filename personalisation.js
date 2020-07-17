//check if user is logged in correctly
if (localStorage.getItem("Code") == null || localStorage.getItem("Code") == "") {
	window.location.href="index.html";
}
function checkStaff(){
	stateText = document.getElementById("appStaff");
	code = localStorage.getItem("Code");
	if (code == "ABCD"){
		stateText.innerHTML = "Galaxy";
	} else {
		ErrorAlert = window.confirm("We were unable to find you code, please log out and re log in.");
		if (ErrorAlert == true) {
			window.location.href = "index.html";
		} else{
			return
		}
	}
}
function checkState(){
	stateText = document.getElementById("appStatus");
	code = localStorage.getItem("Code");
	if (code == "ABCD"){
		stateText.innerHTML = "Approved";
		checkStaff();
	} else {
		ErrorAlert = window.confirm("We were unable to find you code, please log out and re log in.");
		if (ErrorAlert == true) {
			window.location.href = "index.html";
		} else{
			return
		}
	}
}
function addUserName(){
	textArea = document.getElementById("userNameWelcome");
	code = localStorage.getItem("Code");
	if (code == "ABCD") {
		textArea.innerHTML = "Welcome, Galaxy";
		checkState()
	}else{
		return;
	}
}
function logOut(){
	localStorage.setItem("Code","");
	window.location.href="index.html";
}