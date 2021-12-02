"use strict";

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