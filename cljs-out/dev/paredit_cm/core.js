// Compiled by ClojureScript 1.11.4 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('paredit_cm.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.pprint');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.keymap.emacs');
paredit_cm.core.on_reload = (function paredit_cm$core$on_reload(){
return null;
});
cljs.core.enable_console_print_BANG_.call(null);
paredit_cm.core.openers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
paredit_cm.core.closers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
paredit_cm.core.pair = new cljs.core.PersistentArrayMap(null, 7, ["(",")","[","]","{","}","\"","\"",")","(","]","[","}","{"], null);
/**
 * true if the two strings are a matching open/close pair 
 */
paredit_cm.core.pair_QMARK_ = (function paredit_cm$core$pair_QMARK_(s1,s2){
return cljs.core._EQ_.call(null,paredit_cm.core.pair.call(null,s1),s2);
});
paredit_cm.core.opener_QMARK_ = (function paredit_cm$core$opener_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,paredit_cm.core.openers,s);
});
paredit_cm.core.closer_QMARK_ = (function paredit_cm$core$closer_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,paredit_cm.core.closers,s);
});
paredit_cm.core.is_bracket_type_QMARK_ = (function paredit_cm$core$is_bracket_type_QMARK_(t){
var and__4251__auto__ = t;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.starts_with_QMARK_.call(null,t,"bracket");
} else {
return and__4251__auto__;
}
});
/**
 * returns the number of characters in the code mirror instance
 */
paredit_cm.core.char_count = (function paredit_cm$core$char_count(cm){
return cljs.core.count.call(null,cm.getValue());
});
/**
 * get cur, the position of the cursor
 */
paredit_cm.core.cursor = (function paredit_cm$core$cursor(var_args){
var G__8916 = arguments.length;
switch (G__8916) {
case 1:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return cm.getCursor();
}));

(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2 = (function (cm,i){
return cm.posFromIndex(i);
}));

(paredit_cm.core.cursor.cljs$lang$maxFixedArity = 2);

/**
 * get the index i for the cursor's position
 */
paredit_cm.core.index = (function paredit_cm$core$index(var_args){
var G__8919 = arguments.length;
switch (G__8919) {
case 1:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.index.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cm.indexFromPos(cur);
} else {
return null;
}
}));

(paredit_cm.core.index.cljs$lang$maxFixedArity = 2);

/**
 * true if at beginning of file
 */
paredit_cm.core.bof_QMARK_ = (function paredit_cm$core$bof_QMARK_(cm,cur){
return (paredit_cm.core.index.call(null,cm,cur) === (0));
});
/**
 * true if at end of file
 */
paredit_cm.core.eof_QMARK_ = (function paredit_cm$core$eof_QMARK_(cm,cur){
return cljs.core._EQ_.call(null,paredit_cm.core.index.call(null,cm,cur),paredit_cm.core.char_count.call(null,cm));
});
/**
 * get token at cursor
 */
paredit_cm.core.token = (function paredit_cm$core$token(cm,cur){
return cm.getTokenAt(cur,true);
});
/**
 * get the type at the current cursor.
 */
paredit_cm.core.get_type = (function paredit_cm$core$get_type(var_args){
var G__8922 = arguments.length;
switch (G__8922) {
case 1:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_type.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token.call(null,cm,cur).type;
}));

(paredit_cm.core.get_type.cljs$lang$maxFixedArity = 2);

/**
 * gets the string of the current token
 */
paredit_cm.core.get_string = (function paredit_cm$core$get_string(var_args){
var G__8925 = arguments.length;
switch (G__8925) {
case 1:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_string.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return paredit_cm.core.token.call(null,cm,cur).string;
} else {
return null;
}
}));

(paredit_cm.core.get_string.cljs$lang$maxFixedArity = 2);

/**
 * gets the length of the current line
 */
paredit_cm.core.line_length = (function paredit_cm$core$line_length(var_args){
var G__8928 = arguments.length;
switch (G__8928) {
case 1:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.line_length.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cljs.core.count.call(null,cm.getLine(cur.line));
} else {
return null;
}
}));

(paredit_cm.core.line_length.cljs$lang$maxFixedArity = 2);

/**
 * returns the last token of a line
 */
paredit_cm.core.last_token = (function paredit_cm$core$last_token(cm,cur){
return cljs.core.last.call(null,cm.getLineTokens(cur.line));
});
/**
 * returns the last cursor of a line
 */
paredit_cm.core.last_cur = (function paredit_cm$core$last_cur(var_args){
var G__8931 = arguments.length;
switch (G__8931) {
case 1:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.last_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = paredit_cm.core.last_token.call(null,cm,cur).end;
var diff = (end - cur.ch);
return paredit_cm.core.cursor.call(null,cm,(diff + paredit_cm.core.index.call(null,cm,cur)));
}));

(paredit_cm.core.last_cur.cljs$lang$maxFixedArity = 2);

/**
 * make info from CodeMirror more conveniently accessed by our code.
 *   we'll use destructuring and just name what we want. hypothesizing
 *   that performance hit won't be that bad.
 */
paredit_cm.core.get_info = (function paredit_cm$core$get_info(var_args){
var G__8934 = arguments.length;
switch (G__8934) {
case 1:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
var tok = paredit_cm.core.token.call(null,cm,cur);
var eof = paredit_cm.core.eof_QMARK_.call(null,cm,cur);
var bof = paredit_cm.core.bof_QMARK_.call(null,cm,cur);
var i = paredit_cm.core.index.call(null,cm,cur);
var left_cur = ((bof)?null:paredit_cm.core.cursor.call(null,cm,(i - (1))));
var right_cur = ((eof)?null:paredit_cm.core.cursor.call(null,cm,(i + (1))));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bof","bof",-1065437469),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"cur","cur",1153190599),new cljs.core.Keyword(null,"right-char","right-char",-1500850071),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"left-char","left-char",509989355),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tok","tok",2091731382),new cljs.core.Keyword(null,"left-cur","left-cur",2010287159),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"right-cur","right-cur",1689901919)],[bof,(tok.state.indentStack == null),cur,((eof)?null:cm.getRange(cur,right_cur)),tok.state.mode,tok.start,((bof)?null:cm.getRange(left_cur,cur)),tok.type,tok.string,cur.ch,cur.line,tok,left_cur,tok.end,eof,i,right_cur]);
} else {
return null;
}
}));

(paredit_cm.core.get_info.cljs$lang$maxFixedArity = 2);

paredit_cm.core.word_QMARK_ = (function paredit_cm$core$word_QMARK_(type){
return ((cljs.core._EQ_.call(null,type,"atom")) || (((cljs.core._EQ_.call(null,type,"builtin")) || (((cljs.core._EQ_.call(null,type,"number")) || (((cljs.core._EQ_.call(null,type,"meta")) || (((cljs.core._EQ_.call(null,type,"variable")) || (cljs.core._EQ_.call(null,type,"keyword")))))))))));
});
/**
 * answers what is immediately to the left of a | style cursor
 */
paredit_cm.core.linfo = (function paredit_cm$core$linfo(var_args){
var G__8937 = arguments.length;
switch (G__8937) {
case 1:
return paredit_cm.core.linfo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.linfo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.linfo', paredit_cm.core.linfo);

(paredit_cm.core.linfo.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.linfo.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.linfo.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__8938 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8938__$1 = cljs.core.__destructure_map.call(null,map__8938);
var info = map__8938__$1;
var end = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var right_cur = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var bof = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"bof","bof",-1065437469));
var right_char = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var left_char = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var start = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var type = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var string = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var ch = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var left_cur = cljs.core.get.call(null,map__8938__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var itype = (cljs.core.truth_(left_cur)?paredit_cm.core.token.call(null,cm,left_cur).type:new cljs.core.Keyword(null,"no-left-cur","no-left-cur",198501192));
var ktype = (cljs.core.truth_(right_cur)?paredit_cm.core.token.call(null,cm,right_cur).type:new cljs.core.Keyword(null,"no-right-cur","no-right-cur",-1650075920));
if(cljs.core.truth_(bof)){
return new cljs.core.Keyword(null,"bof","bof",-1065437469);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,ch,end)) && ((!(clojure.string.ends_with_QMARK_.call(null,string,"\"")))))))){
return new cljs.core.Keyword(null,"string-guts","string-guts",1036628434);
} else {
if(((cljs.core._EQ_.call(null,itype,"string")) && (((cljs.core._EQ_.call(null,type,null)) && (((cljs.core._EQ_.call(null,ktype,"string")) && (cljs.core._EQ_.call(null,left_char,"\n")))))))){
return new cljs.core.Keyword(null,"string-guts","string-guts",1036628434);
} else {
if(((cljs.core._EQ_.call(null,itype,null)) && (((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,ktype,"string")) && (cljs.core._EQ_.call(null,left_char,"\n")))))))){
return new cljs.core.Keyword(null,"string-guts","string-guts",1036628434);
} else {
if((type == null)){
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);
} else {
if(((cljs.core._EQ_.call(null,type,"bracket")) && (paredit_cm.core.opener_QMARK_.call(null,string)))){
return new cljs.core.Keyword(null,"opener","opener",1027381943);
} else {
if(cljs.core._EQ_.call(null,type,"bracket")){
return new cljs.core.Keyword(null,"closer","closer",10992481);
} else {
if(paredit_cm.core.word_QMARK_.call(null,type)){
return new cljs.core.Keyword(null,"word","word",-420123725);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (((clojure.string.starts_with_QMARK_.call(null,string,"\"")) && (cljs.core._EQ_.call(null,ch,(start + (1)))))))){
return new cljs.core.Keyword(null,"string-start","string-start",1585643309);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,ch,end)) && (clojure.string.ends_with_QMARK_.call(null,string,"\\\"")))))){
return new cljs.core.Keyword(null,"string-guts","string-guts",1036628434);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (cljs.core._EQ_.call(null,ch,end)))){
return new cljs.core.Keyword(null,"string-end","string-end",-1632897403);
} else {
if(cljs.core._EQ_.call(null,type,"string")){
return new cljs.core.Keyword(null,"string-guts","string-guts",1036628434);
} else {
if(((cljs.core._EQ_.call(null,type,"string-2")) && (cljs.core._EQ_.call(null,ch,end)))){
return new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712);
} else {
if(((cljs.core._EQ_.call(null,type,"string-2")) && (cljs.core.not_EQ_.call(null,itype,"string-2")))){
return new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156);
} else {
if(((cljs.core._EQ_.call(null,type,"string-2")) && (cljs.core.not_EQ_.call(null,ktype,"string-2")))){
return new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712);
} else {
if(cljs.core._EQ_.call(null,type,"string-2")){
return new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066);
} else {
if(cljs.core._EQ_.call(null,type,"comment")){
return new cljs.core.Keyword(null,"comment","comment",532206069);
} else {
cljs.core.println.call(null,"unhandled:info");

return new cljs.core.Keyword(null,"uncategorized","uncategorized",-583409832);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(paredit_cm.core.linfo.cljs$lang$maxFixedArity = 2);

/**
 * answers what is immediately to the right of a | style cursor
 */
paredit_cm.core.rinfo = (function paredit_cm$core$rinfo(var_args){
var G__8941 = arguments.length;
switch (G__8941) {
case 1:
return paredit_cm.core.rinfo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.rinfo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.rinfo', paredit_cm.core.rinfo);

(paredit_cm.core.rinfo.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.rinfo.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.rinfo.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.call(null,cm,cur);
if(paredit_cm.core.eof_QMARK_.call(null,cm,cur)){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
return paredit_cm.core.linfo.call(null,cm,paredit_cm.core.cursor.call(null,cm,(i + (1))));
}
}));

(paredit_cm.core.rinfo.cljs$lang$maxFixedArity = 2);

paredit_cm.core.info = (function paredit_cm$core$info(cm){
var result = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paredit_cm.core.linfo.call(null,cm),paredit_cm.core.rinfo.call(null,cm)], null);
return result;
});
goog.exportSymbol('paredit_cm.core.info', paredit_cm.core.info);
/**
 * true if the type is comment or string. a lot of editing behavior (like
 *   movement and deletion) is similar when you are in a string or in a comment, so
 *   often this is the predicate for that behavior.
 */
paredit_cm.core.comment_or_string_QMARK_ = (function paredit_cm$core$comment_or_string_QMARK_(type){
return ((cljs.core._EQ_.call(null,type,"comment")) || (cljs.core._EQ_.call(null,type,"string")));
});
/**
 * indent the current line
 */
paredit_cm.core.indent_line = (function paredit_cm$core$indent_line(cm){
return cm.indentLine(paredit_cm.core.cursor.call(null,cm).line);
});
/**
 * returns true if backslash is to the left and cursor is on an escaped char
 */
paredit_cm.core.in_escaped_char_QMARK_ = (function paredit_cm$core$in_escaped_char_QMARK_(var_args){
var G__8944 = arguments.length;
switch (G__8944) {
case 2:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(0));
}));

(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__8945 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8945__$1 = cljs.core.__destructure_map.call(null,map__8945);
var ch = cljs.core.get.call(null,map__8945__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__8945__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__8945__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var type = cljs.core.get.call(null,map__8945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.call(null,start,((ch - (1)) + offset))) && (((cljs.core._EQ_.call(null,end,((ch + (1)) + offset))) && (cljs.core._EQ_.call(null,type,"string-2")))));
}));

(paredit_cm.core.in_escaped_char_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * returns true if an escaped char and its backslash are to the left
 */
paredit_cm.core.escaped_char_to_left_QMARK_ = (function paredit_cm$core$escaped_char_to_left_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(-1));
});
/**
 * returns true if an escaped char and its backslash is to the right
 */
paredit_cm.core.escaped_char_to_right_QMARK_ = (function paredit_cm$core$escaped_char_to_right_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(1));
});
/**
 * insert text at current cursor. move cursor to the end of inserted text minus
 *   optional offset. the offset is for moving the cursor immediately after the
 *   insert and before returning. example: inserting a pair of brackets and placing
 *   the cursor inside the pair. this returns the new cursor.
 */
