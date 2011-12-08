// ==UserScript==
// @name           Twitter Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.2
// @description    Hides crap that Twitter shows by default
// @include        http://twitter.com/
// @include        https://twitter.com/
// ==/UserScript==

// http://gilesbowkett.blogspot.com/2011/06/how-to-make-twitters-web-client-suck.html

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

// Twitter's js code inserts a display:block if display:none is applied to .trends, but it's ok to add display:none to a div child of .trends
addStyleSheet(".trends div { display: none }");
