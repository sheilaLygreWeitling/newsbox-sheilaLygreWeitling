"use strict";

var savedItems = JSON.parse(localStorage.getItem("savedItems"));
var newsCategory = ["world"
/*  "health",
"sports",
"business",
"travel"  */
];
newsCategory.forEach(function (element) {
  if (localStorage.getItem(element) == "true") {
    createNews(element);
  }
});