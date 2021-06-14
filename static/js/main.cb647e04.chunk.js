(this["webpackJsonp@wangchuxi/template"]=this["webpackJsonp@wangchuxi/template"]||[]).push([[6],{1019:function(e,t){},1038:function(e,t,s){},1039:function(e,t,s){},1040:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(105),r=s.n(o),i=s(19),c=s(107),l=s(325),d=s(311),j=s(312),p=s.n(j),m=s(324),u=s(6),h=["language","dependencies","codePen","codeSandbox"];function b(e){var t=e.language,s=e.dependencies,n=(e.codePen,e.codeSandbox),a=Object(c.a)(e,h),o=Object(i.a)({},a);return n&&(o.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n        "template": "node",\n        "container": {\n          "startScript": "start",\n          "node": "14"\n        }\n      }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:o.code.replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"react-heat-map-example",description:"react-heat-map - example",dependencies:{react:"latest","react-dom":"latest","react-heat-map":"latest","@kkt/less-modules":"6.9.0",kkt:"6.9.0",typescript:"4.1.3"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),Object(u.jsx)(m.a,Object(i.a)(Object(i.a)({},o),{},{language:t,dependencies:s,style:{marginBottom:0}}))}var f=s.p+"static/media/logo.3931a054.svg",g=(s(1038),s(44)),y=s.n(g),v=s(34),x=s.n(v),k=s(323),w=s.n(k),O=(s(1039),["prefixCls","disabled","active","loading","block","basic","htmlType","type","size","className","children"]);function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefixCls,s=void 0===t?"w-btn":t,n=e.disabled,o=void 0!==n&&n,r=e.active,i=void 0!==r&&r,c=e.loading,l=void 0!==c&&c,d=e.block,j=void 0!==d&&d,p=e.basic,m=void 0!==p&&p,u=e.htmlType,h=void 0===u?"button":u,b=e.type,f=void 0===b?"light":b,g=e.size,v=void 0===g?"default":g,k=e.className,S=e.children,B=x()(e,O),P=[k,s,w.a.test,!!v&&"".concat(s,"-").concat(v),!!f&&"".concat(s,"-").concat(f),!!m&&"".concat(s,"-basic"),!!l&&"".concat(s,"-loading"),!(!o&&!l)&&"disabled",!!i&&"active",!!j&&"block"].filter(Boolean).join(" ");return a.a.createElement("button",y()({},B,{disabled:o||l,type:h,className:P}),S&&a.a.Children.map(S,(function(e){return a.a.isValidElement(e)?e:a.a.createElement("span",null," ",e," ")})))}var B=["inline","node","noPreview","noScroll","bgWhite","noCode","codePen","codeSandbox"],P=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.forEach((function(t){"text"===t.type?s+=t.value:t.children&&Array.isArray(t.children)&&(s+=e(t.children))})),s},_=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d.a,{fixed:!0,target:"__blank",href:"https://github.com/wj0990/template-react-component"}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:f,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{type:"primary",children:"Primary"}),Object(u.jsx)(S,{type:"success",children:"Success"}),Object(u.jsx)(S,{type:"warning",children:"Warning"}),Object(u.jsx)(S,{type:"danger",children:"Danger"}),Object(u.jsx)(S,{type:"light",children:"Light"}),Object(u.jsx)(S,{type:"dark",children:"Dark"})]})]}),Object(u.jsx)(l.a,{source:'React Component Example for TypeScript.\n===\n\x3c!--rehype:style=color:red;--\x3e\n\nCreate a project for the React component library containing a website preview of the component library instance. The documents and component libraries are put into a project, all written in `TypeScript`, the component library source files are added to the `src` directory, and the document website source files are added to the `website` directory.\n\n## Install\n\n```bash\nnpm i @wangchuxi/template\n```\n\n## Basic Usage\n\n\n\x3c!--rehype:codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from \'react-dom\';\nimport Button from \'@wangchuxi/template\';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Button type="primary">Primary</Button>\n      <Button type="success">Success</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n    </div>\n  )\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n**development**\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch\n# Step 2, development mode, listen to compile preview website instance\nnpm run start\n```\n\n**production**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run build\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!',className:"info",rehypePlugins:[[p.a,{properties:"attr"}]],components:{code:function(e){e.inline;var t=e.node,s=e.noPreview,a=e.noScroll,o=e.bgWhite,r=e.noCode,l=e.codePen,d=e.codeSandbox,j=Object(c.a)(e,B),p={noPreview:s,noScroll:a,bgWhite:o,noCode:r,codePen:l,codeSandbox:d};return s||a||o||r||l||d?Object(u.jsx)(b,Object(i.a)(Object(i.a)({},p),{},{code:P(t.children),dependencies:{useRef:n.useRef,useEffect:n.useEffect,useState:n.useState,Button:S},language:(j.className||"").replace(/^language-/,"")})):Object(u.jsx)("code",Object(i.a)({},j))}}})]})};r.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))},323:function(e,t,s){e.exports={test:"style_test__2dVqS"}},729:function(e,t,s){var n={"./apl/apl.js":[1057,30],"./asciiarmor/asciiarmor.js":[1058,31],"./asn.1/asn.1.js":[1059,32],"./asterisk/asterisk.js":[1060,33],"./brainfuck/brainfuck.js":[1061,34],"./clike/clike.js":[1046,2],"./clojure/clojure.js":[1062,35],"./cmake/cmake.js":[1063,36],"./cobol/cobol.js":[1064,37],"./coffeescript/coffeescript.js":[1047,38],"./commonlisp/commonlisp.js":[1065,39],"./crystal/crystal.js":[1066,40],"./css/css.js":[1043,1],"./cypher/cypher.js":[1067,41],"./d/d.js":[1068,42],"./dart/dart.js":[1069,2,43],"./diff/diff.js":[1070,44],"./django/django.js":[1071,0,1,11],"./dockerfile/dockerfile.js":[1072,21],"./dtd/dtd.js":[1073,45],"./dylan/dylan.js":[1074,46],"./ebnf/ebnf.js":[1075,47],"./ecl/ecl.js":[1076,48],"./eiffel/eiffel.js":[1077,49],"./elm/elm.js":[1078,50],"./erlang/erlang.js":[1079,51],"./factor/factor.js":[1080,22],"./fcl/fcl.js":[1081,52],"./forth/forth.js":[1082,53],"./fortran/fortran.js":[1083,54],"./gas/gas.js":[1084,55],"./gfm/gfm.js":[1085,4,20],"./gherkin/gherkin.js":[1086,56],"./go/go.js":[1087,57],"./groovy/groovy.js":[1088,58],"./haml/haml.js":[1089,0,1,14],"./handlebars/handlebars.js":[1048,16],"./haskell-literate/haskell-literate.js":[1090,26],"./haskell/haskell.js":[1049,59],"./haxe/haxe.js":[1091,60],"./htmlembedded/htmlembedded.js":[1092,0,1,10],"./htmlmixed/htmlmixed.js":[1042,0,1,27],"./http/http.js":[1093,61],"./idl/idl.js":[1094,62],"./javascript/javascript.js":[1044,0],"./jinja2/jinja2.js":[1095,63],"./jsx/jsx.js":[1096,0,28],"./julia/julia.js":[1097,64],"./livescript/livescript.js":[1098,65],"./lua/lua.js":[1099,66],"./markdown/markdown.js":[1054,4],"./mathematica/mathematica.js":[1100,67],"./mbox/mbox.js":[1101,68],"./meta.js":[171],"./mirc/mirc.js":[1102,69],"./mllike/mllike.js":[1103,70],"./modelica/modelica.js":[1104,71],"./mscgen/mscgen.js":[1105,72],"./mumps/mumps.js":[1106,73],"./nginx/nginx.js":[1107,74],"./nsis/nsis.js":[1108,23],"./ntriples/ntriples.js":[1109,75],"./octave/octave.js":[1110,76],"./oz/oz.js":[1111,77],"./pascal/pascal.js":[1112,78],"./pegjs/pegjs.js":[1113,0,79],"./perl/perl.js":[1114,80],"./php/php.js":[1115,0,1,2,17],"./pig/pig.js":[1116,81],"./powershell/powershell.js":[1117,82],"./properties/properties.js":[1118,83],"./protobuf/protobuf.js":[1119,84],"./pug/pug.js":[1055,0,1,3],"./puppet/puppet.js":[1120,85],"./python/python.js":[1050,86],"./q/q.js":[1121,87],"./r/r.js":[1122,88],"./rpm/rpm.js":[1123,89],"./rst/rst.js":[1124,13],"./ruby/ruby.js":[1045,90],"./rust/rust.js":[1125,24],"./sas/sas.js":[1126,91],"./sass/sass.js":[1052,1,92],"./scheme/scheme.js":[1127,93],"./shell/shell.js":[1128,94],"./sieve/sieve.js":[1129,95],"./slim/slim.js":[1130,0,1,15],"./smalltalk/smalltalk.js":[1131,96],"./smarty/smarty.js":[1132,97],"./solr/solr.js":[1133,98],"./soy/soy.js":[1134,0,1,18],"./sparql/sparql.js":[1135,99],"./spreadsheet/spreadsheet.js":[1136,100],"./sql/sql.js":[1137,101],"./stex/stex.js":[1051,102],"./stylus/stylus.js":[1056,5],"./swift/swift.js":[1138,103],"./tcl/tcl.js":[1139,104],"./textile/textile.js":[1140,105],"./tiddlywiki/tiddlywiki.js":[1141,106],"./tiki/tiki.js":[1142,107],"./toml/toml.js":[1143,108],"./tornado/tornado.js":[1144,0,1,12],"./troff/troff.js":[1145,109],"./ttcn-cfg/ttcn-cfg.js":[1147,110],"./ttcn/ttcn.js":[1146,111],"./turtle/turtle.js":[1148,112],"./twig/twig.js":[1149,19],"./vb/vb.js":[1150,113],"./vbscript/vbscript.js":[1151,114],"./velocity/velocity.js":[1152,115],"./verilog/verilog.js":[1153,116],"./vhdl/vhdl.js":[1154,117],"./vue/vue.js":[1155,0,1,5,3,9],"./wast/wast.js":[1156,25],"./webidl/webidl.js":[1157,118],"./xml/xml.js":[1041,119],"./xquery/xquery.js":[1158,120],"./yacas/yacas.js":[1159,121],"./yaml-frontmatter/yaml-frontmatter.js":[1160,29],"./yaml/yaml.js":[1053,122],"./z80/z80.js":[1161,123]};function a(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(a,7)}))}a.keys=function(){return Object.keys(n)},a.id=729,e.exports=a},883:function(e,t){}},[[1040,7,8]]]);
//# sourceMappingURL=main.cb647e04.chunk.js.map