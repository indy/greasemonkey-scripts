// ==UserScript==
// @name           Google Reader Script
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.1
// @description    Fixes Google Reader colours
// @include        http://www.google.com/reader/*
// @include        http://www.google.co.uk/reader/*
// @include        https://www.google.com/reader/*
// ==/UserScript==

function stylesheetNode(css) {
  var style = document.createElement("style");
  style.setAttribute("type","text/css");
  style.innerHTML = css;
  return style;
}

function addStyleSheet(css) {
  var head = document.getElementsByTagName("head")[0];
  var style = stylesheetNode(css);

  head.appendChild(style);
};

var _ran;
function init(x) {
	if(_ran) return;
	_ran=true;

	addStyleSheet("#entries.list .read .collapsed { background: #C2CFF1;}");
}

init();