paredit_cm.core.insert = (function paredit_cm$core$insert(var_args){
var G__8948 = arguments.length;
switch (G__8948) {
case 2:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2 = (function (cm,text){
return paredit_cm.core.insert.call(null,cm,text,(0));
}));

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3 = (function (cm,text,offset){
return paredit_cm.core.insert.call(null,cm,text,offset,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4 = (function (cm,text,offset,cur){
var map__8949 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8949__$1 = cljs.core.__destructure_map.call(null,map__8949);
var line = cljs.core.get.call(null,map__8949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__8949__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
cm.replaceRange(text,cur);

cm.setCursor(line,((ch + cljs.core.count.call(null,text)) + offset));

return paredit_cm.core.cursor.call(null,cm);
}));

(paredit_cm.core.insert.cljs$lang$maxFixedArity = 4);

/**
 * returns the cursor for the end of the current token
 */
paredit_cm.core.token_end = (function paredit_cm$core$token_end(var_args){
var G__8952 = arguments.length;
switch (G__8952) {
case 2:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token_end.call(null,cm,cur,(0));
}));

(paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__8953 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8953__$1 = cljs.core.__destructure_map.call(null,map__8953);
var i = cljs.core.get.call(null,map__8953__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var end = cljs.core.get.call(null,map__8953__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var ch = cljs.core.get.call(null,map__8953__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
return paredit_cm.core.cursor.call(null,cm,((i + offset) + (end - ch)));
}));

(paredit_cm.core.token_end.cljs$lang$maxFixedArity = 3);

/**
 * take an index. get its token. return index of that token's end.
 */
paredit_cm.core.token_end_index = (function paredit_cm$core$token_end_index(cm,i){
return paredit_cm.core.index.call(null,cm,paredit_cm.core.token_end.call(null,cm,paredit_cm.core.cursor.call(null,cm,i)));
});
paredit_cm.core.guard = (function paredit_cm$core$guard(){
return null;
});
/**
 * if cur is in whitespace, deletes it optionally without ruining indentation.
 */
paredit_cm.core.delete_whitespace = (function paredit_cm$core$delete_whitespace(var_args){
var G__8956 = arguments.length;
switch (G__8956) {
case 1:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete_whitespace.call(null,cm,paredit_cm.core.cursor.call(null,cm),true);
}));

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.delete_whitespace.call(null,cm,cur,true);
}));

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__8957 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8957__$1 = cljs.core.__destructure_map.call(null,map__8957);
var start = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var line = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var i = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var type = cljs.core.get.call(null,map__8957__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var c1 = paredit_cm.core.cursor.call(null,cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (end - ch)));
if((type == null)){
cm.replaceRange("",c1,c2);

if(cljs.core.truth_(indent_after)){
return cm.indentLine(line);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.delete_whitespace.cljs$lang$maxFixedArity = 3);

paredit_cm.core.just_one_space = (function paredit_cm$core$just_one_space(var_args){
var G__8960 = arguments.length;
switch (G__8960) {
case 1:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.just_one_space.call(null,cm,paredit_cm.core.cursor.call(null,cm),true);
}));

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.just_one_space.call(null,cm,cur,true);
}));

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__8961 = paredit_cm.core.get_info.call(null,cm,cur);
var map__8961__$1 = cljs.core.__destructure_map.call(null,map__8961);
var start = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var line = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var i = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var type = cljs.core.get.call(null,map__8961__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var c1 = paredit_cm.core.cursor.call(null,cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (end - ch)));
if((type == null)){
cm.replaceRange(" ",c1,c2);

if(cljs.core.truth_(indent_after)){
return cm.indentLine(line);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.just_one_space.cljs$lang$maxFixedArity = 3);

/**
 * close curly brace like close-round
 */
paredit_cm.core.close_brace = (function paredit_cm$core$close_brace(cm){
return paredit_cm.core.close_round.call(null,cm,"}");
});
goog.exportSymbol('paredit_cm.core.close_brace', paredit_cm.core.close_brace);
paredit_cm.core.close_round_and_newline = (function paredit_cm$core$close_round_and_newline(var_args){
var G__8964 = arguments.length;
switch (G__8964) {
case 1:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round_and_newline', paredit_cm.core.close_round_and_newline);

(paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round_and_newline.call(null,cm,")");
}));

(paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
if(paredit_cm.core.comment_or_string_QMARK_.call(null,paredit_cm.core.get_type.call(null,cm))){
return paredit_cm.core.insert.call(null,cm,s);
} else {
if(cljs.core.truth_(paredit_cm.core.close_round.call(null,cm,s))){
return cm.execCommand("newlineAndIndent");
} else {
return null;
}
}
}));

(paredit_cm.core.close_round_and_newline.cljs$lang$maxFixedArity = 2);

/**
 * moves the cursor by 'offset' places, negative for left. returns the cursor.
 */
paredit_cm.core.move = (function paredit_cm$core$move(cm,offset){
cm.setCursor(paredit_cm.core.cursor.call(null,cm,(offset + paredit_cm.core.index.call(null,cm))));

return paredit_cm.core.cursor.call(null,cm);
});
paredit_cm.core.move_right = (function paredit_cm$core$move_right(cm){
return paredit_cm.core.move.call(null,cm,(1));
});
goog.exportSymbol('paredit_cm.core.move_right', paredit_cm.core.move_right);
paredit_cm.core.move_left = (function paredit_cm$core$move_left(cm){
return paredit_cm.core.move.call(null,cm,(-1));
});
goog.exportSymbol('paredit_cm.core.move_left', paredit_cm.core.move_left);
paredit_cm.core.doublequote = (function paredit_cm$core$doublequote(cm){
var map__8966 = paredit_cm.core.get_info.call(null,cm);
var map__8966__$1 = cljs.core.__destructure_map.call(null,map__8966);
var type = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var ch = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var cur = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,"\"");
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (cljs.core._EQ_.call(null,"\"",right_char)))){
return paredit_cm.core.move_right.call(null,cm);
} else {
if(cljs.core._EQ_.call(null,type,"string")){
return paredit_cm.core.insert.call(null,cm,"\\\"");
} else {
return paredit_cm.core.insert.call(null,cm,[((cljs.core.not_EQ_.call(null," ",left_char))?" ":null),"\"\"",((((cljs.core.not_EQ_.call(null," ",right_char)) && (cljs.core.not_EQ_.call(null,"\n",right_char))))?" ":null)].join(''),((((cljs.core._EQ_.call(null," ",right_char)) || (cljs.core._EQ_.call(null,"\n",right_char))))?(-1):(-2)));

}
}
}
});
goog.exportSymbol('paredit_cm.core.doublequote', paredit_cm.core.doublequote);
/**
 * returns true if at a word of code
 */
paredit_cm.core.at_a_word_QMARK_ = (function paredit_cm$core$at_a_word_QMARK_(cm,cur){
return paredit_cm.core.word_QMARK_.call(null,paredit_cm.core.get_type.call(null,cm,cur));
});
/**
 * true if in a word AND not at the end of that word. false if in whitespace or
 *   a string or a comment or at a bracket.
 */
paredit_cm.core.in_a_word_QMARK_ = (function paredit_cm$core$in_a_word_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var i = paredit_cm.core.index.call(null,cm,cur);
return ((paredit_cm.core.at_a_word_QMARK_.call(null,cm,cur)) && (cljs.core.not_EQ_.call(null,i,paredit_cm.core.token_end_index.call(null,cm,i))));
});
paredit_cm.core.move_past_token = (function paredit_cm$core$move_past_token(cm){
var temp__5720__auto__ = paredit_cm.core.get_info.call(null,cm);
if(cljs.core.truth_(temp__5720__auto__)){
var map__8967 = temp__5720__auto__;
var map__8967__$1 = cljs.core.__destructure_map.call(null,map__8967);
var right_cur = cljs.core.get.call(null,map__8967__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var map__8968 = paredit_cm.core.get_info.call(null,cm,right_cur);
var map__8968__$1 = cljs.core.__destructure_map.call(null,map__8968);
var ch = cljs.core.get.call(null,map__8968__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__8968__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var i = paredit_cm.core.index.call(null,cm);
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,((i + (1)) + (end - ch))));
} else {
return null;
}
});
paredit_cm.core.move_before_token = (function paredit_cm$core$move_before_token(cm){
var temp__5720__auto__ = paredit_cm.core.get_info.call(null,cm);
if(cljs.core.truth_(temp__5720__auto__)){
var map__8969 = temp__5720__auto__;
var map__8969__$1 = cljs.core.__destructure_map.call(null,map__8969);
var left_cur = cljs.core.get.call(null,map__8969__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var map__8970 = paredit_cm.core.get_info.call(null,cm,left_cur);
var map__8970__$1 = cljs.core.__destructure_map.call(null,map__8970);
var ch = cljs.core.get.call(null,map__8970__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__8970__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var i = paredit_cm.core.index.call(null,cm);
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,((i - (1)) - (ch - start))));
} else {
return null;
}
});
paredit_cm.core.move_before_word = (function paredit_cm$core$move_before_word(cm){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),paredit_cm.core.linfo.call(null,cm))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
paredit_cm.core.move_past_non_code = (function paredit_cm$core$move_past_non_code(cm){
while(true){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null),paredit_cm.core.rinfo.call(null,cm))){
paredit_cm.core.move_past_token.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
paredit_cm.core.move_before_non_code = (function paredit_cm$core$move_before_non_code(cm){
while(true){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null),paredit_cm.core.linfo.call(null,cm))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
/**
 * even for multi-line strings.
 *   assumes this is called when rinfo returns :string-start, i.e. block cursor is on open double quote
 */
paredit_cm.core.move_past_string = (function paredit_cm$core$move_past_string(cm){
paredit_cm.core.move_right.call(null,cm);

while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-end","string-end",-1632897403),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,paredit_cm.core.rinfo.call(null,cm)))){
paredit_cm.core.move_right.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
/**
 * even for multi-line strings.
 *   assumes this is called when linfo returns :string-end, i.e. block cursor is on to the right of a closing double quote
 */
paredit_cm.core.move_before_string = (function paredit_cm$core$move_before_string(cm){
paredit_cm.core.move_left.call(null,cm);

while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,paredit_cm.core.linfo.call(null,cm)))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
/**
 * forward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself. return true if we moved.
 */
paredit_cm.core.forward_sexp = (function paredit_cm$core$forward_sexp(cm){
var i0 = paredit_cm.core.index.call(null,cm);
var c0 = paredit_cm.core.cursor.call(null,cm);
var stack = (0);
while(true){
var R = paredit_cm.core.rinfo.call(null,cm);
if(cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"eof","eof",-489063237))){
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
if(((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))))){
paredit_cm.core.move_past_non_code.call(null,cm);

var G__8971 = stack;
stack = G__8971;
continue;
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"word","word",-420123725),null,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),null,new cljs.core.Keyword(null,"uncategorized","uncategorized",-583409832),null], null), null).call(null,R))){
paredit_cm.core.move_past_token.call(null,cm);

if((!((stack === (0))))){
var G__8972 = stack;
stack = G__8972;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}
} else {
if(cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-start","string-start",1585643309))){
paredit_cm.core.move_past_string.call(null,cm);

if((!((stack === (0))))){
var G__8973 = stack;
stack = G__8973;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}
} else {
if(cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"opener","opener",1027381943))){
paredit_cm.core.move_right.call(null,cm);

var G__8974 = (stack + (1));
stack = G__8974;
continue;
} else {
if(((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"closer","closer",10992481))) || (cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-end","string-end",-1632897403))))){
if(cljs.core._EQ_.call(null,(0),stack)){
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
if(cljs.core._EQ_.call(null,(1),stack)){
paredit_cm.core.move_right.call(null,cm);

return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
paredit_cm.core.move_right.call(null,cm);

var G__8975 = (stack - (1));
stack = G__8975;
continue;

}
}
} else {
if(cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))){
paredit_cm.core.move_past_string.call(null,cm);

paredit_cm.core.move_left.call(null,cm);

return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
paredit_cm.core.move_past_token.call(null,cm);

if((!((stack === (0))))){
var G__8976 = stack;
stack = G__8976;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}

}
}
}
}
}
}
}
break;
}
});
goog.exportSymbol('paredit_cm.core.forward_sexp', paredit_cm.core.forward_sexp);
/**
 * get the cursor for the end of the sibling to the right.
 */
paredit_cm.core.end_of_next_sibling = (function paredit_cm$core$end_of_next_sibling(var_args){
var G__8978 = arguments.length;
switch (G__8978) {
case 1:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.end_of_next_sibling.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

if(paredit_cm.core.forward_sexp.call(null,cm)){
return paredit_cm.core.cursor.call(null,cm);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.end_of_next_sibling.cljs$lang$maxFixedArity = 2);

/**
 * backward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself. return true if we moved.
 */
paredit_cm.core.backward_sexp = (function paredit_cm$core$backward_sexp(cm){
var i0 = paredit_cm.core.index.call(null,cm);
var rem = i0;
var stack = (0);
while(true){
var L = paredit_cm.core.linfo.call(null,cm);
if((rem < (0))){
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"bof","bof",-1065437469))){
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))))){
paredit_cm.core.move_before_non_code.call(null,cm);

var G__8980 = (rem - (1));
var G__8981 = stack;
rem = G__8980;
stack = G__8981;
continue;
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"word","word",-420123725))){
paredit_cm.core.move_before_word.call(null,cm);

if((!((stack === (0))))){
var G__8982 = (rem - (1));
var G__8983 = stack;
rem = G__8982;
stack = G__8983;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-end","string-end",-1632897403))){
paredit_cm.core.move_before_string.call(null,cm);

if((!((stack === (0))))){
var G__8984 = (rem - (1));
var G__8985 = stack;
rem = G__8984;
stack = G__8985;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"closer","closer",10992481))){
paredit_cm.core.move_left.call(null,cm);

var G__8986 = (rem - (1));
var G__8987 = (stack + (1));
rem = G__8986;
stack = G__8987;
continue;
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"opener","opener",1027381943))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-start","string-start",1585643309))))){
if(cljs.core._EQ_.call(null,(0),stack)){
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
if(cljs.core._EQ_.call(null,(1),stack)){
paredit_cm.core.move_left.call(null,cm);

return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
paredit_cm.core.move_left.call(null,cm);

var G__8988 = (rem - (1));
var G__8989 = (stack - (1));
rem = G__8988;
stack = G__8989;
continue;

}
}
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))){
paredit_cm.core.move_before_string.call(null,cm);

paredit_cm.core.move_right.call(null,cm);

return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
} else {
paredit_cm.core.move_before_token.call(null,cm);

if((!((stack === (0))))){
var G__8990 = (rem - (1));
var G__8991 = stack;
rem = G__8990;
stack = G__8991;
continue;
} else {
return cljs.core.not_EQ_.call(null,i0,paredit_cm.core.index.call(null,cm));
}

}
}
}
}
}
}
}
}
break;
}
});
goog.exportSymbol('paredit_cm.core.backward_sexp', paredit_cm.core.backward_sexp);
/**
 * return the cursor at the start of the sibling to the left.
 */
paredit_cm.core.start_of_prev_sibling = (function paredit_cm$core$start_of_prev_sibling(var_args){
var G__8993 = arguments.length;
switch (G__8993) {
case 1:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.start_of_prev_sibling.call(null,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

if(paredit_cm.core.backward_sexp.call(null,cm)){
return paredit_cm.core.cursor.call(null,cm);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.start_of_prev_sibling.cljs$lang$maxFixedArity = 2);

/**
 * escapes a string, replacing backslashes and doublequotes. wraps
 *   result in a new pair of doublequotes.
 */
paredit_cm.core.escape_string = (function paredit_cm$core$escape_string(s){
return ["\"",clojure.string.replace.call(null,clojure.string.replace.call(null,s,/[\\]/,"\\\\"),/[\"]/,"\\\""),"\""].join('');
});
/**
 * turns selection into a string, escaping backslashes and doublequotes
 */
paredit_cm.core.stringify_selection = (function paredit_cm$core$stringify_selection(cm){
return cm.replaceSelection(paredit_cm.core.escape_string.call(null,cm.getSelection()));
});
/**
 * turns the region from cur-1 to cur-2 into a string, escaping
 *   backslashes and doublequotes
 */
paredit_cm.core.stringify = (function paredit_cm$core$stringify(cm,cur_1,cur_2){
cm.setSelection(cur_1,cur_2);

paredit_cm.core.stringify_selection.call(null,cm);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_1) + (1))));
});
/**
 * moves cursor right, out of the current string
 */
paredit_cm.core.exit_string = (function paredit_cm$core$exit_string(cm){
var map__8995 = paredit_cm.core.get_info.call(null,cm);
var map__8995__$1 = cljs.core.__destructure_map.call(null,map__8995);
var type = cljs.core.get.call(null,map__8995__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var i = cljs.core.get.call(null,map__8995__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var ch = cljs.core.get.call(null,map__8995__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__8995__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core._EQ_.call(null,type,"string")){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i + (end - ch))));
} else {
return null;
}
});
/**
 * returns true if token is in the middle of a string.
 */
