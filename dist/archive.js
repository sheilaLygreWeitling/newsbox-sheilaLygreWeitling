"use strict";

var myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
var url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=" + myAPIKey;
axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F").then(function (response) {
  var news = [];
  news.forEach(function (newsElement) {
    var main = document.querySelector(".Main");
    var frontPageNews = document.createTextNode(newsElement.response);
    var section = document.createElement("section");
    section.classList.add("Section");
    var article = document.createElement("article");
    article.classList.add("Section__article");
    var divSectionArticleDiv = document.createElement("div");
    divSectionArticleDiv.classList.add("Section__article-div");
    var div = document.createElement("div");
    div.classList.add("Div");
    var headLine = document.createElement("h1");
    headLine.classList.add("headLine-l");
    var dropDownDiv = document.createElement("div");
    dropDownDiv.classList.add("Div__dropDown");
    var dropDownButton = document.createElement("button");
    dropDownButton.classList.add("Div__dropDown-button");
    var dropDownIcon = document.createElement("i");
    dropDownIcon.classList.add("fas", "fa-chevron-down");
    main.appendChild(section);
    section.appendChild(article);
    article.appendChild(divSectionArticleDiv);
    article.appendChild(div);
    div.appendChild(headLine);
    headLine.appendChild(frontPageNews);
    article.appendChild(dropDownDiv);
    dropDownDiv.appendChild(dropDownButton);
    dropDownButton.appendChild(dropDownIcon);
  });
});
/* const newsSection = document.querySelector(".Main")
newsSection.innerHTML += `
            <section class="Main__section Section">
        <article class="Section__article">
            <div class="Section__article-div">
                <div class="Div">
                    <img src="/images/newsSectionIcon.png" alt="health">
                </div>
                <div class="Div">
                    <h1>HEALTH</h1>
                </div>
                <div class="Div__dropDown">
                    <button class="Div__dropDown-button">
                        <i class="fas fa-chevron-down"></i></button>
                    </button>
                </div>
            </div>
        </article>
    </section>
        `
 */