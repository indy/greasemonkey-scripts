// ==UserScript==
// @name           Twitter Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.1
// @description    Hides crap that Twitter shows by default
// @include        http://twitter.com/
// @include        https://twitter.com/
// ==/UserScript==

// greasemonkey version of http://gilesbowkett.blogspot.com/2011/06/how-to-make-twitters-web-client-suck.html

function stylesheetNode(css) {
  var link = document.createElement("link");
  link.setAttribute("rel","stylesheet");
  link.setAttribute("href","data: text/css, " + css);
  return link;
}

function addStyleSheet(css) {
  var head = document.getElementsByTagName("head")[0];
  var link = stylesheetNode(css);

  head.appendChild(link);
};

var _intialized;
function init(x) {
	if(_intialized) return;
	_intialized=true;

	addStyleSheet(".trends-inner{ display: none }");
	addStyleSheet("p.promo{ display: none }");
	addStyleSheet(".user-rec-component{ display: none }");
}

init();
