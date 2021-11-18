"use strict";

var toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);
var isLight = true;

function modeSwitch() {
  isLight = !isLight;
  var root = document.body;
  isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
  root.classList.toggle("lightMode");
  /*     let mode;
      mode = localStorage.getItem('mode');
      if (mode === 'isLight') {
          lightMode();
      } else {
          isDark;
      } */
}