paredit_cm.core.in_string_QMARK_ = (function paredit_cm$core$in_string_QMARK_(var_args){
var G__8997 = arguments.length;
switch (G__8997) {
case 1:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.in_string_QMARK_.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var type = paredit_cm.core.get_type.call(null,cm,cur);
return ((cljs.core._EQ_.call(null,type,"string")) || (cljs.core._EQ_.call(null,type,"string-2")));
}));

(paredit_cm.core.in_string_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * paredit meta-doublequote exposed for keymap.
 *   if in a string, moves cursor out of the string to the right.
 *   if in a comment, insert a doublequote.
 *   if in an escaped char, do nothing.
 *   otherwise starts a string that that continues to the end of the next
 *   form, escaping backslashes and doublequotes.
 */
paredit_cm.core.meta_doublequote = (function paredit_cm$core$meta_doublequote(cm){
var map__8999 = paredit_cm.core.get_info.call(null,cm);
var map__8999__$1 = cljs.core.__destructure_map.call(null,map__8999);
var type = cljs.core.get.call(null,map__8999__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var eof = cljs.core.get.call(null,map__8999__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var cur = cljs.core.get.call(null,map__8999__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
if(cljs.core.truth_(eof)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
return paredit_cm.core.exit_string.call(null,cm);
} else {
if(cljs.core._EQ_.call(null,type,"comment")){
return paredit_cm.core.insert.call(null,cm,"\"");
} else {
if(paredit_cm.core.in_a_word_QMARK_.call(null,cm)){
return paredit_cm.core.stringify.call(null,cm,cur,paredit_cm.core.token_end.call(null,cm,cur));
} else {
if(paredit_cm.core.forward_sexp.call(null,cm)){
return paredit_cm.core.stringify.call(null,cm,cur,paredit_cm.core.cursor.call(null,cm));
} else {
return new cljs.core.Keyword(null,"nothing-to-do","nothing-to-do",-818966215);

}
}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.meta_doublequote', paredit_cm.core.meta_doublequote);
/**
 * given a pair of cursors c1 and c2, returns the left-most one
 */
paredit_cm.core.left = (function paredit_cm$core$left(cm,c1,c2){
var i1 = paredit_cm.core.index.call(null,cm,c1);
var i2 = paredit_cm.core.index.call(null,cm,c2);
if((i1 < i2)){
return c1;
} else {
return c2;
}
});
/**
 * given a pair of cursors c1 and c2, returns the right-most one
 */
paredit_cm.core.right = (function paredit_cm$core$right(cm,c1,c2){
var i1 = paredit_cm.core.index.call(null,cm,c1);
var i2 = paredit_cm.core.index.call(null,cm,c2);
if((i1 < i2)){
return c2;
} else {
return c1;
}
});
/**
 * like get-info but for the first selection. gets the cursor to the left of the
 *   selection, the start, the end, the text selected, the starting and ending line
 *   numbers. nil if nothing selected.
 */
paredit_cm.core.selection_info = (function paredit_cm$core$selection_info(cm){
if(cljs.core.truth_(cm.somethingSelected())){
var first_sel = cljs.core.first.call(null,cm.listSelections());
var text = cljs.core.first.call(null,cm.getSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
var left_of_start = paredit_cm.core.left.call(null,cm,anchor,head);
var start_cur = paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,left_of_start) + (1)));
var end_cur = paredit_cm.core.right.call(null,cm,anchor,head);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_of_start,start_cur,end_cur,text,start_cur.line,end_cur.line], null);
} else {
return null;
}
});
/**
 * get the types from cursors c1 to c2. assumes 1 is to the left of 2 and not
 *   vice versa.
 */
paredit_cm.core.get_types = (function paredit_cm$core$get_types(cm,c1,c2){
var types = cljs.core.PersistentVector.EMPTY;
var cur = c1;
while(true){
var map__9001 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9001__$1 = cljs.core.__destructure_map.call(null,map__9001);
var type = cljs.core.get.call(null,map__9001__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var right_cur = cljs.core.get.call(null,map__9001__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var types_SINGLEQUOTE_ = cljs.core.conj.call(null,types,type);
if(cljs.core._EQ_.call(null,cur,c2)){
return types_SINGLEQUOTE_;
} else {
var G__9002 = types_SINGLEQUOTE_;
var G__9003 = right_cur;
types = G__9002;
cur = G__9003;
continue;
}
break;
}
});
/**
 * true if every position's type satisfies pred, for the entire (first)
 *   selection
 */
paredit_cm.core.selection_completely_satisfies_pred_QMARK_ = (function paredit_cm$core$selection_completely_satisfies_pred_QMARK_(cm,pred){
var temp__5720__auto__ = paredit_cm.core.selection_info.call(null,cm);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__9004 = temp__5720__auto__;
var _ = cljs.core.nth.call(null,vec__9004,(0),null);
var c1 = cljs.core.nth.call(null,vec__9004,(1),null);
var c2 = cljs.core.nth.call(null,vec__9004,(2),null);
return cljs.core.every_QMARK_.call(null,pred,paredit_cm.core.get_types.call(null,cm,c1,c2));
} else {
return null;
}
});
paredit_cm.core.selection_completely_whitespace_QMARK_ = (function paredit_cm$core$selection_completely_whitespace_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_.call(null,cm,cljs.core.nil_QMARK_);
});
paredit_cm.core.not_code_QMARK_ = (function paredit_cm$core$not_code_QMARK_(type){
return (((type == null)) || (cljs.core._EQ_.call(null,type,"comment")));
});
paredit_cm.core.selection_completely_non_code_QMARK_ = (function paredit_cm$core$selection_completely_non_code_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_.call(null,cm,paredit_cm.core.not_code_QMARK_);
});
/**
 * starts each line in 's' with ;; and appends 'post-script'
 */
paredit_cm.core.to_comment = (function paredit_cm$core$to_comment(s,postscript){
var cmnt = clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__9007_SHARP_){
return clojure.string.replace.call(null,p1__9007_SHARP_,/^/,";; ");
}),clojure.string.split_lines.call(null,s)));
return [cmnt,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(postscript)].join('');
});
/**
 * removes leading whitespace and semicolons from lines in 's'
 */
paredit_cm.core.uncomment = (function paredit_cm$core$uncomment(s){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__9008_SHARP_){
return clojure.string.replace.call(null,p1__9008_SHARP_,/^\s*;+/,"");
}),clojure.string.split_lines.call(null,s)));
});
/**
 * indents lines from a to z (line numbers). assumes a is before z.
 */
paredit_cm.core.indent_lines = (function paredit_cm$core$indent_lines(cm,a,z){
var seq__9009 = cljs.core.seq.call(null,cljs.core.range.call(null,a,(z + (1))));
var chunk__9010 = null;
var count__9011 = (0);
var i__9012 = (0);
while(true){
if((i__9012 < count__9011)){
var line = cljs.core._nth.call(null,chunk__9010,i__9012);
cm.indentLine(line);


var G__9013 = seq__9009;
var G__9014 = chunk__9010;
var G__9015 = count__9011;
var G__9016 = (i__9012 + (1));
seq__9009 = G__9013;
chunk__9010 = G__9014;
count__9011 = G__9015;
i__9012 = G__9016;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9009);
if(temp__5720__auto__){
var seq__9009__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9009__$1)){
var c__4679__auto__ = cljs.core.chunk_first.call(null,seq__9009__$1);
var G__9017 = cljs.core.chunk_rest.call(null,seq__9009__$1);
var G__9018 = c__4679__auto__;
var G__9019 = cljs.core.count.call(null,c__4679__auto__);
var G__9020 = (0);
seq__9009 = G__9017;
chunk__9010 = G__9018;
count__9011 = G__9019;
i__9012 = G__9020;
continue;
} else {
var line = cljs.core.first.call(null,seq__9009__$1);
cm.indentLine(line);


var G__9021 = cljs.core.next.call(null,seq__9009__$1);
var G__9022 = null;
var G__9023 = (0);
var G__9024 = (0);
seq__9009 = G__9021;
chunk__9010 = G__9022;
count__9011 = G__9023;
i__9012 = G__9024;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * removes whitespace and leading semicolons from selection, replaces
 *   selection with the result, indents lines affected.
 */
paredit_cm.core.uncomment_selection = (function paredit_cm$core$uncomment_selection(cm){
var temp__5720__auto__ = paredit_cm.core.selection_info.call(null,cm);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__9025 = temp__5720__auto__;
var _ = cljs.core.nth.call(null,vec__9025,(0),null);
var c1 = cljs.core.nth.call(null,vec__9025,(1),null);
var c2 = cljs.core.nth.call(null,vec__9025,(2),null);
var text = cljs.core.nth.call(null,vec__9025,(3),null);
cm.replaceSelection(paredit_cm.core.uncomment.call(null,text));

return paredit_cm.core.indent_lines.call(null,cm,c1.line,c2.line);
} else {
return null;
}
});
/**
 * returns the result of appending the applicable part of 'tok' to
 *   's'. this is for collecting all the text on a line after 'ch'
 */
paredit_cm.core.append = (function paredit_cm$core$append(ch,s,tok){
if((ch < tok.end)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.subs.call(null,tok.string,((function (){var x__4336__auto__ = ch;
var y__4337__auto__ = tok.start;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() - tok.start))].join('');
} else {
return s;
}
});
paredit_cm.core.get_text_to_end_of_line = (function paredit_cm$core$get_text_to_end_of_line(cm,cur){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
return cljs.core.reduce.call(null,cljs.core.partial.call(null,paredit_cm.core.append,ch),"",toks);
});
paredit_cm.core.comment_selection = (function paredit_cm$core$comment_selection(cm){
var vec__9028 = paredit_cm.core.selection_info.call(null,cm);
var _ = cljs.core.nth.call(null,vec__9028,(0),null);
var c1 = cljs.core.nth.call(null,vec__9028,(1),null);
var c2 = cljs.core.nth.call(null,vec__9028,(2),null);
var text = cljs.core.nth.call(null,vec__9028,(3),null);
var l1 = cljs.core.nth.call(null,vec__9028,(4),null);
var l2 = cljs.core.nth.call(null,vec__9028,(5),null);
var text_after_selection = paredit_cm.core.get_text_to_end_of_line.call(null,cm,c2);
var code_follows_selection = cljs.core.not_EQ_.call(null,text_after_selection,"");
var end_of_line = paredit_cm.core.last_cur.call(null,cm);
var line_to = ((code_follows_selection)?(l2 + (1)):l2);
if(code_follows_selection){
cm.setSelection(paredit_cm.core.left,end_of_line);
} else {
}

cm.replaceSelection(paredit_cm.core.to_comment.call(null,text,text_after_selection));

return paredit_cm.core.indent_lines.call(null,cm,l1,line_to);
});
/**
 * true if the line ends with a comment
 */
paredit_cm.core.line_ends_with_comment_QMARK_ = (function paredit_cm$core$line_ends_with_comment_QMARK_(cm){
return cljs.core._EQ_.call(null,"comment",paredit_cm.core.last_token.call(null,cm,paredit_cm.core.cursor.call(null,cm)).type);
});
paredit_cm.core.indent_current_line = (function paredit_cm$core$indent_current_line(cm){
return cm.indentLine(paredit_cm.core.cursor.call(null,cm).line);
});
/**
 * moves cursor to ;;X
 */
paredit_cm.core.go_to_comment = (function paredit_cm$core$go_to_comment(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var c_tok = paredit_cm.core.last_token.call(null,cm,cur);
var start = c_tok.start;
var offset = cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__9031_SHARP_){
return cljs.core._EQ_.call(null,";",p1__9031_SHARP_);
}),c_tok.string));
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,((i + (start - ch)) + offset)));
});
/**
 * presses spacebar until we are at col 40
 */
paredit_cm.core.insert_spaces_to_col_40 = (function paredit_cm$core$insert_spaces_to_col_40(cm){
var ch = paredit_cm.core.cursor.call(null,cm).ch;
if((ch < (40))){
return paredit_cm.core.insert.call(null,cm,clojure.string.join.call(null,cljs.core.repeat.call(null,((40) - ch)," ")));
} else {
return null;
}
});
/**
 * moves cursor to the comment on the line and makes sure the comment
 *   starts on column 40 or greater. assumes last token is a comment
 */
paredit_cm.core.go_to_comment_and_indent = (function paredit_cm$core$go_to_comment_and_indent(cm){
paredit_cm.core.indent_current_line.call(null,cm);

var cur = paredit_cm.core.cursor.call(null,cm);
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var comment_start = paredit_cm.core.last_token.call(null,cm,cur).start;
cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i + (comment_start - ch))));

paredit_cm.core.insert_spaces_to_col_40.call(null,cm);

return paredit_cm.core.go_to_comment.call(null,cm);
});
/**
 * true if code is to the left and whitespace* is to the right.
 *   assumes you already know line does not end with a comment.
 */
paredit_cm.core.betw_code_and_line_end_QMARK_ = (function paredit_cm$core$betw_code_and_line_end_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.call(null,(function (p1__9032_SHARP_){
return (((p1__9032_SHARP_.end <= ch)) || ((p1__9032_SHARP_.type == null)));
}),toks);
var and__4251__auto__ = cljs.core.seq.call(null,toks);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,tests);
if(and__4251__auto____$1){
return cljs.core.some.call(null,(function (p1__9033_SHARP_){
return (!((p1__9033_SHARP_.type == null)));
}),toks);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * moves cursor to end of last non-whitespace token on a line.
 *   returns a vector of new index, new ch, and new cursor.
 */
paredit_cm.core.move_to_end_of_line = (function paredit_cm$core$move_to_end_of_line(var_args){
var G__9036 = arguments.length;
switch (G__9036) {
case 1:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.move_to_end_of_line.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = cljs.core.last.call(null,cljs.core.remove.call(null,(function (p1__9034_SHARP_){
return (p1__9034_SHARP_.type == null);
}),cm.getLineTokens(cur.line))).end;
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var i_SINGLEQUOTE_ = (i + (end - ch));
var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.call(null,cm,i_SINGLEQUOTE_);
cm.setCursor(cur_SINGLEQUOTE_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_SINGLEQUOTE_,cur_SINGLEQUOTE_.ch,cur_SINGLEQUOTE_], null);
}));

(paredit_cm.core.move_to_end_of_line.cljs$lang$maxFixedArity = 2);

