const sections = [
    "world",
    /* "health",
    "sports",
    "business",
    "travel" */
]

let myAPIKey = "RJ9oWjSESWwzZYmsAw6r1GxXh2G8uh7F";

sections.forEach(element => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=${myAPIKey}`)
        .then((response) => {
            const sectionSettings = document.querySelector(".Section__settings-div-sort");

            console.log(response.data.section);
            let paragraphContext = document.createTextNode(response.data.section)

            let ul = document.createElement("ul")
            ul.classList.add("setting-ul")

            let li = document.createElement("li")
            li.classList.add("setting-li")

            let paragraph = document.createElement("p")
            paragraph.classList.add("setting-paragraph")

            const togglebutton = document.createElement('button',)
            togglebutton.classList.add("toggleButton")
            togglebutton.id = `toggleButton-${element}`

            const togglebuttonIcon = document.createElement('i')
            togglebuttonIcon.classList.add("toggleButtonIcon", "fas", "fa-circle");

            sectionSettings.appendChild(ul);
            ul.appendChild(li);
            li.appendChild(paragraph);
            li.appendChild(togglebutton)
            togglebutton.appendChild(togglebuttonIcon)
            paragraph.appendChild(paragraphContext);

            function categorySwitchFunction(e) {
                if (localStorage.getItem(e.id.replace('toggleButton-', '')) == 'true') {
                    e.classList.add('on')
                } else {
                    e.classList.remove('on')
                }

                e.addEventListener("click", () => {
                    if (e.classList.contains("on")) {
                        localStorage.setItem(e.id.replace("toggleButton-", ""), "false")
                        e.classList.remove("on")
                    } else {
                        localStorage.setItem(e.id.replace("toggleButton-", ""), "true")
                        e.classList.add("on")
                    }
                });
            } categorySwitchFunction(togglebutton);
        });


});
