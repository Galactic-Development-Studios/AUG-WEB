var userName;
var password;
var FLGroup = false;
var GMGroup = false;
var IFGroup = false;
var KSPGroup = false;
var MCGroup = false;
var P2Group = false;
var RBGroup = false;
var SMGroup = false;
var TFGroup = false;
document.getElementById("UCGameIconA1").style.display = "None";
document.getElementById("UCGameIconA2").style.display = "None";
document.getElementById("UCGameIconA3").style.display = "None";
document.getElementById("UCGameIconA4").style.display = "None";
document.getElementById("UCGameIconA5").style.display = "None";
document.getElementById("UCGameIconA6").style.display = "None";
document.getElementById("UCGameIconA7").style.display = "None";
document.getElementById("UCGameIconA8").style.display = "None";
document.getElementById("UCGameIconA9").style.display = "None";
function lookForUser(){
	userName = document.getElementById("username").value;
	password = document.getElementById("password").value;

	if (userName == "SamSam"){
		if (password == "SamSam") {
			console.log("userSamSamLogged");
			FLGroup = true;
			GMGroup = true;
			IFGroup = true;
			KSPGroup = true;
			MCGroup = true;
			P2Group = true;
			RBGroup = true;
			SMGroup = true;
			TFGroup = true;
			changePageUC();
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}else if (userName == "Galaxy"){
		if (password == "Gold5121AUG") {
			console.log("userGalaxyLogged");
			FLGroup = true;
			GMGroup = false;
			IFGroup = true;
			KSPGroup = true;
			MCGroup = true;
			P2Group = false;
			RBGroup = true;
			SMGroup = true;
			TFGroup = false;
			changePageUC();
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
	}	else if (userName == "Teddy9264"){
		if (password == "No comment") {
			console.log("userTeddyLogged");
			FLGroup = true;
			GMGroup = false;
			IFGroup = false;
			KSPGroup = false;
			MCGroup = true;
			P2Group = false;
			RBGroup = true;
			SMGroup = false;
			TFGroup = false;
			changePageUC();
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
		}else if (userName == "TomD"){
		if (password == "Maxie2014") {
			console.log("userTomDLogged");
			FLGroup = true;
			GMGroup = false;
			IFGroup = false;
			KSPGroup = false;
			MCGroup = true;
			P2Group = false;
			RBGroup = true;
			SMGroup = false;
			TFGroup = false;
			changePageUC();
		}else{
			window.alert("Username or password incorrect");
			console.warn("PASSWrong");
		}
		}else{
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
		if (FLGroup == true){
			document.getElementById("UCGameIconA1").style.display = "inline-block";
			console.log("is in FL");
		} else{
			document.getElementById("UCGameIconA1").style.display = "none";
			console.log("is not in FL");
		};
		if (GMGroup == true){
			document.getElementById("UCGameIconA2").style.display = "inline-block";
			console.log("is in GM");
		} else{
			document.getElementById("UCGameIconA2").style.display = "none";
			console.log("is not in GM");
		};
		if (IFGroup == true){
			document.getElementById("UCGameIconA3").style.display = "inline-block";
			console.log("is in IF");
		} else{
			document.getElementById("UCGameIconA3").style.display = "none";
			console.log("is not in IF");
		};
		if (KSPGroup == true){
			document.getElementById("UCGameIconA4").style.display = "inline-block";
			console.log("is in KSP");
		} else{
			document.getElementById("UCGameIconA4").style.display = "none";
			console.log("is not in KSP");
		};
		if (MCGroup == true){
			document.getElementById("UCGameIconA5").style.display = "inline-block";
			console.log("is in MC");
		} else{
			document.getElementById("UCGameIconA5").style.display = "none";
			console.log("is not in MC");
		};
		if (P2Group == true){
			document.getElementById("UCGameIconA6").style.display = "inline-block";
			console.log("is in P2");
		} else{
			document.getElementById("UCGameIconA6").style.display = "none";
			console.log("is not in P2");
		};
		if (RBGroup == true){
			document.getElementById("UCGameIconA7").style.display = "inline-block";
			console.log("is in Roblox");
		} else{
			document.getElementById("UCGameIconA7").style.display = "none";
			console.log("is not in Roblox");
		};
		if (SMGroup == true){
			document.getElementById("UCGameIconA8").style.display = "inline-block";
			console.log("is in SM");
		} else{
			document.getElementById("UCGameIconA8").style.display = "none";
			console.log("is not in SM");
		};
		if (TFGroup == true){
			document.getElementById("UCGameIconA9").style.display = "inline-block";
			console.log("is in TF");
		} else{
			document.getElementById("UCGameIconA9").style.display = "none";
			console.log("is not in TF");
		};
}
function resetPasswordShow(){
	document.getElementById("resetPassForm").style.display = "block";
}
function resetPasswordHide(){
	document.getElementById("resetPassForm").style.display = "none";
}