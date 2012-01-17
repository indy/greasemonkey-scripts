// ==UserScript==
// @name           Google Reader Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.2
// @description    Fixes Google Reader colours
// @include        http://www.google.com/reader/*
// @include        http://www.google.co.uk/reader/*
// @include        https://www.google.com/reader/*
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

function main() {
  addStyleSheet(["#entries.list .read .collapsed { background: #C2CFF1;}"]);
}

main();
