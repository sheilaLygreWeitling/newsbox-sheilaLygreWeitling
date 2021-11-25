/* let newsURL = window.location.search;
let params = new URLSearchParams(newsURL);
let newsCategory = params.get("/health.json");


let urlHealth = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" + myAPIKeyHealth */

const health = ["health"]
let myAPIKeyHealth = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";

health.forEach(element => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=${myAPIKeyHealth}`)
        .then((response) => {
            const newsHealth = response.data.results;
            console.log(element);
            newsHealth.forEach(newsElement => {
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
});