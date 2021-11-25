let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);
let newsCategory = params.get("/home.json");

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myAPIKey

axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F")
    .then((response) => {
        const news = response.data.results;

        console.log(response);
        news.forEach(newsElement => {
            const main = document.querySelector(".Main")

            let section = document.createElement("section")
            section.classList.add("Section")

            let article = document.createElement("article")
            article.classList.add("Section__article")

            let divSectionArticleDiv = document.createElement("div")
            divSectionArticleDiv.classList.add("Section__article-div")

            let divSectionArticleDeleteDiv = document.createElement("div");
            divSectionArticleDeleteDiv.classList.add("Section__article-div-delete");

            let headLine = document.createElement("h1")
            headLine.classList.add("headLineLarge")

            let dropDownButton = document.createElement("button")
            dropDownButton.classList.add("Div__dropDown-button")

            let dropDownNews = document.createElement("div")
            dropDownNews.classList.add("dropDownNewsSetion")

            let newsParagraph = document.createElement("p")
            newsParagraph.classList.add("dropDownNewsParagraph")

            let dropDownIcon = document.createElement("i")
            dropDownIcon.classList.add("fas", "fa-chevron-down")

            let newsNode = document.createTextNode(newsElement.section);
            let newsDropDownNode = document.createTextNode(newsElement.title)


            main.appendChild(section);
            section.appendChild(article);
            article.appendChild(divSectionArticleDiv);
            article.appendChild(divSectionArticleDeleteDiv);
            divSectionArticleDiv.appendChild(headLine);
            divSectionArticleDiv.appendChild(newsParagraph);
            headLine.appendChild(newsNode);
            divSectionArticleDiv.appendChild(dropDownButton);
            dropDownButton.appendChild(dropDownIcon);
            newsParagraph.appendChild(newsDropDownNode);
        });


        document.querySelector(".fa-chevron-down").addEventListener("click", () => {
            function show_hide() {
                if (document.querySelector(".dropDownNewsParagraph").style.display === "none") {
                    document.querySelector(".dropDownNewsParagraph").style.display = "block";
                } else {
                    document.querySelector(".dropDownNewsParagraph").style.display = "none";
                }
            } show_hide();
        });

        let touchCoordinateStart;
        let touchCoordinateMove;
        let touchCoordinateEnd;
        let touchElement;
        let parentElement;
        let deleteButtonWidth = (window.screen.width * 40) / 100;
        /* let recycle = JSON.parse(localStorage.getItem('deletedItems')); */

        document.querySelector("main").addEventListener("touchstart", (e) => {
            if (e.target.tagName === "DIV") {
                touchElement = e.target;
                /*                 parentElement = e.target.closest("article"); */
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