/**
 * selects from current position to the end of the line
 */
paredit_cm.core.select_rest_of_line = (function paredit_cm$core$select_rest_of_line(cm){
return cm.setSelection(paredit_cm.core.cursor.call(null,cm),paredit_cm.core.last_cur.call(null,cm));
});
/**
 * deletes from current position to the end of the line
 */
paredit_cm.core.delete_to_end_of_line = (function paredit_cm$core$delete_to_end_of_line(cm){
return cm.replaceRange("",paredit_cm.core.cursor.call(null,cm),paredit_cm.core.last_cur.call(null,cm));
});
/**
 * starts a ; comment at column 40 or greater and moves to it.
 */
paredit_cm.core.create_comment_at_end = (function paredit_cm$core$create_comment_at_end(cm){
paredit_cm.core.indent_current_line.call(null,cm);

paredit_cm.core.move_to_end_of_line.call(null,cm);

paredit_cm.core.insert.call(null,cm," ");

paredit_cm.core.insert_spaces_to_col_40.call(null,cm);

paredit_cm.core.insert.call(null,cm,"; ");

return paredit_cm.core.delete_to_end_of_line.call(null,cm);
});
/**
 * returns true if line is all whitespace
 */
paredit_cm.core.line_is_whitespace_QMARK_ = (function paredit_cm$core$line_is_whitespace_QMARK_(cm){
return cljs.core.every_QMARK_.call(null,(function (p1__9038_SHARP_){
return (p1__9038_SHARP_.type == null);
}),cm.getLineTokens(paredit_cm.core.cursor.call(null,cm).line));
});
/**
 * creates and indents a ;; comment
 */
paredit_cm.core.create_line_comment = (function paredit_cm$core$create_line_comment(cm){
paredit_cm.core.insert.call(null,cm,";; ");

paredit_cm.core.delete_to_end_of_line.call(null,cm);

return paredit_cm.core.indent_current_line.call(null,cm);
});
/**
 * creates and indents a ;; comment on a new line
 */
paredit_cm.core.new_line_and_comment = (function paredit_cm$core$new_line_and_comment(cm){
paredit_cm.core.indent_current_line.call(null,cm);

paredit_cm.core.insert.call(null,cm,"\n\n");

cm.execCommand("goLineDown");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line.call(null,cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment.call(null,cm);
});
/**
 * creates and indents a ;; comment on this line
 */
paredit_cm.core.insert_line_comment_here = (function paredit_cm$core$insert_line_comment_here(cm){
paredit_cm.core.insert.call(null,cm,"\n");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line.call(null,cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment.call(null,cm);
});
/**
 * returns true if token is in the middle of code. assumes you've already ruled
 *   out comments.
 */
paredit_cm.core.in_code_QMARK_ = (function paredit_cm$core$in_code_QMARK_(cm){
var map__9039 = paredit_cm.core.get_info.call(null,cm);
var map__9039__$1 = cljs.core.__destructure_map.call(null,map__9039);
var type = cljs.core.get.call(null,map__9039__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var start = cljs.core.get.call(null,map__9039__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__9039__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var ch = cljs.core.get.call(null,map__9039__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
return (((start < ch)) && ((((ch < end)) && ((!((type == null)))))));
});
/**
 * returns true if token is to the right of whitespace
 */
paredit_cm.core.in_whitespace_QMARK_ = (function paredit_cm$core$in_whitespace_QMARK_(cm){
return (paredit_cm.core.get_type.call(null,cm) == null);
});
/**
 * returns true if there's any code to the left of cursor. assumes you've
 *   already ruled out comments so only looks for non nil tokens
 */
paredit_cm.core.code_to_left_QMARK_ = (function paredit_cm$core$code_to_left_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var code = cljs.core.map.call(null,(function (p1__9040_SHARP_){
return (((!((p1__9040_SHARP_.type == null)))) && ((((p1__9040_SHARP_.end <= ch)) || ((((p1__9040_SHARP_.start < ch)) && ((ch < p1__9040_SHARP_.end)))))));
}),toks);
var and__4251__auto__ = cljs.core.seq.call(null,toks);
if(and__4251__auto__){
return cljs.core.some.call(null,cljs.core.true_QMARK_,code);
} else {
return and__4251__auto__;
}
});
paredit_cm.core.comment_dwim = (function paredit_cm$core$comment_dwim(cm){
if(cljs.core.truth_(paredit_cm.core.selection_completely_whitespace_QMARK_.call(null,cm))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.selection_completely_non_code_QMARK_.call(null,cm))){
return paredit_cm.core.uncomment_selection.call(null,cm);
} else {
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.comment_selection.call(null,cm);
} else {
if(paredit_cm.core.line_ends_with_comment_QMARK_.call(null,cm)){
return paredit_cm.core.go_to_comment_and_indent.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.betw_code_and_line_end_QMARK_.call(null,cm))){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(paredit_cm.core.in_code_QMARK_.call(null,cm)){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.call(null,cm))){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(paredit_cm.core.line_is_whitespace_QMARK_.call(null,cm)){
return paredit_cm.core.create_line_comment.call(null,cm);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = paredit_cm.core.code_to_left_QMARK_.call(null,cm);
if(cljs.core.truth_(and__4251__auto__)){
return paredit_cm.core.in_whitespace_QMARK_.call(null,cm);
} else {
return and__4251__auto__;
}
})())){
return paredit_cm.core.new_line_and_comment.call(null,cm);
} else {
if(paredit_cm.core.in_whitespace_QMARK_.call(null,cm)){
return paredit_cm.core.insert_line_comment_here.call(null,cm);
} else {
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);

}
}
}
}
}
}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.comment_dwim', paredit_cm.core.comment_dwim);
/**
 * delete 1 or n char to left
 */
paredit_cm.core.backspace = (function paredit_cm$core$backspace(var_args){
var G__9043 = arguments.length;
switch (G__9043) {
case 1:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backspace.call(null,cm,(1));
}));

(paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _n = (function (p1__9041_SHARP_){
return (p1__9041_SHARP_ - n);
});
var cur = paredit_cm.core.cursor.call(null,cm);
var cur0 = paredit_cm.core.cursor.call(null,cm,_n.call(null,paredit_cm.core.index.call(null,cm,cur)));
return cm.replaceRange("",cur0,cur);
}));

(paredit_cm.core.backspace.cljs$lang$maxFixedArity = 2);

/**
 * true if this position would be whitespace if we pressed the spacebar.
 */
paredit_cm.core.right_cur_would_be_whitespace_QMARK_ = (function paredit_cm$core$right_cur_would_be_whitespace_QMARK_(cm,cur,right_cur){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.insert.call(null,cm," ",(0),cur);
var answer = (paredit_cm.core.get_type.call(null,cm,right_cur) == null);
paredit_cm.core.backspace.call(null,cm);

cm.setCursor(original_cur);

return answer;
});
/**
 * returns true for closing brackets and for closing double-quotes
 */
paredit_cm.core.closing_delim_QMARK_ = (function paredit_cm$core$closing_delim_QMARK_(cm,cur){
var map__9045 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9045__$1 = cljs.core.__destructure_map.call(null,map__9045);
var string = cljs.core.get.call(null,map__9045__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__9045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9045__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__9045__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var or__4253__auto__ = (function (){var and__4251__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__4251__auto__)){
return paredit_cm.core.closer_QMARK_.call(null,left_char);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,"\"",left_char)) && (paredit_cm.core.right_cur_would_be_whitespace_QMARK_.call(null,cm,cur,right_cur)))));
}
});
/**
 * returns true if cur is just to the right of an opening doublequote
 */
paredit_cm.core.opening_doublequote_QMARK_ = (function paredit_cm$core$opening_doublequote_QMARK_(var_args){
var G__9047 = arguments.length;
switch (G__9047) {
case 2:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__9048 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9048__$1 = cljs.core.__destructure_map.call(null,map__9048);
var type = cljs.core.get.call(null,map__9048__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9048__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__9048__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
return paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur);
}));

(paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (cm,type,left_char,right_cur){
var and__4251__auto__ = cljs.core._EQ_.call(null,type,"string");
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.call(null,"\"",left_char);
if(and__4251__auto____$1){
var and__4251__auto____$2 = right_cur;
if(cljs.core.truth_(and__4251__auto____$2)){
return cljs.core._EQ_.call(null,"string",paredit_cm.core.get_type.call(null,cm,right_cur));
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}));

(paredit_cm.core.opening_doublequote_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * returns true if cur is just to the right of a closing doublequote
 */
paredit_cm.core.closing_doublequote_QMARK_ = (function paredit_cm$core$closing_doublequote_QMARK_(cm,cur){
var map__9050 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9050__$1 = cljs.core.__destructure_map.call(null,map__9050);
var type = cljs.core.get.call(null,map__9050__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9050__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__9050__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var right_type = paredit_cm.core.get_type.call(null,cm,right_cur);
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,"\"",left_char)) && (cljs.core.not_EQ_.call(null,right_type,"string")))));
});
/**
 * returns true for opening brackets and for opening double-quotes
 */
paredit_cm.core.opening_delim_QMARK_ = (function paredit_cm$core$opening_delim_QMARK_(cm,cur){
var map__9051 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9051__$1 = cljs.core.__destructure_map.call(null,map__9051);
var string = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__9051__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var or__4253__auto__ = (function (){var and__4251__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__4251__auto__)){
return paredit_cm.core.opener_QMARK_.call(null,left_char);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur);
}
});
/**
 * returns true for an opening bracket of an empty pair ()
 */
paredit_cm.core.opening_delim_for_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_empty_pair_QMARK_(cm,cur){
var map__9052 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9052__$1 = cljs.core.__destructure_map.call(null,map__9052);
var left_char = cljs.core.get.call(null,map__9052__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__9052__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var right_cur = cljs.core.get.call(null,map__9052__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var and__4251__auto__ = paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = right_cur;
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = paredit_cm.core.closing_delim_QMARK_.call(null,cm,right_cur);
if(cljs.core.truth_(and__4251__auto____$2)){
return paredit_cm.core.pair_QMARK_.call(null,left_char,right_char);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * returns true for an opening bracket of a pair that contains one or more
 *   chars.
 */
paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_non_empty_pair_QMARK_(cm){
var map__9053 = paredit_cm.core.get_info.call(null,cm);
var map__9053__$1 = cljs.core.__destructure_map.call(null,map__9053);
var left_char = cljs.core.get.call(null,map__9053__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__9053__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var cur = cljs.core.get.call(null,map__9053__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var and__4251__auto__ = paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__4251__auto__)){
return (!(paredit_cm.core.pair_QMARK_.call(null,left_char,right_char)));
} else {
return and__4251__auto__;
}
});
/**
 * delete 1 or n char to right
 */
paredit_cm.core.delete$ = (function paredit_cm$core$delete(var_args){
var G__9056 = arguments.length;
switch (G__9056) {
case 1:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete$.call(null,cm,(1));
}));

(paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _PLUS_n = (function (p1__9054_SHARP_){
return (p1__9054_SHARP_ + n);
});
var cur = paredit_cm.core.cursor.call(null,cm);
var cur2 = paredit_cm.core.cursor.call(null,cm,_PLUS_n.call(null,paredit_cm.core.index.call(null,cm,cur)));
return cm.replaceRange("",cur,cur2);
}));

(paredit_cm.core.delete$.cljs$lang$maxFixedArity = 2);

/**
 * returns true if cursor indicates whitespace
 */
paredit_cm.core.whitespace_QMARK_ = (function paredit_cm$core$whitespace_QMARK_(cm,cur){
var info = paredit_cm.core.get_info.call(null,cm,cur);
return (((!((info == null)))) && ((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info) == null)));
});
/**
 * true if cursor info indicates opening/closing bracket or quote
 */
paredit_cm.core.bracket_QMARK_ = (function paredit_cm$core$bracket_QMARK_(cm,cur){
var map__9058 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9058__$1 = cljs.core.__destructure_map.call(null,map__9058);
var info = map__9058__$1;
var type = cljs.core.get.call(null,map__9058__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9058__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var or__4253__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core._EQ_.call(null,"string",type)) && (cljs.core._EQ_.call(null,"\"",left_char)));
}
});
/**
 * assumes a pair of brackets surround the cursor. selects the pair.
 */
paredit_cm.core.select_pair = (function paredit_cm$core$select_pair(cm){
var i = paredit_cm.core.index.call(null,cm,paredit_cm.core.cursor.call(null,cm));
var c1 = paredit_cm.core.cursor.call(null,cm,(i - (1)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (1)));
return cm.setSelection(c1,c2);
});
paredit_cm.core.delete_selection = (function paredit_cm$core$delete_selection(cm){
return cm.replaceSelection("");
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.delete_pair = (function paredit_cm$core$delete_pair(cm){
paredit_cm.core.backspace.call(null,cm);

return paredit_cm.core.delete$.call(null,cm);
});
/**
 * paredit-forward-delete exposed for keymap
 */
paredit_cm.core.forward_delete = (function paredit_cm$core$forward_delete(cm){
var map__9059 = paredit_cm.core.get_info.call(null,cm);
var map__9059__$1 = cljs.core.__destructure_map.call(null,map__9059);
var info = map__9059__$1;
var cur = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var right_cur = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection.call(null,cm);
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,right_cur)){
return paredit_cm.core.delete$.call(null,cm);
} else {
if(cljs.core.not.call(null,paredit_cm.core.bracket_QMARK_.call(null,cm,right_cur))){
return paredit_cm.core.delete$.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,right_cur))){
return paredit_cm.core.move_right.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);

}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.forward_delete', paredit_cm.core.forward_delete);
/**
 * paredit backward delete exposed for keymap
 */
paredit_cm.core.backward_delete = (function paredit_cm$core$backward_delete(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
if(paredit_cm.core.escaped_char_to_left_QMARK_.call(null,cm,cur)){
return paredit_cm.core.backspace.call(null,cm,(2));
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_.call(null,cm))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return paredit_cm.core.move_left.call(null,cm);
} else {
return paredit_cm.core.backspace.call(null,cm);

}
}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.backward_delete', paredit_cm.core.backward_delete);
/**
 * returns true if token is in the middle of a string.
 */
paredit_cm.core.in_regular_string_QMARK_ = (function paredit_cm$core$in_regular_string_QMARK_(cm,cur){
var or__4253__auto__ = paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core._EQ_.call(null,"string",paredit_cm.core.get_type.call(null,cm,cur))) && ((!(paredit_cm.core.closing_doublequote_QMARK_.call(null,cm,cur)))));
}
});
/**
 * true if these values are from a string token that ends on another line
 */
paredit_cm.core.str_ends_on_another_line_QMARK_ = (function paredit_cm$core$str_ends_on_another_line_QMARK_(type,string){
return ((cljs.core._EQ_.call(null,"string",type)) && (cljs.core.not_EQ_.call(null,"\"",cljs.core.last.call(null,string))));
});
/**
 * moves cursor to end of the string you're in (but still inside the
 *   closing doublequote). assumes you're in a string. the end could be
 *   on a different line from where you start
 */
