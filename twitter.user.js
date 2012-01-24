// ==UserScript==
// @name           Twitter Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.4
// @description    Hides cruft that Twitter shows by default
// @include        http://twitter.com/
// @include        https://twitter.com/
// ==/UserScript==

/*
  with thanks to:

  https://github.com/splatcollision/Clean-Twitter-User-Stylesheet/blob/master/twitter_clean.css
  http://gilesbowkett.blogspot.com/2011/06/how-to-make-twitters-web-client-suck.html

*/

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

  // hide junk from Twitter
  var rules = ["[data-component-term=user_recommendations]",
               "[data-component-term=trends]",
               "[data-global-action=discover]",
               ".promoted-tweet",
               ".content-header h2 > .js-stream-title"].map(declareHidden);

  // tighten up some of the spacing
  rules.push(".content-header > .header-inner {min-height: 5px !important;padding: 0 !important;}");

  addStyleSheet(rules);
}

main();