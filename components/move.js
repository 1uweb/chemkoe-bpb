var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-global").style.top = "0";
  } else {
    document.getElementById("nav-global").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
} 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-site").style.top = "5rem";
  } else {
    document.getElementById("nav-site").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
} 