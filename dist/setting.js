"use strict";

var sections = ["world", "health", "sports", "business", "travel"];
var myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
sections.forEach(function (element) {
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(element, ".json?api-key=").concat(myAPIKey)).then(function (response) {
    var sectionSettings = document.querySelector(".Section__settings-div-sort");
    console.log(response.data.section);
    var paragraphContext = document.createTextNode(response.data.section);
    var ul = document.createElement("ul");
    ul.classList.add("setting-ul");
    var li = document.createElement("li");
    li.classList.add("setting-li");
    var paragraph = document.createElement("p");
    paragraph.classList.add("setting-paragraph");
    var togglebutton = document.createElement('button');
    togglebutton.classList.add("toggleButton");
    togglebutton.id = "toggleButton-".concat(element);
    var togglebuttonIcon = document.createElement('i');
    togglebuttonIcon.classList.add("toggleButtonIcon", "fas", "fa-circle");
    sectionSettings.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(paragraph);
    li.appendChild(togglebutton);
    togglebutton.appendChild(togglebuttonIcon);
    paragraph.appendChild(paragraphContext);

    function categorySwitchFunction(e) {
      if (localStorage.getItem(e.id.replace('toggleButton-', '')) == 'true') {
        e.classList.add('on');
      } else {
        e.classList.remove('on');
      }

      e.addEventListener("click", function () {
        if (e.classList.contains("on")) {
          localStorage.setItem(e.id.replace("toggleButton-", ""), "false");
          e.classList.remove("on");
        } else {
          localStorage.setItem(e.id.replace("toggleButton-", ""), "true");
          e.classList.add("on");
        }
      });
    }

    categorySwitchFunction(togglebutton);
  });
});