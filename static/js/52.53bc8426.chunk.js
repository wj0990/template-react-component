(this["webpackJsonp@wangchuxi/template"]=this["webpackJsonp@wangchuxi/template"]||[]).push([[52],{1081:function(e,n,t){!function(e){"use strict";e.defineMode("fcl",(function(e){var n=e.indentUnit,t={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},r={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},i={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},o={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},a=/[+\-*&^%:=<>!|\/]/;function u(e,n){var u=e.next();if(/[\d\.]/.test(u))return"."==u?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==u?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==u||"("==u){if(e.eat("*"))return n.tokenize=c,c(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}if(a.test(u))return e.eatWhile(a),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var l=e.current().toLowerCase();return t.propertyIsEnumerable(l)||r.propertyIsEnumerable(l)||i.propertyIsEnumerable(l)?"keyword":o.propertyIsEnumerable(l)?"atom":"variable"}function c(e,n){for(var t,r=!1;t=e.next();){if(("/"==t||")"==t)&&r){n.tokenize=u;break}r="*"==t}return"comment"}function l(e,n,t,r,i){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=i}function f(e,n,t){return e.context=new l(e.indented,n,t,null,e.context)}function d(e){if(e.context.prev)return"end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new l((e||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(null==t.align&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;var o=(n.tokenize||u)(e,n);if("comment"==o)return o;null==t.align&&(t.align=!0);var a=e.current().toLowerCase();return r.propertyIsEnumerable(a)?f(n,e.column(),"end_block"):i.propertyIsEnumerable(a)&&d(n),n.startOfLine=!1,o},indent:function(e,t){if(e.tokenize!=u&&null!=e.tokenize)return 0;var r=e.context,o=i.propertyIsEnumerable(t);return r.align?r.column+(o?0:1):r.indented+(o?0:n)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}})),e.defineMIME("text/x-fcl","fcl")}(t(70))}}]);
//# sourceMappingURL=52.53bc8426.chunk.js.map