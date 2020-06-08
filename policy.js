var policyBody = document.getElementById("bodyPolicy");
	var header1 = document.createElement("H1");
	var para1 = document.createElement("P");
	header1.innerHTML = "Welcome to Aussie Games' Policy Page";
	para1.innerHTML = "Here you can find out information on how we process your data, termination, you rights and many more by clicking a page to the left. We must warn you that by visiting another page on the site or interacting with our community clasifies as accepting our TAC and other related polocies";
	policyBody.appendChild(header1);
	policyBody.appendChild(para1);
function changePolicyWelcome(){
	policyBody.innerHTML = "";
	var header1 = document.createElement("H1");
	var para1 = document.createElement("P");
	header1.innerHTML = "Welcome to Aussie Games' Policy Page";
	para1.innerHTML = "Here you can find out information on how we process your data, termination, you rights and many more by clicking a page to the left. We must warn you that by visiting another page on the site or interacting with our community clasifies as accepting our TAC and other related polocies";
	policyBody.appendChild(header1);
	policyBody.appendChild(para1);
}
function changePolicyTerminology(){
	policyBody.innerHTML = "";
	var headerMain = document.createElement("H1");
	var header1 = document.createElement("H2");
	var para1 = document.createElement("P");
	var header2 = document.createElement("H2");
	var para2 = document.createElement("P");
	var header3 = document.createElement("H2");
	var para3 = document.createElement("P");
	headerMain.innerHTML = "Who is who here?";
	para1.innerHTML = "Here you can find out information on how we process your data, termination, you rights and many more by clicking a page to the left. We must warn you that by visiting another page on the site or interacting with our community clasifies as accepting our TAC and other related polocies";
	policyBody.appendChild(headerMain);
	policyBody.appendChild(para1);
}