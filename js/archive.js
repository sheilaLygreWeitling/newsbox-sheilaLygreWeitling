let newsCategory = [
    "world",
    /*  "health",
    "sports",
    "business",
    "travel"  */
];

newsCategory.forEach(element => {
    if (localStorage.getItem(element) == "true") {
        createNews(element);
    }
});