(this["webpackJsonp@wangchuxi/template"]=this["webpackJsonp@wangchuxi/template"]||[]).push([[44],{1070:function(e,t,n){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(t){var n=t.string.search(/[\t ]+?$/);if(!t.sol()||0===n)return t.skipToEnd(),("error "+(e[t.string.charAt(0)]||"")).replace(/ $/,"");var i=e[t.peek()]||t.skipToEnd();return-1===n?t.skipToEnd():t.pos=n,i}}})),e.defineMIME("text/x-diff","diff")}(n(70))}}]);
//# sourceMappingURL=44.d7f50658.chunk.js.map