"use strict";

var sections = ["world", "health", "sports", "business", "travel"];
var myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
sections.forEach(function (element) {
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(element, ".json?api-key=").concat(myAPIKey)).then(function (response) {
    /*             console.log('hey') */
    var sectionSettings = document.querySelector(".Section__settings-div-sort");
    console.log(response.data.section);
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
    inputToggle.classList.add("input-toggle");
    inputToggle.setAttribute("type", "checkbox");
    var inputSpan = document.createElement("span");
    inputSpan.classList.add("input-span");
    sectionSettings.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(paragraph);
    li.appendChild(label);
    li.appendChild(labelSelect);
    li.appendChild(inputToggle);
    li.appendChild(inputSpan);
  });
});