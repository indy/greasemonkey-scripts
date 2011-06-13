// ==UserScript==
// @name           YouTube
// @author         Inderjit Gill ( http://indy.io | http://twitter.com/InderjitGill )
// @namespace      indy.io
// @version        0.0.1
// @description    Removes the annoying recommendations panels from the front page
// @include        http://www.youtube.com/*
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
}

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

addStyleSheet("#homepage-side-content { display: none;}");
removeRecommendedCrap();
