"use strict";

var newsURL = window.location.search;
var params = new URLSearchParams(newsURL);
var newsCategory = ["world"
/* , "health", "sports", "business", "travel" */
];
var myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myAPIKey;
newsCategory.forEach(function (element) {
  axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(element, ".json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F")).then(function (response) {
    var main = document.querySelector(".Main");
    var section = document.createElement("section");
    section.classList.add("Section");
    var article = document.createElement("article");
    article.classList.add("Section__article");
    var divSectionArticleDiv = document.createElement("div");
    divSectionArticleDiv.classList.add("Section__article-div");
    var divNewsWrapper = document.createElement("div");
    divNewsWrapper.classList.add("newsSectionWrapper", "collapsed");
    var headLine = document.createElement("h1");
    headLine.classList.add("headLineLarge");
    var dropDownButton = document.createElement("button");
    dropDownButton.classList.add("Div__dropDown-button");
    var dropDownIcon = document.createElement("i");
    dropDownIcon.classList.add("fas", "fa-chevron-down");
    var newsNode = document.createTextNode("".concat(element));
    main.appendChild(section);
    section.appendChild(article);
    article.appendChild(divSectionArticleDiv);
    article.appendChild(divNewsWrapper);
    divSectionArticleDiv.appendChild(headLine);
    headLine.appendChild(newsNode);
    divSectionArticleDiv.appendChild(dropDownButton);
    dropDownButton.appendChild(dropDownIcon);
    /* let archiveNews = document.createElement("div")
    archiveNews.classList.add("archiveNewsInArchive")
     archiveNews.appendChild(divSectionArticleDeleteDiv)
    archiveNews.appendChild(newsParagraph) */

    response.data.results.forEach(function (news) {
      var dropDownNews = document.createElement("div");
      dropDownNews.classList.add("dropDownNewsSection");
      var newsParagraph = document.createElement("p");
      newsParagraph.classList.add("dropDownNewsParagraph");
      dropDownNews.appendChild(newsParagraph);
      article.appendChild(dropDownNews);
      divNewsWrapper.appendChild(dropDownNews);
      var newsDropDownNode = document.createTextNode(news.title);
      newsParagraph.appendChild(newsDropDownNode);
      var divSectionArticleDeleteDiv = document.createElement("article");
      divSectionArticleDeleteDiv.classList.add("Section__article-div-delete");
    });
    dropDownButton.addEventListener("click", function (e) {
      if (divNewsWrapper.classList.contains("open")) {
        divNewsWrapper.classList.remove("open");
      } else {
        divNewsWrapper.classList.add("open");
      }
    });
    var touchCoordinateStart;
    var touchCoordinateMove;
    var touchCoordinateEnd;
    var touchElement;
    var deleteButtonWidth = window.screen.width * 40 / 100;
    divNewsWrapper.addEventListener("touchstart", function (e) {
      if (e.target.tagName === "DIV") {
        touchElement = e.target;
        touchCoordinateStart = e.touches[0].clientX;
        touchElement.addEventListener("touchmove", function (e) {
          if (touchElement.tagName === "DIV") {
            touchCoordinateMove = Math.floor(e.touches[0].clientX);

            if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
              touchElement.style.transform = "translateX(".concat(touchCoordinateMove - touchCoordinateStart, "px)");
            }
          }
        });
        touchElement.addEventListener("touchend", function (e) {
          if (touchElement.tagName === "DIV") {
            touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);

            if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
              touchElement.style.transform = "translateX(-".concat(deleteButtonWidth, "px)");
            } else {
              touchElement.style.transform = "translateX(0)";
            }
          }
        });
      }

      ;
    });
  });
});
/*         document.querySelector(".fas").addEventListener("click", () => {
            function show_hide() {
                if (document.querySelector(".dropDownNews").style.display === "none") {
                    document.querySelector(".dropDownNews").style.display = "block";
                } else {
                    document.querySelector(".dropDownNews").style.display = "none";
                }
            } show_hide();
        }); */

/* parentElement.querySelector(".news_DeletedItem").onclick = (e) => {
    let userObject = {
        id: parentElement.id,
        name: parentElement.querySelector(".animate__animated-jokeItem").textContent,
    };
    recycle = recycle.filter((item) => userObject.id != item.id);

    if (recycle.length > 0) {
        localStorage.setItem("deletedItems", JSON.stringify(recycle));
    } else {
        localStorage.clear();
    }

    parentElement.classList.add("animate__fadeOutLeft")
    setTimeout(() => {
        parentElement.classList.add("collapsed");
    }, 800);
    setTimeout(() => {
        parentElement.remove();
    }, 900);
}; */

/*         document.querySelector(".Main").addEventListener("click", (e) => {
            if (e.target.tagName === "I") {
                touchElement = e.target
                parentElement = e.target.closest("div");



                parentElement.classList.add("animate__fadeOutDown")
                setTimeout(() => {
                    parentElement.classList.add("open");
                }, 800);
            }
        });
    }); */

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