// ==UserScript==
// @name           YouTube
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.3
// @description    Removes the annoying recommendations panels from the front page
// @include        http://www.youtube.com/*
// @include        https://www.youtube.com/*
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


function removeRecommendedCrap() {
  var parent = document.getElementById("hp-feed-items-container");

  var gv = [];
  for(var c=parent.firstChild; c!=null; c=c.nextSibling) {
    var cl = c.classList;
    if(cl && cl.length == 1 && cl[0] === 'grid-view') {
      gv.push(c);
    }
  }

  for(var i=0;i<gv.length;i++) {
    parent.removeChild(gv[i]);
  }
}

function declareHidden(selector) {
  return selector + " { display: none !important;}";
}

function main() {

  var rules = ["#video-sidebar",
               "#comments-view"
              ].map(declareHidden);
  addStyleSheet(rules);
  removeRecommendedCrap();
}

main();