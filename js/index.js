let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);

let newsCategory = ["world"/* , "health", "sports", "business", "travel" */];

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myAPIKey

newsCategory.forEach(element => {

    axios.get(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F`)
        .then((response) => {
            const main = document.querySelector(".Main")

            let section = document.createElement("section")
            section.classList.add("Section")

            let article = document.createElement("article")
            article.classList.add("Section__article")

            let divSectionArticleDiv = document.createElement("div")
            divSectionArticleDiv.classList.add("Section__article-div")

            let divNewsWrapper = document.createElement("div")
            divNewsWrapper.classList.add("newsSectionWrapper", "collapsed")

            let headLine = document.createElement("h1")
            headLine.classList.add("headLineLarge")

            let dropDownButton = document.createElement("button")
            dropDownButton.classList.add("Div__dropDown-button")

            let dropDownIcon = document.createElement("i")
            dropDownIcon.classList.add("fas", "fa-chevron-down")

            let newsNode = document.createTextNode(`${element}`);

            main.appendChild(section);
            section.appendChild(article);
            article.appendChild(divSectionArticleDiv);
            article.appendChild(divNewsWrapper)
            divSectionArticleDiv.appendChild(headLine);
            headLine.appendChild(newsNode);
            divSectionArticleDiv.appendChild(dropDownButton);
            dropDownButton.appendChild(dropDownIcon);

            /* let archiveNews = document.createElement("div")
            archiveNews.classList.add("archiveNewsInArchive")

            archiveNews.appendChild(divSectionArticleDeleteDiv)
            archiveNews.appendChild(newsParagraph) */

            response.data.results.forEach((news) => {

                let dropDownNews = document.createElement("div")
                dropDownNews.classList.add("dropDownNewsSection")

                let newsParagraph = document.createElement("p")
                newsParagraph.classList.add("dropDownNewsParagraph")

                dropDownNews.appendChild(newsParagraph);
                article.appendChild(dropDownNews);

                divNewsWrapper.appendChild(dropDownNews)
                let newsDropDownNode = document.createTextNode(news.title)
                newsParagraph.appendChild(newsDropDownNode);

                let divSectionArticleDeleteDiv = document.createElement("article");
                divSectionArticleDeleteDiv.classList.add("Section__article-div-delete");
            });

            dropDownButton.addEventListener("click", (e) => {
                if (divNewsWrapper.classList.contains("open")) {
                    divNewsWrapper.classList.remove("open")
                } else {
                    divNewsWrapper.classList.add("open")
                }
            });
            let touchCoordinateStart;
            let touchCoordinateMove;
            let touchCoordinateEnd;
            let touchElement;
            let deleteButtonWidth = (window.screen.width * 40) / 100;

            divNewsWrapper.addEventListener("touchstart", (e) => {
                if (e.target.tagName === "DIV") {
                    touchElement = e.target;

                    touchCoordinateStart = e.touches[0].clientX;

                    touchElement.addEventListener("touchmove", (e) => {
                        if (touchElement.tagName === "DIV") {
                            touchCoordinateMove = Math.floor(e.touches[0].clientX);
                            if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
                                touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
                            }
                        }
                    });

                    touchElement.addEventListener("touchend", (e) => {
                        if (touchElement.tagName === "DIV") {
                            touchCoordinateEnd = Math.floor(e.changedTouches[0].clientX);
                            if (touchCoordinateEnd < touchCoordinateStart - deleteButtonWidth / 2) {
                                touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
                            } else {
                                touchElement.style.transform = `translateX(0)`;
                            }
                        }
                    });
                };
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