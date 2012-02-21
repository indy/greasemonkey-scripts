// ==UserScript==
// @name           Misanthropic Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.3
// @description    People are stupid, this will hide whatever they write
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
  var selectors = ["#disqus_thread"];

  if(window.location.host === "www.theverge.com") {
    selectors.push(".comments");
  }

  addStyleSheet(selectors.map(declareHidden));
}

main();