paredit_cm.core.go_to_end_of_string = (function paredit_cm$core$go_to_end_of_string(var_args){
var G__9061 = arguments.length;
switch (G__9061) {
case 1:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.go_to_end_of_string.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__9062 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9062__$1 = cljs.core.__destructure_map.call(null,map__9062);
var left_char = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var type = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var string = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var ch = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__9062__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if((type == null)){
return paredit_cm.core.go_to_end_of_string.call(null,cm,right_cur);
} else {
if(paredit_cm.core.str_ends_on_another_line_QMARK_.call(null,type,string)){
paredit_cm.core.move_to_end_of_line.call(null,cm,cur);

paredit_cm.core.move.call(null,cm,(2));

return paredit_cm.core.go_to_end_of_string.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur))){
paredit_cm.core.move.call(null,cm,(1));

return paredit_cm.core.go_to_end_of_string.call(null,cm);
} else {
if(cljs.core._EQ_.call(null,"string",type)){
return paredit_cm.core.move.call(null,cm,((end - ch) - (1)));
} else {
return cur;

}
}
}
}
}));

(paredit_cm.core.go_to_end_of_string.cljs$lang$maxFixedArity = 2);

/**
 * assumes you are in a string.
 */
paredit_cm.core.select_rest_of_string = (function paredit_cm$core$select_rest_of_string(cm){
var c1 = paredit_cm.core.cursor.call(null,cm);
var c2 = paredit_cm.core.go_to_end_of_string.call(null,cm,c1);
return cm.setSelection(c1,c2);
});
/**
 * true if code is to the left and whitespace* comment* is to the right.
 */
paredit_cm.core.betw_code_and_comment_QMARK_ = (function paredit_cm$core$betw_code_and_comment_QMARK_(cm,cur){
if(cljs.core.truth_(cur)){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.call(null,(function (p1__9064_SHARP_){
return (((p1__9064_SHARP_.end <= ch)) || ((((p1__9064_SHARP_.type == null)) || (cljs.core._EQ_.call(null,"comment",p1__9064_SHARP_.type)))));
}),toks);
var and__4251__auto__ = cljs.core.seq.call(null,toks);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,tests);
if(and__4251__auto____$1){
return cljs.core.some.call(null,(function (p1__9065_SHARP_){
return (!((p1__9065_SHARP_.type == null)));
}),toks);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
});
paredit_cm.core.kill_from_to = (function paredit_cm$core$kill_from_to(cm,i,j){
var cur = paredit_cm.core.cursor.call(null,cm,i);
CodeMirror.emacs.kill(cm,cur,paredit_cm.core.cursor.call(null,cm,j));

return cm.setCursor(cur);
});
paredit_cm.core.kill_region = (function paredit_cm$core$kill_region(cm){
var first_sel = cljs.core.first.call(null,cm.listSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
return CodeMirror.emacs.kill(cm,anchor,head);
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.kill_pair = (function paredit_cm$core$kill_pair(cm){
paredit_cm.core.select_pair.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.kill_rest_of_string = (function paredit_cm$core$kill_rest_of_string(cm){
paredit_cm.core.select_rest_of_string.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.kill_rest_of_line = (function paredit_cm$core$kill_rest_of_line(cm){
paredit_cm.core.select_rest_of_line.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_ = (function paredit_cm$core$in_string_and_backslash_to_the_left_QMARK_(var_args){
var G__9067 = arguments.length;
switch (G__9067) {
case 1:
return paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__9068 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9068__$1 = cljs.core.__destructure_map.call(null,map__9068);
var type = cljs.core.get.call(null,map__9068__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9068__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
return ((cljs.core._EQ_.call(null,"string",type)) && (cljs.core._EQ_.call(null,"\\",left_char)));
}));

(paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.cljs$lang$maxFixedArity = 2);

paredit_cm.core.infos_to_end_of_this_line = (function paredit_cm$core$infos_to_end_of_this_line(cm){
var line_end_cur = paredit_cm.core.last_cur.call(null,cm);
var e = paredit_cm.core.index.call(null,cm,line_end_cur);
var i = paredit_cm.core.index.call(null,cm);
return cljs.core.map.call(null,(function (p1__9071_SHARP_){
return paredit_cm.core.rinfo.call(null,cm,p1__9071_SHARP_);
}),cljs.core.map.call(null,(function (p1__9070_SHARP_){
return paredit_cm.core.cursor.call(null,cm,p1__9070_SHARP_);
}),cljs.core.range.call(null,i,e)));
});
paredit_cm.core.cur_of_end_of_kill = (function paredit_cm$core$cur_of_end_of_kill(cm){
var starting_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
var cur_eol = paredit_cm.core.last_cur.call(null,cm);
var stack = (0);
while(true){
var L = paredit_cm.core.rinfo.call(null,cm);
var map__9073 = paredit_cm.core.get_info.call(null,cm);
var map__9073__$1 = cljs.core.__destructure_map.call(null,map__9073);
var line = cljs.core.get.call(null,map__9073__$1,new cljs.core.Keyword(null,"line","line",212345235));
var left_cur = cljs.core.get.call(null,map__9073__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var cur = cljs.core.get.call(null,map__9073__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var right_cur = cljs.core.get.call(null,map__9073__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var i = cljs.core.get.call(null,map__9073__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"eof","eof",-489063237))){
return cur;
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"opener","opener",1027381943))){
paredit_cm.core.move_right.call(null,cm);

var G__9074 = (stack + (1));
stack = G__9074;
continue;
} else {
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-start","string-start",1585643309))){
paredit_cm.core.move_right.call(null,cm);

var G__9075 = (stack + (1));
stack = G__9075;
continue;
} else {
if(((cljs.core._EQ_.call(null,line,starting_line)) && ((((stack === (0))) && (((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"closer","closer",10992481))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-end","string-end",-1632897403))))))))){
return cur;
} else {
if(((cljs.core._EQ_.call(null,line,starting_line)) && ((((stack === (0))) && (cljs.core._EQ_.call(null,cur_eol,right_cur)))))){
return left_cur;
} else {
if(((cljs.core.not_EQ_.call(null,line,starting_line)) && ((stack === (0))))){
return cur;
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"closer","closer",10992481))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-end","string-end",-1632897403))))){
paredit_cm.core.move_right.call(null,cm);

var G__9076 = (stack - (1));
stack = G__9076;
continue;
} else {
paredit_cm.core.move_right.call(null,cm);

var G__9077 = stack;
stack = G__9077;
continue;

}
}
}
}
}
}
}
break;
}
});
/**
 * paredit kill exposed for keymap.
 *   kill the rest of the sexps that start on the current line
 *   but stop at an enclosing (parent) doublequote or bracket.
 *   avoid accidentally escaping a closing double quote of a string.
 *   we may have to kill a multi-line sexp.
 */
paredit_cm.core.kill = (function paredit_cm$core$kill(cm){
while(true){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),null,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066),null], null), null),paredit_cm.core.linfo.call(null,cm))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
}
break;
}

while(true){
if(cljs.core.truth_(paredit_cm.core.in_string_and_backslash_to_the_left_QMARK_.call(null,cm))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
}
break;
}

var start_cur = paredit_cm.core.cursor.call(null,cm);
var end_cur = paredit_cm.core.cur_of_end_of_kill.call(null,cm);
if(cljs.core.truth_(end_cur)){
cm.setSelection(start_cur,end_cur);

return paredit_cm.core.kill_region.call(null,cm);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.kill', paredit_cm.core.kill);
paredit_cm.core.non_word_chars = cljs.core.set.call(null,"(){}[]|&; \n");
paredit_cm.core.semicolons = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null);
paredit_cm.core.comment_whitespace = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null);
paredit_cm.core.non_word_in_comment = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null,";",null," ",null], null), null);
paredit_cm.core.non_word_in_string = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\"",null,"\t",null," ",null], null), null);
/**
 * assumes i is in a comment or a string. returns the i at the end of
 *   the next word (going to the right) in this comment/string
 */
paredit_cm.core.end_of_next_word = (function paredit_cm$core$end_of_next_word(cm,i){
var map__9078 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__9078__$1 = cljs.core.__destructure_map.call(null,map__9078);
var ch = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var string = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var tail = cljs.core.subs.call(null,string,(ch - start));
var word = cljs.core.re_find.call(null,/^\s*[\S]*/,tail);
var length = cljs.core.count.call(null,word);
var quote = ((clojure.string.ends_with_QMARK_.call(null,word,"\""))?(-1):(0));
return ((i + length) + quote);
});
/**
 * assumes i is in a comment or a string. returns the i at the start of
 *   the prev word (going to the left) in this comment/string
 */
paredit_cm.core.start_of_prev_word = (function paredit_cm$core$start_of_prev_word(cm,i){
var map__9079 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__9079__$1 = cljs.core.__destructure_map.call(null,map__9079);
var ch = cljs.core.get.call(null,map__9079__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__9079__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var string = cljs.core.get.call(null,map__9079__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var head = cljs.core.subs.call(null,string,(0),(ch - start));
var last_word = cljs.core.re_find.call(null,/[\S]*\s*$/,head);
var length = cljs.core.count.call(null,last_word);
var quote = ((clojure.string.ends_with_QMARK_.call(null,last_word,"\""))?(1):(0));
return ((i - length) - quote);
});
paredit_cm.core.delimiters = clojure.set.union.call(null,paredit_cm.core.openers,paredit_cm.core.closers,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\"",null,";",null], null), null));
/**
 * move to the start of the next word and return the index
 *   that we should start deleting from for forward-kill-word,
 *   nil if no word to delete (and move back).
 */
paredit_cm.core.move_to_start_of_word = (function paredit_cm$core$move_to_start_of_word(cm){
var start_cur = paredit_cm.core.cursor.call(null,cm);
var mark = paredit_cm.core.index.call(null,cm);
var R = paredit_cm.core.rinfo.call(null,cm);
var right_char = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
while(true){
if(cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"eof","eof",-489063237))){
cm.setCursor(start_cur);

return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.call(null,R,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434));
if(and__4251__auto__){
return paredit_cm.core.delimiters.call(null,right_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_right.call(null,cm);

var G__9080 = paredit_cm.core.index.call(null,cm);
var G__9081 = paredit_cm.core.rinfo.call(null,cm);
var G__9082 = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9080;
R = G__9081;
right_char = G__9082;
continue;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"comment","comment",532206069));
if(and__4251__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null).call(null,right_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_right.call(null,cm);

var G__9083 = mark;
var G__9084 = paredit_cm.core.rinfo.call(null,cm);
var G__9085 = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9083;
R = G__9084;
right_char = G__9085;
continue;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434));
if(and__4251__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null," ",null,"\n",null], null), null).call(null,right_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_right.call(null,cm);

var G__9086 = mark;
var G__9087 = paredit_cm.core.rinfo.call(null,cm);
var G__9088 = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9086;
R = G__9087;
right_char = G__9088;
continue;
} else {
if(((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156))) || (((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))) || (((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"word","word",-420123725))))))))){
return mark;
} else {
paredit_cm.core.move_right.call(null,cm);

var G__9089 = mark;
var G__9090 = paredit_cm.core.rinfo.call(null,cm);
var G__9091 = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9089;
R = G__9090;
right_char = G__9091;
continue;

}
}
}
}
}
break;
}
});
/**
 * move to the end of the word and return index's for a kill
 */
paredit_cm.core.move_to_end_of_word = (function paredit_cm$core$move_to_end_of_word(mark,cm){
if((!((mark == null)))){
var L = paredit_cm.core.rinfo.call(null,cm);
var right_char = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
while(true){
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-end","string-end",-1632897403))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);
} else {
if(((((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null," ",null,"\n",null], null), null).call(null,right_char))))){
paredit_cm.core.move_right.call(null,cm);

var G__9092 = paredit_cm.core.rinfo.call(null,cm);
var G__9093 = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
L = G__9092;
right_char = G__9093;
continue;
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);
} else {
paredit_cm.core.move_past_token.call(null,cm);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);

}
}
}
break;
}
} else {
return null;
}
});
/**
 * paredit forward-kill-word exposed for keymap.
 *   Kill a word forward, skipping over intervening delimiters.
 */
paredit_cm.core.forward_kill_word = (function paredit_cm$core$forward_kill_word(cm){
var mark = paredit_cm.core.move_to_start_of_word.call(null,cm);
var vec__9094 = paredit_cm.core.move_to_end_of_word.call(null,mark,cm);
var from = cljs.core.nth.call(null,vec__9094,(0),null);
var to = cljs.core.nth.call(null,vec__9094,(1),null);
if((((!((from == null)))) && ((!((to == null)))))){
return paredit_cm.core.kill_from_to.call(null,cm,from,to);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.forward_kill_word', paredit_cm.core.forward_kill_word);
paredit_cm.core.start_of_token_at = (function paredit_cm$core$start_of_token_at(cm,i){
var map__9097 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__9097__$1 = cljs.core.__destructure_map.call(null,map__9097);
var ch = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__9097__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return (i - (ch - start));
});
paredit_cm.core.backward_delete_initial_non_word = (function paredit_cm$core$backward_delete_initial_non_word(cm){
var L = paredit_cm.core.linfo.call(null,cm);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null).call(null,L))){
var l = paredit_cm.core.get_info.call(null,cm);
while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null).call(null,new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(l)))){
cm.replaceRange("",new cljs.core.Keyword(null,"left-cur","left-cur",2010287159).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"cur","cur",1153190599).cljs$core$IFn$_invoke$arity$1(l));

var G__9098 = paredit_cm.core.get_info.call(null,cm);
l = G__9098;
continue;
} else {
if(cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(l))){
paredit_cm.core.move_left.call(null,cm);

var G__9099 = paredit_cm.core.get_info.call(null,cm);
l = G__9099;
continue;
} else {
return new cljs.core.Keyword(null,"done","done",-889844188);

}
}
break;
}
} else {
return null;
}
});
paredit_cm.core.backward_skip_delimiters = (function paredit_cm$core$backward_skip_delimiters(cm){
var l = paredit_cm.core.get_info.call(null,cm);
while(true){
if(cljs.core.truth_((function (){var and__4251__auto__ = clojure.set.union.call(null,paredit_cm.core.openers,paredit_cm.core.closers,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\"",null,"\t",null,";",null," ",null,"\n",null], null), null)).call(null,new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(l));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),paredit_cm.core.linfo.call(null,cm));
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_left.call(null,cm);

var G__9100 = paredit_cm.core.get_info.call(null,cm);
l = G__9100;
continue;
} else {
return null;
}
break;
}
});
paredit_cm.core.backward_delete_word = (function paredit_cm$core$backward_delete_word(cm){
var l = paredit_cm.core.get_info.call(null,cm);
while(true){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"bof","bof",-1065437469).cljs$core$IFn$_invoke$arity$1(l))) && (((cljs.core.not.call(null,clojure.set.union.call(null,paredit_cm.core.openers,paredit_cm.core.closers,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\"",null,"\t",null,";",null," ",null,"\n",null], null), null)).call(null,new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(l)))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),paredit_cm.core.linfo.call(null,cm))))))){
cm.replaceRange("",new cljs.core.Keyword(null,"left-cur","left-cur",2010287159).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"cur","cur",1153190599).cljs$core$IFn$_invoke$arity$1(l));

