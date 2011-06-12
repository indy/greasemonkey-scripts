// ==UserScript==
// @name           Google Reader Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.1
// @description    Fixes Google Reader colours
// @include        http://www.google.com/reader/*
// @include        https://www.google.com/reader/*
// ==/UserScript==

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

var _ran;
function init(x) {
	if(_ran) return;
	_ran=true;

	addStyleSheet("#entries.list .read .collapsed { background: #BAC5EE;}");
}

init();
