if (window.innerWidth < 700){
	window.alert("Only supported on desktop")
	window.location.href="https://iksa.aussie-games.online"
}

const yt = document.getElementById("YT")
const info = JSON.parse(data)
function updateClock(){
	const clock = document.getElementById("countdownClock")
	const name = document.getElementById("countdownName")
	const status = document.getElementById("countdownStatus")
	if (countDownDate=="Unknown"){
		clock.innerHTML = "Launch Schedule Not Set"
	}
	else{
	var now = new Date().getTime();
	var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  	clock.innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
	if (distance < 0) {
    document.getElementById("demo").innerHTML = "Launch!";
	};
	}
	name.innerHTML = info[0].mission
	status.innerHTML = "Status: " +info[0].status

}
setInterval(updateClock, 1000)
if (info.link != null){
yt.src = info[0].link
}else{
	yt.src = ""
}