"use strict";

var newsURL = window.location.search;
var params = new URLSearchParams(newsURL);
var newsCategory = params.get("/health.json");
var myAPIKeyHealth = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
var urlHealth = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" + myAPIKeyHealth;
axios.get("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F").then(function (response) {
  var newsHealth = response.data.results;
  console.log(response);
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