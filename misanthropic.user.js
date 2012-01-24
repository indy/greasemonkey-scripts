// ==UserScript==
// @name           Misanthropic Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.1
// @description    Hide the incoherent ramblings 
// @include        http://*
// @include        https://*
// ==/UserScript==

function combineRules(rules) {
  var css = "";
  rules.forEach(function(r) {
    css += r + "\n";
  })
  return css;
}

function addStyleSheet(rules) {
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.setAttribute("type","text/css");
  style.innerHTML = combineRules(rules);
  head.appendChild(style);
};

function declareHidden(selector) {
  return selector + " { display: none !important;}";
}

function main() {
  var rules = ["#disqus_thread",          // 
               ".comments",               // the verge, etc
               "#comments-view"           // youtube
              ].map(declareHidden);
  addStyleSheet(rules);
}

main();