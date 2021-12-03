let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);

let newsCategory = [
    "world",
    "health",
    "sports",
    "business",
    "travel"
];

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myAPIKey

newsCategory.forEach(element => {
    if (localStorage.getItem(element) == "true") {
        createNews(element);
    }
});
function createNews(element) {
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

            for (let index = 0; index < response.data.results.length; index++) {

                let divContainer = document.createElement("div")
                divContainer.classList.add("div-container")

                let dropDownNews = document.createElement("section")
                dropDownNews.classList.add("dropDownNewsSection")

                let dropDownNewsFlexbox = document.createElement("div")
                dropDownNewsFlexbox.classList.add("dropDownNews__Section-flexbox")

                let newstitle = document.createElement("h2")
                newstitle.classList.add("dropDownNewsTitle")

                let newsAbstract = document.createElement("p")
                newsAbstract.classList.add("newsAbstract")

                let newsimage = document.createElement("img")
                newsimage.classList.add("newsImage")

                let divSectionArticleDelete = document.createElement("article");
                divSectionArticleDelete.classList.add("Section__article-delete");

                let archiveButton = document.createElement("button")
                archiveButton.classList.add("archiveButton")

                let archiveIcon = document.createElement("i")
                archiveIcon.classList.add("fas", "fa-bookmark")

                divContainer.appendChild(divSectionArticleDelete);
                divSectionArticleDelete.appendChild(archiveButton);
                archiveButton.appendChild(archiveIcon);

                divNewsWrapper.appendChild(divContainer);

                divContainer.appendChild(dropDownNews);

                dropDownNews.appendChild(newsAbstract);
                dropDownNews.appendChild(newsimage);
                dropDownNews.appendChild(dropDownNewsFlexbox);

                dropDownNewsFlexbox.appendChild(newstitle);
                dropDownNewsFlexbox.appendChild(newsAbstract);

                newstitle.textContent = response.data.results[index].title.substring(0, 28) + "..."
                newsAbstract.textContent = response.data.results[index].abstract.substring(0, 54) + "..."
                newsimage.src = response.data.results[index].multimedia[0].url

                archiveButton.addEventListener("click", (e) => {
                    console.log("HEJ");

                });
            };

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
                if (e.target.tagName === "SECTION") {
                    touchElement = e.target;

                    touchCoordinateStart = e.touches[0].clientX;

                    touchElement.addEventListener("touchmove", (e) => {
                        if (touchElement.tagName === "SECTION") {
                            touchCoordinateMove = Math.floor(e.touches[0].clientX);
                            if (touchCoordinateMove < touchCoordinateStart && touchCoordinateMove > touchCoordinateStart - deleteButtonWidth) {
                                touchElement.style.transform = `translateX(${touchCoordinateMove - touchCoordinateStart}px)`
                            }
                        }
                    });

                    touchElement.addEventListener("touchend", (e) => {
                        if (touchElement.tagName === "SECTION") {
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
}