var G__9101 = paredit_cm.core.get_info.call(null,cm);
l = G__9101;
continue;
} else {
return null;
}
break;
}
});
/**
 * paredit backward-kill-word exposed for keymap.
 *   Kill a word backward, skipping over any intervening delimiters.
 */
paredit_cm.core.backward_kill_word = (function paredit_cm$core$backward_kill_word(cm){
paredit_cm.core.backward_delete_initial_non_word.call(null,cm);

paredit_cm.core.backward_skip_delimiters.call(null,cm);

return paredit_cm.core.backward_delete_word.call(null,cm);
});
goog.exportSymbol('paredit_cm.core.backward_kill_word', paredit_cm.core.backward_kill_word);
if((typeof paredit_cm !== 'undefined') && (typeof paredit_cm.core !== 'undefined') && (typeof paredit_cm.core.forward_m !== 'undefined')){
} else {
paredit_cm.core.forward_m = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"paredit-cm.core","forward-m"),(function (cm){
return paredit_cm.core.rinfo.call(null,cm);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,paredit_cm.core.forward_m,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),(function (cm){
return paredit_cm.core.move_to_end_of_word.call(null,paredit_cm.core.move_to_start_of_word.call(null,cm),cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.forward_m,new cljs.core.Keyword(null,"string-end","string-end",-1632897403),(function (cm){
return paredit_cm.core.move_right.call(null,cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.forward_m,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cm){
if(paredit_cm.core.forward_sexp.call(null,cm)){
return null;
} else {
return paredit_cm.core.move_right.call(null,cm);
}
}));
/**
 * paredit forward exposed for keymap.
 *   Move forward an S-expression, or up an S-expression forward.
 *   If there are no more S-expressions in this one before the closing
 *   delimiter, move past that closing delimiter; otherwise, move forward
 *   past the S-expression following the point.
 */
paredit_cm.core.forward = (function paredit_cm$core$forward(cm){
return paredit_cm.core.forward_m.call(null,cm);
});
goog.exportSymbol('paredit_cm.core.forward', paredit_cm.core.forward);
paredit_cm.core.get_text_of_left_sexp = (function paredit_cm$core$get_text_of_left_sexp(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var moved_QMARK_ = paredit_cm.core.backward_sexp.call(null,cm);
var text = cm.getRange(paredit_cm.core.cursor.call(null,cm),original_cur);
cm.setCursor(original_cur);

return text;
});
goog.exportSymbol('paredit_cm.core.get_text_of_left_sexp', paredit_cm.core.get_text_of_left_sexp);
paredit_cm.core.need_padding_before_opener_QMARK_ = (function paredit_cm$core$need_padding_before_opener_QMARK_(l_info,cm){
var or__4253__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"closer","closer",10992481),null,new cljs.core.Keyword(null,"string-end","string-end",-1632897403),null,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),null], null), null).call(null,l_info);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),l_info)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,"#_",null], null), null).call(null,paredit_cm.core.get_text_of_left_sexp.call(null,cm)))));
}
});
/**
 * paredit-open-round exposed for keymap. unlike traditional emacs paredit, this
 *   supports brackets [] {} () but not double-quote
 */
paredit_cm.core.open_round = (function paredit_cm$core$open_round(var_args){
var G__9103 = arguments.length;
switch (G__9103) {
case 1:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.open_round', paredit_cm.core.open_round);

(paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.open_round.call(null,cm,"(");
}));

(paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,c){
var map__9104 = paredit_cm.core.get_info.call(null,cm);
var map__9104__$1 = cljs.core.__destructure_map.call(null,map__9104);
var type = cljs.core.get.call(null,map__9104__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9104__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__9104__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var vec__9105 = paredit_cm.core.info.call(null,cm);
var L = cljs.core.nth.call(null,vec__9105,(0),null);
var R = cljs.core.nth.call(null,vec__9105,(1),null);
if(((((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066))))) && (((cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066))) || (cljs.core._EQ_.call(null,R,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712))))))){
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);
} else {
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,c);
} else {
if(paredit_cm.core.comment_or_string_QMARK_.call(null,type)){
return paredit_cm.core.insert.call(null,cm,c);
} else {
var pad_L_QMARK_ = paredit_cm.core.need_padding_before_opener_QMARK_.call(null,L,cm);
var pad_R_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"word","word",-420123725),null,new cljs.core.Keyword(null,"opener","opener",1027381943),null], null), null).call(null,R);
return paredit_cm.core.insert.call(null,cm,[(cljs.core.truth_(pad_L_QMARK_)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.pair.call(null,c)),(cljs.core.truth_(pad_R_QMARK_)?" ":null)].join(''),(cljs.core.truth_(pad_R_QMARK_)?(-2):(-1)));

}
}
}
}));

(paredit_cm.core.open_round.cljs$lang$maxFixedArity = 2);

/**
 * open curly brace with matching close brace
 */
paredit_cm.core.open_brace = (function paredit_cm$core$open_brace(cm){
return paredit_cm.core.open_round.call(null,cm,"{");
});
goog.exportSymbol('paredit_cm.core.open_brace', paredit_cm.core.open_brace);
paredit_cm.core.open_square = (function paredit_cm$core$open_square(cm){
return paredit_cm.core.open_round.call(null,cm,"[");
});
goog.exportSymbol('paredit_cm.core.open_square', paredit_cm.core.open_square);
paredit_cm.core.close_square = (function paredit_cm$core$close_square(cm){
return paredit_cm.core.close_round.call(null,cm,"]");
});
goog.exportSymbol('paredit_cm.core.close_square', paredit_cm.core.close_square);
/**
 * move back to the end of the prev word and return the index
 *   that we should start deleting from for backward-kill-word,
 *   nil if no word to delete (and undo the move).
 */
paredit_cm.core.move_back_to_end_of_word = (function paredit_cm$core$move_back_to_end_of_word(cm){
var start_cur = paredit_cm.core.cursor.call(null,cm);
var mark = paredit_cm.core.index.call(null,cm);
var L = paredit_cm.core.linfo.call(null,cm);
var left_char = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
while(true){
if(cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"bof","bof",-1065437469))){
cm.setCursor(start_cur);

return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434));
if(and__4251__auto__){
return paredit_cm.core.delimiters.call(null,left_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_left.call(null,cm);

var G__9109 = paredit_cm.core.index.call(null,cm);
var G__9110 = paredit_cm.core.linfo.call(null,cm);
var G__9111 = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9109;
L = G__9110;
left_char = G__9111;
continue;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069));
if(and__4251__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\t",null," ",null], null), null).call(null,left_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_left.call(null,cm);

var G__9112 = mark;
var G__9113 = paredit_cm.core.linfo.call(null,cm);
var G__9114 = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9112;
L = G__9113;
left_char = G__9114;
continue;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434));
if(and__4251__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null," ",null,"\n",null], null), null).call(null,left_char);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_left.call(null,cm);

var G__9115 = mark;
var G__9116 = paredit_cm.core.linfo.call(null,cm);
var G__9117 = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9115;
L = G__9116;
left_char = G__9117;
continue;
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712))) || (((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))) || (((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"word","word",-420123725))))))))){
return mark;
} else {
paredit_cm.core.move_left.call(null,cm);

var G__9118 = mark;
var G__9119 = paredit_cm.core.linfo.call(null,cm);
var G__9120 = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
mark = G__9118;
L = G__9119;
left_char = G__9120;
continue;

}
}
}
}
}
break;
}
});
/**
 * move back to the start of the word and return index's for a kill
 */
paredit_cm.core.move_back_to_start_of_word = (function paredit_cm$core$move_back_to_start_of_word(mark,cm){
if((!((mark == null)))){
var L = paredit_cm.core.linfo.call(null,cm);
var left_char = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
while(true){
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-start","string-start",1585643309))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);
} else {
if(((((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\t",null," ",null,"\n",null], null), null).call(null,left_char))))){
paredit_cm.core.move_left.call(null,cm);

var G__9121 = paredit_cm.core.linfo.call(null,cm);
var G__9122 = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
L = G__9121;
left_char = G__9122;
continue;
} else {
if(((cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,L,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);
} else {
paredit_cm.core.move_before_token.call(null,cm);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mark,paredit_cm.core.index.call(null,cm)], null);

}
}
}
break;
}
} else {
return null;
}
});
if((typeof paredit_cm !== 'undefined') && (typeof paredit_cm.core !== 'undefined') && (typeof paredit_cm.core.backward_m !== 'undefined')){
} else {
paredit_cm.core.backward_m = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"paredit-cm.core","backward-m"),(function (cm){
return paredit_cm.core.linfo.call(null,cm);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,paredit_cm.core.backward_m,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),(function (cm){
return paredit_cm.core.move_back_to_start_of_word.call(null,paredit_cm.core.move_back_to_end_of_word.call(null,cm),cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.backward_m,new cljs.core.Keyword(null,"string-start","string-start",1585643309),(function (cm){
return paredit_cm.core.move_left.call(null,cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.backward_m,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cm){
if(paredit_cm.core.backward_sexp.call(null,cm)){
return null;
} else {
return paredit_cm.core.move_left.call(null,cm);
}
}));
/**
 * paredit backward exposed for keymap.
 *   Move backward an S-expression, or up an S-expression backward.
 *   If there are no more S-expressions in this one before the opening
 *   delimiter, move past that opening delimiter; otherwise, move backward
 *   past the S-expression following the point.
 */
paredit_cm.core.backward = (function paredit_cm$core$backward(cm){
return paredit_cm.core.backward_m.call(null,cm);
});
goog.exportSymbol('paredit_cm.core.backward', paredit_cm.core.backward);
/**
 * paredit backward-up exposed for keymap.
 *   Move backward up out of the enclosing list.
 *   If in a string initially, that counts as one level.
 *   return true if we moved.
 */
paredit_cm.core.backward_up = (function paredit_cm$core$backward_up(cm){
var original_i = paredit_cm.core.index.call(null,cm);
while(true){
if(paredit_cm.core.backward_sexp.call(null,cm)){
continue;
} else {
}
break;
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"opener","opener",1027381943),null], null), null).call(null,paredit_cm.core.linfo.call(null,cm)))){
paredit_cm.core.move_left.call(null,cm);
} else {
cm.setCursor(paredit_cm.core.cursor.call(null,cm,original_i));
}

return cljs.core.not_EQ_.call(null,original_i,paredit_cm.core.index.call(null,cm));
});
goog.exportSymbol('paredit_cm.core.backward_up', paredit_cm.core.backward_up);
/**
 * get the top most opening bracket's cursor for the specified location. nil if
 *   there is no such bracket.
 */
paredit_cm.core.top_most_opener = (function paredit_cm$core$top_most_opener(cm){
var candidate = null;
while(true){
if(paredit_cm.core.backward_up.call(null,cm)){
var G__9123 = paredit_cm.core.cursor.call(null,cm);
candidate = G__9123;
continue;
} else {
return candidate;
}
break;
}
});
paredit_cm.core.outermost_cursors = (function paredit_cm$core$outermost_cursors(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var open = paredit_cm.core.top_most_opener.call(null,cm);
var close = (cljs.core.truth_(open)?(function (){
paredit_cm.core.forward_sexp.call(null,cm);

return paredit_cm.core.cursor.call(null,cm);
})()
:null);
cm.setCursor(cur);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,close], null);
});
/**
 * paredit reindent-defun exposed for keymap.
 */
paredit_cm.core.reindent_defun = (function paredit_cm$core$reindent_defun(cm){
var vec__9124 = paredit_cm.core.outermost_cursors.call(null,cm);
var open = cljs.core.nth.call(null,vec__9124,(0),null);
var close = cljs.core.nth.call(null,vec__9124,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = open;
if(cljs.core.truth_(and__4251__auto__)){
return close;
} else {
return and__4251__auto__;
}
})())){
return paredit_cm.core.indent_lines.call(null,cm,open.line,close.line);
} else {
var l = paredit_cm.core.cursor.call(null,cm).line;
return paredit_cm.core.indent_lines.call(null,cm,l,l);
}
});
goog.exportSymbol('paredit_cm.core.reindent_defun', paredit_cm.core.reindent_defun);
/**
 * paredit forward-up exposed for keymap.
 *   return true if we moved.
 */
paredit_cm.core.forward_up = (function paredit_cm$core$forward_up(cm){
if(paredit_cm.core.backward_up.call(null,cm)){
return paredit_cm.core.forward_sexp.call(null,cm);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.forward_up', paredit_cm.core.forward_up);
/**
 * moves cursor to just outside the closing bracket, or if there is
 *   none then doesn't move at all.
 */
paredit_cm.core.move_past_parent_closer = (function paredit_cm$core$move_past_parent_closer(cm){
if(cljs.core.truth_(paredit_cm.core.forward_up.call(null,cm))){
var cur = paredit_cm.core.cursor.call(null,cm);
paredit_cm.core.delete_whitespace.call(null,cm,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm)));

return cur;
} else {
return null;
}
});
/**
 * paredit-close-round exposed for keymap. skips to end of current
 *   list even if it ends with ] or }. but if you're in a string or
 *   comment then this just inserts the bracket. requires CodeMirror
 *   mode's parser uses state with indentStack because that's how we
 *   can tell we've reached the end of a top level form and avoid
 *   entering the next top level form. 's' is the character as a string.
 */
paredit_cm.core.close_round = (function paredit_cm$core$close_round(var_args){
var G__9128 = arguments.length;
switch (G__9128) {
case 1:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round', paredit_cm.core.close_round);

(paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round.call(null,cm,")");
}));

(paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
var map__9129 = paredit_cm.core.get_info.call(null,cm);
var map__9129__$1 = cljs.core.__destructure_map.call(null,map__9129);
var type = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,s);
} else {
if(paredit_cm.core.comment_or_string_QMARK_.call(null,type)){
return paredit_cm.core.insert.call(null,cm,s);
} else {
return paredit_cm.core.move_past_parent_closer.call(null,cm);

}
}
}));

(paredit_cm.core.close_round.cljs$lang$maxFixedArity = 2);

if((typeof paredit_cm !== 'undefined') && (typeof paredit_cm.core !== 'undefined') && (typeof paredit_cm.core.move_to_start !== 'undefined')){
} else {
/**
 * move to the start for wrap-round
 */
paredit_cm.core.move_to_start = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"paredit-cm.core","move-to-start"),(function (cm){
var vec__9131 = paredit_cm.core.info.call(null,cm);
var L = cljs.core.nth.call(null,vec__9131,(0),null);
var R = cljs.core.nth.call(null,vec__9131,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,L);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-end","string-end",-1632897403),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,R);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"in-string","in-string",-886185837);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066),null], null), null).call(null,L);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-2-end","string-2-end",-1678388712),null,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066),null], null), null).call(null,R);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"in-string-2","in-string-2",1024703868);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),L)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),R)))){
return new cljs.core.Keyword(null,"in-word","in-word",-779062011);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"comment","comment",532206069),R)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),R)))){
return new cljs.core.Keyword(null,"start-is-to-right","start-is-to-right",-122864998);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"closer","closer",10992481),R)){
return new cljs.core.Keyword(null,"want-parent","want-parent",-1968057787);
} else {
return null;
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"want-parent","want-parent",-1968057787),(function (cm){
return paredit_cm.core.backward_up.call(null,cm);
}));
paredit_cm.core.move_to_start_of_string = (function paredit_cm$core$move_to_start_of_string(cm){
while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,paredit_cm.core.linfo.call(null,cm)))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
return null;
}
break;
}
});
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"in-string","in-string",-886185837),(function (cm){
return paredit_cm.core.move_to_start_of_string.call(null,cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"in-string-2","in-string-2",1024703868),(function (cm){
while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066),null], null), null).call(null,paredit_cm.core.linfo.call(null,cm)))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
}
break;
}

