// ==UserScript==
// @name           Twitter Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.2
// @description    Hides crap that Twitter shows by default
// @include        http://twitter.com/
// @include        https://twitter.com/
// ==/UserScript==

/*
  with thanks to:

  https://github.com/splatcollision/Clean-Twitter-User-Stylesheet/blob/master/twitter_clean.css
  http://gilesbowkett.blogspot.com/2011/06/how-to-make-twitters-web-client-suck.html

*/

function stylesheetNode(css) {
  var style = document.createElement("style");
  style.setAttribute("type","text/css");
  style.innerHTML = css;
  return style;
}

function addStyleSheet() {
  var head = document.getElementsByTagName("head")[0];
  var css = "";
  for(i=0;i<arguments.length;i++){
    css += arguments[i] + "\n";
  }
  var style = stylesheetNode(css);

  head.appendChild(style);
};

/*
  hides: recommended users, trends, the 'tweets' title
*/
addStyleSheet(
  "[data-component-term=user_recommendations] { display: none !important;}",
  "[data-component-term=trends] {display: none !important;}",
  ".content-header h2 > .js-stream-title {display: none !important;}",
  ".content-header > .header-inner {min-height: 5px !important;padding: 0 !important;}");

