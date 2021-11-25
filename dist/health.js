"use strict";

/* let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);
let newsCategory = params.get("/health.json");


let urlHealth = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" + myAPIKeyHealth */
var health = ["health"];
var myAPIKeyHealth = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
health.forEach(function (element) {
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(element, ".json?api-key=").concat(myAPIKeyHealth)).then(function (response) {
    var newsHealth = response.data.results;
    console.log(element);
    newsHealth.forEach(function (newsElement) {
      var main = document.querySelector(".Main");
      var section = document.createElement("section");
      section.classList.add("Section");
      var article = document.createElement("article");
      article.classList.add("Section__article");
      var divSectionArticleDiv = document.createElement("div");
      divSectionArticleDiv.classList.add("Section__article-div");
      var div = document.createElement("div");
      div.classList.add("Div");
      var headLine = document.createElement("h1");
      headLine.classList.add("headLineLarge");
      var dropDownButton = document.createElement("button");
      dropDownButton.classList.add("Div__dropDown-button");
      var dropDownIcon = document.createElement("i");
      dropDownIcon.classList.add("fas", "fa-chevron-down");
      var newsNode = document.createTextNode(newsElement.section);
      main.appendChild(section);
      section.appendChild(article);
      article.appendChild(divSectionArticleDiv);
      article.appendChild(div);
      div.appendChild(headLine);
      headLine.appendChild(newsNode);
      div.appendChild(dropDownButton);
      dropDownButton.appendChild(dropDownIcon);
    });
  });
});