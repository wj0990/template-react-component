(this["webpackJsonp@wangchuxi/template"]=this["webpackJsonp@wangchuxi/template"]||[]).push([[33],{1060:function(e,t,n){!function(e){"use strict";e.defineMode("asterisk",(function(){var e=["exten","same","include","ignorepat","switch"],t=["#include","#exec"],n=["addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi","alarmreceiver","amd","answer","authenticate","background","backgrounddetect","bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent","changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge","congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge","dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility","datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa","dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy","externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif","goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete","ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus","jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme","meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete","minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode","mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish","originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce","parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones","privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten","readfile","receivefax","receivefax","receivefax","record","removequeuemember","resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun","saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax","sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags","setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel","slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground","speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound","speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor","stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec","trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate","vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring","waitforsilence","waitmusiconhold","waituntil","while","zapateller"];function a(n,a){var i="",r=n.next();if(a.blockComment)return"-"==r&&n.match("-;",!0)?a.blockComment=!1:n.skipTo("--;")?(n.next(),n.next(),n.next(),a.blockComment=!1):n.skipToEnd(),"comment";if(";"==r)return n.match("--",!0)&&!n.match("-",!1)?(a.blockComment=!0,"comment"):(n.skipToEnd(),"comment");if("["==r)return n.skipTo("]"),n.eat("]"),"header";if('"'==r)return n.skipTo('"'),"string";if("'"==r)return n.skipTo("'"),"string-2";if("#"==r&&(n.eatWhile(/\w/),i=n.current(),-1!==t.indexOf(i)))return n.skipToEnd(),"strong";if("$"==r&&"{"==n.peek())return n.skipTo("}"),n.eat("}"),"variable-3";if(n.eatWhile(/\w/),i=n.current(),-1!==e.indexOf(i)){switch(a.extenStart=!0,i){case"same":a.extenSame=!0;break;case"include":case"switch":case"ignorepat":a.extenInclude=!0}return"atom"}}return{startState:function(){return{blockComment:!1,extenStart:!1,extenSame:!1,extenInclude:!1,extenExten:!1,extenPriority:!1,extenApplication:!1}},token:function(e,t){var i="";return e.eatSpace()?null:t.extenStart?(e.eatWhile(/[^\s]/),i=e.current(),/^=>?$/.test(i)?(t.extenExten=!0,t.extenStart=!1,"strong"):(t.extenStart=!1,e.skipToEnd(),"error")):t.extenExten?(t.extenExten=!1,t.extenPriority=!0,e.eatWhile(/[^,]/),t.extenInclude&&(e.skipToEnd(),t.extenPriority=!1,t.extenInclude=!1),t.extenSame&&(t.extenPriority=!1,t.extenSame=!1,t.extenApplication=!0),"tag"):t.extenPriority?(t.extenPriority=!1,t.extenApplication=!0,e.next(),t.extenSame?null:(e.eatWhile(/[^,]/),"number")):t.extenApplication?(e.eatWhile(/,/),","===(i=e.current())?null:(e.eatWhile(/\w/),i=e.current().toLowerCase(),t.extenApplication=!1,-1!==n.indexOf(i)?"def strong":null)):a(e,t)},blockCommentStart:";--",blockCommentEnd:"--;",lineComment:";"}})),e.defineMIME("text/x-asterisk","asterisk")}(n(70))}}]);
//# sourceMappingURL=33.90e15521.chunk.js.map