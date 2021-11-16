"use strict";

axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F").then(function (response) {
  var news = [];
  news.forEach(function (newsElement) {
    var newsMain = document.querySelector(".Main");
  });
});
/*
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
        ` */