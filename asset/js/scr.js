const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('hide');

});

var cap = ["Web & Graphic Designer", "Full Stack Developer","English Teacher"];
var x = 0;
setInterval(displayCap, 1000);
function displayCap() {
    document.getElementById("know").innerHTML = cap[x];
    x++;
    if (x >= cap.length){
        x = 0;
    }     
}
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    document.getElementById(pageName).style.display = "block";
  
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click();
  
var i = 0;
function progress() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