return paredit_cm.core.move_to_start_of_string.call(null,cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"in-word","in-word",-779062011),(function (cm){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),paredit_cm.core.linfo.call(null,cm))){
paredit_cm.core.move_left.call(null,cm);

continue;
} else {
return null;
}
break;
}
}));
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"start-is-to-right","start-is-to-right",-122864998),(function (cm){
var R = paredit_cm.core.rinfo.call(null,cm);
while(true){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"eof","eof",-489063237),R);
if(and__4251__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),null,new cljs.core.Keyword(null,"comment","comment",532206069),null], null), null).call(null,R);
} else {
return and__4251__auto__;
}
})())){
paredit_cm.core.move_right.call(null,cm);

var G__9134 = paredit_cm.core.rinfo.call(null,cm);
R = G__9134;
continue;
} else {
return null;
}
break;
}
}));
cljs.core._add_method.call(null,paredit_cm.core.move_to_start,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cm){
return new cljs.core.Keyword(null,"no-op","no-op",-93046065);
}));
/**
 * paredit wrap-round exposed for keymap. if in a word or string, get out of it
 *   first and then wrap the whole thing
 */
paredit_cm.core.wrap_round = (function paredit_cm$core$wrap_round(cm){
var cur_orig = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.move_to_start.call(null,cm);
var cur_open = paredit_cm.core.cursor.call(null,cm);
var i_start = paredit_cm.core.index.call(null,cm);
var ___$1 = paredit_cm.core.forward_sexp.call(null,cm);
var cur_close = paredit_cm.core.cursor.call(null,cm);
var i_end = paredit_cm.core.index.call(null,cm);
if(cljs.core._EQ_.call(null,i_start,i_end)){
return cm.setCursor(cur_orig);
} else {
var text = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm.getRange(cur_open,cur_close)),")"].join('');
cm.replaceRange(text,cur_open,cur_close);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i_start + (1))));
}
});
goog.exportSymbol('paredit_cm.core.wrap_round', paredit_cm.core.wrap_round);
/**
 * paredit splice-sexp exposed for keymap. Splice the list that the point is on
 *   by removing its delimiters. unlike emacs' version, this does not splice a
 *   string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp = (function paredit_cm$core$splice_sexp(cm){
var i0 = paredit_cm.core.index.call(null,cm);
var _ = paredit_cm.core.backward_up.call(null,cm);
var ___$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string-start","string-start",1585643309),paredit_cm.core.rinfo.call(null,cm)))?paredit_cm.core.backward_up.call(null,cm):null);
var i1 = paredit_cm.core.index.call(null,cm);
var cur_L = paredit_cm.core.cursor.call(null,cm);
var iL = (i1 + (1));
var ___$2 = paredit_cm.core.forward_sexp.call(null,cm);
var i2 = paredit_cm.core.index.call(null,cm);
var cur_R = paredit_cm.core.cursor.call(null,cm);
var iR = (i2 - (1));
if(((cljs.core._EQ_.call(null,i0,i1)) || (cljs.core._EQ_.call(null,i1,i2)))){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i0));
} else {
cm.replaceRange(cm.getRange(paredit_cm.core.cursor.call(null,cm,iL),paredit_cm.core.cursor.call(null,cm,iR)),cur_L,cur_R);

cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i0 - (1))));

return paredit_cm.core.indent_lines.call(null,cm,cur_L.line,cur_R.line);
}
});
goog.exportSymbol('paredit_cm.core.splice_sexp', paredit_cm.core.splice_sexp);
/**
 * paredit splice-sexp-killing-backward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlike
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_backward = (function paredit_cm$core$splice_sexp_killing_backward(cm){
var i0 = paredit_cm.core.index.call(null,cm);
var _ = paredit_cm.core.backward_up.call(null,cm);
var i00 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string-start","string-start",1585643309),paredit_cm.core.rinfo.call(null,cm)))?(function (){var i = paredit_cm.core.index.call(null,cm);
paredit_cm.core.backward_up.call(null,cm);

return i;
})():null);
var i1 = paredit_cm.core.index.call(null,cm);
var cur_L = paredit_cm.core.cursor.call(null,cm);
var iL = (function (){var or__4253__auto__ = i00;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return i0;
}
})();
var ___$1 = paredit_cm.core.forward_sexp.call(null,cm);
var i2 = paredit_cm.core.index.call(null,cm);
var cur_R = paredit_cm.core.cursor.call(null,cm);
var iR = (i2 - (1));
if(((cljs.core._EQ_.call(null,i0,i1)) || (cljs.core._EQ_.call(null,i1,i2)))){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i0));
} else {
cm.replaceRange(cm.getRange(paredit_cm.core.cursor.call(null,cm,iL),paredit_cm.core.cursor.call(null,cm,iR)),cur_L,cur_R);

cm.setCursor(paredit_cm.core.cursor.call(null,cm,i1));

paredit_cm.core.reindent_defun.call(null,cm);

return paredit_cm.core.indent_lines.call(null,cm,cur_L.line,cur_R.line);
}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_backward', paredit_cm.core.splice_sexp_killing_backward);
/**
 * paredit splice-sexp-killing-forward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlink
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_forward = (function paredit_cm$core$splice_sexp_killing_forward(cm){
var i0 = paredit_cm.core.index.call(null,cm);
var _ = paredit_cm.core.forward_up.call(null,cm);
var i00 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"string-end","string-end",-1632897403),paredit_cm.core.linfo.call(null,cm)))?(function (){var i = paredit_cm.core.index.call(null,cm);
paredit_cm.core.forward_up.call(null,cm);

return i;
})():null);
var i2 = paredit_cm.core.index.call(null,cm);
var cur_R = paredit_cm.core.cursor.call(null,cm);
var iR = (function (){var or__4253__auto__ = i00;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return i0;
}
})();
var ___$1 = paredit_cm.core.backward_sexp.call(null,cm);
var i1 = paredit_cm.core.index.call(null,cm);
var cur_L = paredit_cm.core.cursor.call(null,cm);
var iL = (i1 + (1));
if(((cljs.core._EQ_.call(null,i0,i2)) || (cljs.core._EQ_.call(null,i1,i2)))){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i0));
} else {
cm.replaceRange(cm.getRange(paredit_cm.core.cursor.call(null,cm,iL),paredit_cm.core.cursor.call(null,cm,iR)),cur_L,cur_R);

cm.setCursor(paredit_cm.core.cursor.call(null,cm,(iR - (1))));

return paredit_cm.core.indent_lines.call(null,cm,cur_L.line,cur_R.line);
}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_forward', paredit_cm.core.splice_sexp_killing_forward);
/**
 * make initial move for editing sexps and return true if moved.
 *   we don't want to start editing sexps from within a string or string-2 or word
 */
paredit_cm.core.move_for_sexp_editing = (function paredit_cm$core$move_for_sexp_editing(cm){
var vec__9135 = paredit_cm.core.info.call(null,cm);
var L = cljs.core.nth.call(null,vec__9135,(0),null);
var R = cljs.core.nth.call(null,vec__9135,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,L))){
return paredit_cm.core.backward_up.call(null,cm);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-2-start","string-2-start",1170205156),null,new cljs.core.Keyword(null,"string-2-guts","string-2-guts",1395923066),null], null), null).call(null,L))){
return paredit_cm.core.backward.call(null,cm);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),L)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"word","word",-420123725),R)))){
return paredit_cm.core.backward.call(null,cm);
} else {
return null;
}
}
}
});
/**
 * paredit raise-sexp exposed for keymap.
 */
paredit_cm.core.raise_sexp = (function paredit_cm$core$raise_sexp(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.move_for_sexp_editing.call(null,cm);
var sexp_start_cur = paredit_cm.core.cursor.call(null,cm);
var sexp_to_raise_QMARK_ = paredit_cm.core.forward_sexp.call(null,cm);
var sexp_end_cur = paredit_cm.core.cursor.call(null,cm);
var inside_sexp_QMARK_ = paredit_cm.core.backward_up.call(null,cm);
var parent_start_cur = paredit_cm.core.cursor.call(null,cm);
var parent_to_kill_QMARK_ = paredit_cm.core.forward_sexp.call(null,cm);
var parent_end_cur = paredit_cm.core.cursor.call(null,cm);
if((((!(sexp_to_raise_QMARK_))) || ((!(parent_to_kill_QMARK_))))){
return cm.setCursor(original_cur);
} else {
cm.replaceRange(cm.getRange(sexp_start_cur,sexp_end_cur),parent_start_cur,parent_end_cur);

paredit_cm.core.backward_sexp.call(null,cm);

var start_line = parent_start_cur.line;
var end_line = (start_line + (sexp_end_cur.line - sexp_start_cur.line));
return paredit_cm.core.indent_lines.call(null,cm,start_line,end_line);
}
});
goog.exportSymbol('paredit_cm.core.raise_sexp', paredit_cm.core.raise_sexp);
paredit_cm.core.trim_beginning = (function paredit_cm$core$trim_beginning(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
if((!(paredit_cm.core.backward_up.call(null,cm)))){
return cm.setCursor(original_cur);
} else {
paredit_cm.core.move_right.call(null,cm);

var a = paredit_cm.core.cursor.call(null,cm);
var _ = (function (){var r = paredit_cm.core.rinfo.call(null,cm);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),r)){
paredit_cm.core.move_right.call(null,cm);

var G__9138 = paredit_cm.core.rinfo.call(null,cm);
r = G__9138;
continue;
} else {
return null;
}
break;
}
})();
var b = paredit_cm.core.cursor.call(null,cm);
cm.setCursor(original_cur);

return cm.replaceRange("",a,b);
}
});
goog.exportSymbol('paredit_cm.core.trim_beginning', paredit_cm.core.trim_beginning);
paredit_cm.core.trim_ending = (function paredit_cm$core$trim_ending(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.not.call(null,paredit_cm.core.forward_up.call(null,cm))){
return cm.setCursor(original_cur);
} else {
paredit_cm.core.move_left.call(null,cm);

var a = paredit_cm.core.cursor.call(null,cm);
var _ = (function (){var l = paredit_cm.core.linfo.call(null,cm);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),l)){
paredit_cm.core.move_left.call(null,cm);

var G__9139 = paredit_cm.core.linfo.call(null,cm);
l = G__9139;
continue;
} else {
return null;
}
break;
}
})();
var b = paredit_cm.core.cursor.call(null,cm);
cm.setCursor(original_cur);

return cm.replaceRange("",b,a);
}
});
goog.exportSymbol('paredit_cm.core.trim_ending', paredit_cm.core.trim_ending);
paredit_cm.core.trim_sexp = (function paredit_cm$core$trim_sexp(cm){
paredit_cm.core.trim_beginning.call(null,cm);

return paredit_cm.core.trim_ending.call(null,cm);
});
goog.exportSymbol('paredit_cm.core.trim_sexp', paredit_cm.core.trim_sexp);
/**
 * returns details for a forward slurp or nil if not possible
 */
paredit_cm.core.fwd_slurp_helper = (function paredit_cm$core$fwd_slurp_helper(cm){
var in_sexp_QMARK_ = paredit_cm.core.forward_up.call(null,cm);
var outside_cur = paredit_cm.core.cursor.call(null,cm);
var closer = new cljs.core.Keyword(null,"left-char","left-char",509989355).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
var inside_cur = paredit_cm.core.move_left.call(null,cm);
var _ = paredit_cm.core.move_right.call(null,cm);
var slurpable_QMARK_ = paredit_cm.core.forward_sexp.call(null,cm);
var dest_cur = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_((function (){var and__4251__auto__ = in_sexp_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return slurpable_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inside_cur,outside_cur,dest_cur,closer], null);
} else {
if(cljs.core.truth_(in_sexp_QMARK_)){
return paredit_cm.core.fwd_slurp_helper.call(null,cm);
} else {
return null;

}
}
});
/**
 * paredit forward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.forward_slurp_sexp = (function paredit_cm$core$forward_slurp_sexp(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.move_for_sexp_editing.call(null,cm);
var vec__9140 = paredit_cm.core.fwd_slurp_helper.call(null,cm);
var inside_cur = cljs.core.nth.call(null,vec__9140,(0),null);
var outside_cur = cljs.core.nth.call(null,vec__9140,(1),null);
var dest_cur = cljs.core.nth.call(null,vec__9140,(2),null);
var closer = cljs.core.nth.call(null,vec__9140,(3),null);
if(cljs.core.truth_(inside_cur)){
paredit_cm.core.insert.call(null,cm,closer,(0),dest_cur);

cm.replaceRange("",inside_cur,outside_cur);
} else {
}

cm.setCursor(original_cur);

if(cljs.core.truth_(inside_cur)){
paredit_cm.core.trim_sexp.call(null,cm);

return paredit_cm.core.reindent_defun.call(null,cm);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.forward_slurp_sexp', paredit_cm.core.forward_slurp_sexp);
/**
 * trampoline-able that looks for the cursor where we'd be if we went forward
 *   and then down into the next sibling that is available. nil if there is no
 *   sibling to enter.
 */
paredit_cm.core.fwd_down = (function paredit_cm$core$fwd_down(cm,i,n){
var cur = paredit_cm.core.cursor.call(null,cm,i);
if((n <= (0))){
return null;
} else {
if((cur == null)){
return null;
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur))){
return cur;
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return null;
} else {
return (function (){
return paredit_cm.core.fwd_down.call(null,cm,(i + (1)),(n - (1)));
});

}
}
}
}
});
paredit_cm.core.forward_down_cur = (function paredit_cm$core$forward_down_cur(var_args){
var G__9144 = arguments.length;
switch (G__9144) {
case 1:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.call(null,cm,cur);
return cljs.core.trampoline.call(null,paredit_cm.core.fwd_down,cm,(i + (1)),(paredit_cm.core.char_count.call(null,cm) - i));
}));

(paredit_cm.core.forward_down_cur.cljs$lang$maxFixedArity = 2);

