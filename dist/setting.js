"use strict";

var sections = ["world"
/*     "health",
    "sports",
    "business",
    "travel" */
];
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
    var label = document.createElement("label");
    label.classList.add("settings-label");
    var labelSelect = document.createElement("label");
    labelSelect.classList.add("settings-label-select");
    var inputToggle = document.createElement("input");
    inputToggle.classList.add("inputToggle", "on");
    inputToggle.setAttribute("type", "checkbox");
    var inputSpan = document.createElement("span");
    inputSpan.classList.add("input-span", "off");
    sectionSettings.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(paragraph);
    li.appendChild(label);
    li.appendChild(labelSelect);
    labelSelect.appendChild(inputToggle);
    labelSelect.appendChild(inputSpan);
    paragraph.appendChild(paragraphContext);
  });
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("inputToggle")) {
      if (!e.target.hasAttribute("checked")) {
        e.target.setAttribute("checked", "checked");
        localStorage.setItem("checked", true);
        e.target.classList.add("on");
        e.target.classList.remove("off");
        localStorage.setItem("on", true);
        localStorage.setItem("off", false);
      } else {
        e.target.removeAttribute("checked");
        localStorage.setItem("checked", false);
        e.target.classList.add("off");
        e.target.classList.remove("on");
        localStorage.setItem("off", true);
        localStorage.setItem("on", false);
      }
    }
  });
});