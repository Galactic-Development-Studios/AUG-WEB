var codeData;
var codeInput = document.getElementById("formCode");
function saveDataPerm(){
	localStorage.setItem("Code", codeData);
	window.location.href="main.html";
}
function checkIfInputMatches(){
	//Make sure to account for extra "else" statment at end for incorrect UID, end copy at else
	//begin copy here
	if (codeData == "ABCD"){
			saveDataPerm();
	}
	else if(localStorage.getItem("Code")==""){
	return
	}
	else{
		window.alert("Unknown Code");
		console.log("Incorrect Code");
	}
}
function saveDataTemp(){
	codeData = document.getElementById("formCode").value;
	checkIfInputMatches();
}

function checkIfInputsValid(){
	if (codeInput == ""||codeInput == null){
		window.alert("You didn't enter a code");
	}else{
		saveDataTemp();
	}
}
function checkForPreviousEntry(){
	prevCode = localStorage.getItem("Code");
	if (localStorage.getItem("Code") != null){
		codeData = prevCode;
		console.log("someone was here before");
		checkIfInputMatches();
	}else if (localStorage.getItem("Code") == "" || localStorage.getItem("Code") == null){
		return;
	}
}