var UIDData;
var PWDData;
var UIDInput = document.getElementById("formUID");
var PWDInput = document.getElementById("formPWD");
function saveDataPerm(){
	localStorage.setItem("UID", UIDData);
	localStorage.setItem("PWD", PWDData);
	window.location.href="main.html";
}
function checkIfInputMatches(){
	//Make sure to account for extra "else" statment at end for incorrect UID, end copy at else
	//begin copy here
	if (UIDData == "SamSam"){
		if (PWDData == "SamSam"){
			console.log("SamSam logged in");
			saveDataPerm();
		}else{
			window.alert("Incorrect Username or Password");
			console.log("Password wrong");
		}
	}else if (UIDData == "Galaxy"){
		if (PWDData == "GalAUG5121"){
			console.log("Galaxy logged in");
			saveDataPerm();
		}else{
			window.alert("Incorrect Username or Password");
			console.log("Password wrong");
		}
	}else if (UIDData == "Teddy9264"){
		if (PWDData == "No comment"){
			console.log("Teddy logged in");
			saveDataPerm();
		}else{
			window.alert("Incorrect Username or Password");
			console.log("Password wrong");
		}
	}
	else if (UIDData == "davo2212"){
		if (PWDData == "Maxie2014"){
			console.log("Davo logged in");
			saveDataPerm();
		}else{
			window.alert("Incorrect Username or Password");
			console.log("Password wrong");
		}
	}
	else if (UIDData == "Gubbys"){
		if (PWDData == "Nicho221539"){
			console.log("Gubby logged in");
			saveDataPerm();
		}else{
			window.alert("Incorrect Username or Password");
			console.log("Password wrong");
		}
	}
	else if(localStorage.getItem("UID")==""){
	return
	}
	else{
		window.alert("Incorrect Username or Password");
		console.log("Incorrect UID");
	}
}
function saveDataTemp(){
	UIDData = document.getElementById("formUID").value;
	PWDData = document.getElementById("formPWD").value;
	checkIfInputMatches();
}

function checkIfInputsValid(){
	if (UIDInput == ""||UIDInput == null){
		window.alert("You didn't enter a username");
	}else if (PWDInput == "" || PWDInput == null){
		window.alert("You didn't enter a password");
	}else{
		saveDataTemp();
	}
}
function checkForPreviousEntry(){
	prevUID = localStorage.getItem("UID");
	prevPWD = localStorage.getItem("PWD");
	if (localStorage.getItem("UID") != null){
		UIDData = prevUID;
		PWDData = prevPWD;
		console.log("someone was here before");
		checkIfInputMatches();
	}else if (localStorage.getItem("UID") == "" || localStorage.getItem("UID") == null){
		return;
	}
}