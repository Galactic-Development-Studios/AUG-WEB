//formInputs
var UIDInput = document.getElementById('formUID');
var PWDInput = document.getElementById('formPWD');
//TempData
var tempUID;
var tempPWD;
//localStorage
var savedUID = localStorage.getItem("UIDSaved");
var savedPWD = localStorage.getItem("PWDSaved");
//encryption functions
function base64Enc(x){
	var eX = window.btoa(x);
	return eX;
}
function base64Dec(x){
	var dX = window.atob(x);
	return dx;
}
//checkIfInputsAreValid
function checkInputVal(){
	if (UIDInput.value == null || UIDInput.value == ""){
		window.alert("You must input a Username");
	}
	else if (PWDInput.value == null || PWDInput.value == ""){
		window.alert("You must input a Password");
	}
	else{
		tempUID = base64Enc(UIDInput.value);
		tempPWD = base64Enc(PWDInput.value);
		checkValLogin();
	}
}
function saveDataPerm(){
	localStorage.setItem("UIDSaved",tempUID);
	localStorage.setItem("PWDSaved",tempPWD);
	console.log("dataSaved");
	window.location.href="main.html";
}
function checkValLogin(){
	if (tempUID == "U2FtU2Ft"){
		if (tempPWD == "U2FtU2Ft"){
			saveDataPerm();
		}
	}else
	if (tempUID == "R2FsYXh5"){
		if (tempPWD == "R2FsYXh5NTEyMUFVRw=="){
			saveDataPerm();
		}
	}else
	if (tempUID == "VGVkZHk5MjY0"){
		if (tempPWD == "Tm8gY29tbWVudA=="){
			saveDataPerm();
		}
	}else
	if (tempUID == "ZGF2bzIyMTI="){
		if (tempPWD == "TWF4aWUyMDE0"){
			saveDataPerm();
		}
	}else
	if (tempUID == "YW5ub3lpbmc="){
                if (temp == "RmlyZW1hbjQzMg=="){
			saveDataPerm();
		}
	}else
	if (tempUID == "R3ViYnlz"){
		if (tempPWD == "TmljaG8yMjE1Mzk="){
			saveDataPerm();
		}
	}else
	if (tempUID == "SmFyZWQ="){
		if (tempPWD == "U3BlZWRAMTQ="){
			saveDataPerm();
		}
	}else
	if (tempUID == "TWFpbGJveTA2"){
		if (tempPWD == "RmlyZWZpZ2h0ZXIxNjcz"){
			saveDataPerm();
		}
	}else{
		console.warn("unknownUser");
		window.alert("Your username or password is incorrect");
	}
}
//Autologin
function checkPrevLogin(){
	if (localStorage.getItem("UIDSaved") != null && localStorage.getItem("UIDSaved") != ""){
		tempUID = localStorage.getItem("UIDSaved");
		tempPWD = localStorage.getItem("PWDSaved");
		checkValLogin();
	}else{
		return
	}
}
//Clear OutdatedStorage
localStorage.setItem("UID",null);
localStorage.setItem("PWD",null);
