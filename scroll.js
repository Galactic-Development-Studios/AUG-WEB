window.onscroll = function() {scrollFunction()};
scrollFunction();
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}