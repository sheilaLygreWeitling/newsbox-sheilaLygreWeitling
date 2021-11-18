let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);
let newsCategory = params.get("/home.json");

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";
let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + myAPIKey

axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F")
    .then((response) => {
        const news = response.data.results;

        news.forEach(newsElement => {
            const main = document.querySelector(".Main")

            let section = document.createElement("section")
            section.classList.add("Section")

            let article = document.createElement("article")
            article.classList.add("Section__article")

            let divSectionArticleDiv = document.createElement("div")
            divSectionArticleDiv.classList.add("Section__article-div")

            let div = document.createElement("div")
            div.classList.add("Div")

            let headLine = document.createElement("h1")
            headLine.classList.add("headLineLarge")


            let dropDownButton = document.createElement("button")
            dropDownButton.classList.add("Div__dropDown-button")

            let dropDownIcon = document.createElement("i")
            dropDownIcon.classList.add("fas", "fa-chevron-down")

            let newsNode = document.createTextNode(newsElement.section);

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