paredit_cm.core.forward_down = (function paredit_cm$core$forward_down(var_args){
var G__9147 = arguments.length;
switch (G__9147) {
case 1:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_down', paredit_cm.core.forward_down);

(paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5720__auto__ = paredit_cm.core.forward_down_cur.call(null,cm,cur);
if(cljs.core.truth_(temp__5720__auto__)){
var cur_SINGLEQUOTE_ = temp__5720__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.forward_down.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for the cursor where we'd be if we went backward
 *   and then down into the prev sibling that is available. nil if there is no
 *   sibling to enter.
 */
paredit_cm.core.bkwd_down = (function paredit_cm$core$bkwd_down(cm,cur,n){
var map__9149 = paredit_cm.core.get_info.call(null,cm,cur);
var map__9149__$1 = cljs.core.__destructure_map.call(null,map__9149);
var left_cur = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var i = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var start = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var ch = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var bof = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"bof","bof",-1065437469));
if((n <= (0))){
return paredit_cm.core.guard.call(null);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return left_cur;
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur))){
return null;
} else {
if(cljs.core.truth_(bof)){
return null;
} else {
return (function (){
return paredit_cm.core.bkwd_down.call(null,cm,paredit_cm.core.cursor.call(null,cm,(i - (1))),(n - (1)));
});

}
}
}
}
});
paredit_cm.core.backward_down = (function paredit_cm$core$backward_down(var_args){
var G__9151 = arguments.length;
switch (G__9151) {
case 1:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_down', paredit_cm.core.backward_down);

(paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_down.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.call(null,cm,cur);
var temp__5720__auto__ = cljs.core.trampoline.call(null,paredit_cm.core.bkwd_down,cm,cur,i);
if(cljs.core.truth_(temp__5720__auto__)){
var cur_SINGLEQUOTE_ = temp__5720__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.backward_down.cljs$lang$maxFixedArity = 2);

/**
 * returns details for a backward slurp or nil if not possible
 */
paredit_cm.core.bkwd_slurp_helper = (function paredit_cm$core$bkwd_slurp_helper(cm){
var in_sexp_QMARK_ = paredit_cm.core.backward_up.call(null,cm);
var outside_cur = paredit_cm.core.cursor.call(null,cm);
var opener = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
var inside_cur = paredit_cm.core.move_right.call(null,cm);
var _ = paredit_cm.core.move_left.call(null,cm);
var slurpable_QMARK_ = paredit_cm.core.backward_sexp.call(null,cm);
var dest_cur = paredit_cm.core.cursor.call(null,cm);
if(((in_sexp_QMARK_) && (slurpable_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [inside_cur,outside_cur,dest_cur,opener], null);
} else {
if(in_sexp_QMARK_){
return paredit_cm.core.bkwd_slurp_helper.call(null,cm);
} else {
return null;

}
}
});
/**
 * paredit backward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.backward_slurp_sexp = (function paredit_cm$core$backward_slurp_sexp(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.move_for_sexp_editing.call(null,cm);
var vec__9153 = paredit_cm.core.bkwd_slurp_helper.call(null,cm);
var inside_cur = cljs.core.nth.call(null,vec__9153,(0),null);
var outside_cur = cljs.core.nth.call(null,vec__9153,(1),null);
var dest_cur = cljs.core.nth.call(null,vec__9153,(2),null);
var opener = cljs.core.nth.call(null,vec__9153,(3),null);
var move_left_QMARK_ = (function (){var and__4251__auto__ = inside_cur;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.call(null,dest_cur.line,outside_cur.line);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(inside_cur)){
cm.replaceRange("",inside_cur,outside_cur);

paredit_cm.core.insert.call(null,cm,opener,(0),dest_cur);
} else {
}

cm.setCursor(original_cur);

if(cljs.core.truth_(inside_cur)){
paredit_cm.core.trim_sexp.call(null,cm);

paredit_cm.core.reindent_defun.call(null,cm);
} else {
}

if(cljs.core.truth_(move_left_QMARK_)){
return paredit_cm.core.move_left.call(null,cm);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.backward_slurp_sexp', paredit_cm.core.backward_slurp_sexp);
/**
 * paredit forward-barf-sexp exposed for keymap.
 */
paredit_cm.core.forward_barf_sexp = (function paredit_cm$core$forward_barf_sexp(cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var original_i = paredit_cm.core.index.call(null,cm);
var _ = paredit_cm.core.move_for_sexp_editing.call(null,cm);
var vec__9156 = paredit_cm.core.outermost_cursors.call(null,cm);
var oc = cljs.core.nth.call(null,vec__9156,(0),null);
var cc = cljs.core.nth.call(null,vec__9156,(1),null);
var inside_a_sexp_QMARK_ = paredit_cm.core.backward_up.call(null,cm);
var ___$1 = paredit_cm.core.forward_sexp.call(null,cm);
var map__9159 = paredit_cm.core.get_info.call(null,cm);
var map__9159__$1 = cljs.core.__destructure_map.call(null,map__9159);
var left_char = cljs.core.get.call(null,map__9159__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var outside_cur = paredit_cm.core.cursor.call(null,cm);
var inside_cur = paredit_cm.core.move_left.call(null,cm);
var sexp_to_barf_QMARK_ = paredit_cm.core.backward_sexp.call(null,cm);
var on_barfed_QMARK_ = (paredit_cm.core.index.call(null,cm) < original_i);
var dest_if_alone = paredit_cm.core.cursor.call(null,cm);
var sibling_QMARK_ = paredit_cm.core.backward_sexp.call(null,cm);
var ___$2 = paredit_cm.core.forward_sexp.call(null,cm);
var dest_if_sibling = paredit_cm.core.cursor.call(null,cm);
var destination_cur = ((sibling_QMARK_)?dest_if_sibling:dest_if_alone);
var ___$3 = paredit_cm.core.forward_up.call(null,cm);
var end_cur = paredit_cm.core.cursor.call(null,cm);
var edit_QMARK_ = ((inside_a_sexp_QMARK_) && (sexp_to_barf_QMARK_));
if((!(edit_QMARK_))){
return cm.setCursor(original_cur);
} else {
cm.replaceRange("",inside_cur,outside_cur);

paredit_cm.core.insert.call(null,cm,((sibling_QMARK_)?left_char:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_char)," "].join('')),(0),destination_cur);

if(on_barfed_QMARK_){
cm.setCursor(destination_cur);
} else {
cm.setCursor(original_cur);
}

paredit_cm.core.trim_sexp.call(null,cm);

if(cljs.core.truth_((function (){var and__4251__auto__ = oc;
if(cljs.core.truth_(and__4251__auto__)){
return cc;
} else {
return and__4251__auto__;
}
})())){
return paredit_cm.core.indent_lines.call(null,cm,oc.line,cc.line);
} else {
return null;
}
}
});
goog.exportSymbol('paredit_cm.core.forward_barf_sexp', paredit_cm.core.forward_barf_sexp);
/**
 * paredit backward-barf-sexp exposed for keymap.
 */
paredit_cm.core.backward_barf_sexp = (function paredit_cm$core$backward_barf_sexp(cm){
paredit_cm.core.trim_sexp.call(null,cm);

var original_cur = paredit_cm.core.cursor.call(null,cm);
var original_i = paredit_cm.core.index.call(null,cm);
var _ = paredit_cm.core.move_for_sexp_editing.call(null,cm);
var inside_a_sexp_QMARK_ = paredit_cm.core.backward_up.call(null,cm);
var map__9160 = paredit_cm.core.get_info.call(null,cm);
var map__9160__$1 = cljs.core.__destructure_map.call(null,map__9160);
var right_char = cljs.core.get.call(null,map__9160__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var outside_cur = paredit_cm.core.cursor.call(null,cm);
var inside_cur = paredit_cm.core.move_right.call(null,cm);
var sexp_to_barf_QMARK_ = paredit_cm.core.forward_sexp.call(null,cm);
var on_barfed_QMARK_ = (original_i < paredit_cm.core.index.call(null,cm));
var dest_if_alone = paredit_cm.core.cursor.call(null,cm);
var sibling_QMARK_ = paredit_cm.core.forward_sexp.call(null,cm);
var ___$1 = paredit_cm.core.backward_sexp.call(null,cm);
var dest_if_sibling = paredit_cm.core.cursor.call(null,cm);
var destination_cur = ((sibling_QMARK_)?dest_if_sibling:dest_if_alone);
var ___$2 = paredit_cm.core.forward_up.call(null,cm);
var end_cur = paredit_cm.core.cursor.call(null,cm);
var edit_QMARK_ = ((inside_a_sexp_QMARK_) && (sexp_to_barf_QMARK_));
cm.setCursor(original_cur);

if(edit_QMARK_){
cm.replaceRange(((sibling_QMARK_)?right_char:[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_char)].join('')),destination_cur);

cm.replaceRange("",outside_cur,inside_cur);
} else {
}

if(((edit_QMARK_) && (((on_barfed_QMARK_) && ((!(sibling_QMARK_))))))){
cm.setCursor(destination_cur);

return paredit_cm.core.move_right.call(null,cm);
} else {
return null;
}
});
goog.exportSymbol('paredit_cm.core.backward_barf_sexp', paredit_cm.core.backward_barf_sexp);
/**
 * Keep moving in direction `dir` :L for left, :R for right
 *   until the next position has info not= `x`.
 *   Return nil if we reach the end of the document, otherwise
 *   return the cursor.
 */
paredit_cm.core.cur_next_non = (function paredit_cm$core$cur_next_non(cm,dir,x){
var start_cur = paredit_cm.core.cursor.call(null,cm);
var info_fn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"L","L",-1038307519),dir))?paredit_cm.core.linfo:paredit_cm.core.rinfo);
var move_fn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"L","L",-1038307519),dir))?paredit_cm.core.move_left:paredit_cm.core.move_right);
var y = info_fn.call(null,cm);
var remaining = paredit_cm.core.char_count.call(null,cm);
while(true){
if((remaining < (0))){
cm.setCursor(start_cur);

return null;
} else {
if(cljs.core._EQ_.call(null,x,y)){
move_fn.call(null,cm);

var G__9161 = info_fn.call(null,cm);
var G__9162 = (remaining - (1));
y = G__9161;
remaining = G__9162;
continue;
} else {
var cur = paredit_cm.core.cursor.call(null,cm);
cm.setCursor(start_cur);

return cur;

}
}
break;
}
});
if((typeof paredit_cm !== 'undefined') && (typeof paredit_cm.core !== 'undefined') && (typeof paredit_cm.core.split_sexp_m !== 'undefined')){
} else {
paredit_cm.core.split_sexp_m = (function (){var method_table__4747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"paredit-cm.core","split-sexp-m"),(function (cm){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string-start","string-start",1585643309),null,new cljs.core.Keyword(null,"string-guts","string-guts",1036628434),null], null), null).call(null,paredit_cm.core.linfo.call(null,cm)))){
return new cljs.core.Keyword(null,"split-string","split-string",-1174952343);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
cljs.core._add_method.call(null,paredit_cm.core.split_sexp_m,new cljs.core.Keyword(null,"split-string","split-string",-1174952343),(function (cm){
paredit_cm.core.insert.call(null,cm,"\" \"");

paredit_cm.core.move_left.call(null,cm);

return paredit_cm.core.move_left.call(null,cm);
}));
cljs.core._add_method.call(null,paredit_cm.core.split_sexp_m,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cm){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var inside_a_sexp_QMARK_ = paredit_cm.core.backward_up.call(null,cm);
var cur_start = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.forward_sexp.call(null,cm);
var cur_end = paredit_cm.core.cursor.call(null,cm);
var ___$1 = paredit_cm.core.backward_sexp.call(null,cm);
var opening_bracket = new cljs.core.Keyword(null,"right-char","right-char",-1500850071).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm));
var closing_bracket = cljs.core.get.call(null,paredit_cm.core.pair,opening_bracket);
var ___$2 = cm.setCursor(original_cur);
var dest_L_cur = paredit_cm.core.cur_next_non.call(null,cm,new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
var dest_L_info = paredit_cm.core.get_info.call(null,cm,dest_L_cur);
var dest_L_cur_b = new cljs.core.Keyword(null,"right-cur","right-cur",1689901919).cljs$core$IFn$_invoke$arity$1(dest_L_info);
var dest_L_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(dest_L_info);
var dest_L_i = paredit_cm.core.index.call(null,cm,dest_L_cur);
var dest_R_cur = paredit_cm.core.cur_next_non.call(null,cm,new cljs.core.Keyword(null,"R","R",-936662523),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
var dest_R_info = paredit_cm.core.get_info.call(null,cm,dest_R_cur);
var dest_R_cur_a = new cljs.core.Keyword(null,"left-cur","left-cur",2010287159).cljs$core$IFn$_invoke$arity$1(dest_R_info);
var dest_R_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(dest_R_info);
var dest_R_i = paredit_cm.core.index.call(null,cm,dest_R_cur);
cm.setCursor(original_cur);

if(inside_a_sexp_QMARK_){
cm.setCursor(dest_R_cur);

if(((1) >= (dest_R_i - dest_L_i))){
paredit_cm.core.insert.call(null,cm," ");

paredit_cm.core.insert.call(null,cm,opening_bracket);
} else {
if(cljs.core._EQ_.call(null,dest_R_line,dest_L_line)){
cm.replaceRange(opening_bracket,dest_R_cur_a,dest_R_cur);
} else {
paredit_cm.core.insert.call(null,cm,opening_bracket);
}
}

cm.setCursor(dest_L_cur);

if(cljs.core._EQ_.call(null,dest_L_i,dest_R_i)){
paredit_cm.core.insert.call(null,cm,closing_bracket);
} else {
if(cljs.core._EQ_.call(null,dest_R_line,dest_L_line)){
cm.replaceRange(closing_bracket,dest_L_cur,dest_L_cur_b);
} else {
paredit_cm.core.insert.call(null,cm,closing_bracket);

paredit_cm.core.move_right.call(null,cm);
}
}

return paredit_cm.core.indent_lines.call(null,cm,cur_start.line,cur_end.line);
} else {
return null;
}
}));
/**
 * paredit split-sexp exposed for keymap.
 */
paredit_cm.core.split_sexp = (function paredit_cm$core$split_sexp(cm){
return paredit_cm.core.split_sexp_m.call(null,cm);
});
goog.exportSymbol('paredit_cm.core.split_sexp', paredit_cm.core.split_sexp);
/**
 * paredit join-sexps exposed for keymap.
 */
paredit_cm.core.join_sexps = (function paredit_cm$core$join_sexps(var_args){
var G__9164 = arguments.length;
switch (G__9164) {
case 1:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.join_sexps', paredit_cm.core.join_sexps);

(paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.join_sexps.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var left_sib = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur);
var close = paredit_cm.core.end_of_next_sibling.call(null,cm,left_sib);
var right_sib = paredit_cm.core.end_of_next_sibling.call(null,cm,cur);
var open = paredit_cm.core.start_of_prev_sibling.call(null,cm,right_sib);
var open_right = (cljs.core.truth_(open)?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,open) + (1))):null);
var close_char = paredit_cm.core.get_string.call(null,cm,close);
var open_char = paredit_cm.core.get_string.call(null,cm,open_right);
if((((!((open == null)))) && ((((!((close == null)))) && (paredit_cm.core.pair_QMARK_.call(null,open_char,close_char)))))){
cm.setCursor(open);

paredit_cm.core.delete$.call(null,cm);

cm.setCursor(close);

paredit_cm.core.backspace.call(null,cm);

return cm.setCursor(((cljs.core._EQ_.call(null,open.line,close.line))?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur) - (1))):cur));
} else {
return cm.setCursor(cur);
}
}));

(paredit_cm.core.join_sexps.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map
