const sections = [
    "world",
    "health",
    "sports",
    "business",
    "travel"
]

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";

sections.forEach(element => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=${myAPIKey}`)
        .then((response) => {
            /*             console.log('hey') */
            const sectionSettings = document.querySelector(".Section__settings-div-sort");

            console.log(response.data.section);

            let ul = document.createElement("ul")
            ul.classList.add("setting-ul")

            let li = document.createElement("li")
            li.classList.add("setting-li")

            let paragraph = document.createElement("p")
            paragraph.classList.add("setting-paragraph")

            let label = document.createElement("label")
            label.classList.add("settings-label")

            let labelSelect = document.createElement("label")
            labelSelect.classList.add("settings-label-select")

            let inputToggle = document.createElement("input")
            inputToggle.classList.add("input-toggle")
            inputToggle.setAttribute("type", "checkbox")

            let inputSpan = document.createElement("span")
            inputSpan.classList.add("input-span")

            sectionSettings.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(paragraph);
            li.appendChild(label);
            li.appendChild(labelSelect);
            li.appendChild(inputToggle);
            li.appendChild(inputSpan);

        });
});