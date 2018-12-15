
var MOUSEX = 0;
var MOUSEY = 0;

var KEYCODE='';
var KEYCHAR='';

var CTRL =false;
var SHIFT=false;

var NOWM;

var MST;

var MDOWN=false;

//ﾒｯｾｰｼﾞを流す処理-------------------------------

function msgscroll(MESSAGE) {

//前のﾀｲﾏｰを止める
clearInterval(MST);

//ｽﾃｰﾀｽﾊﾞｰを空にする
status='';

//引数が空の場合、処理を停止する
if (!MESSAGE) return false;

//変数に引数をｾｯﾄする
MSG = MESSAGE;

//ﾀｲﾏｰで 0.2秒ごとに処理を実行する
MST = setInterval('status=MSG; MSG=MSG.substring(1,MSG.length)+MSG.substring(0,1)',200);

return true;

}
//ﾚｲﾔ表示/非表示-----------------------------------

function visibility(NAME,FLAG) {

if (FLAG) document.getElementById(NAME).style.visibility = 'visible';
else document.getElementById(NAME).style.visibility = 'hidden';
}
//ﾚｲﾔの位置指定------------------------------------

function setxy(NAME,X,Y) {

document.getElementById(NAME).style.left= X+'px';
document.getElementById(NAME).style.top = Y+'px';
}
//ﾚｲﾔの座標取得------------------------------------

// 左
function getx(NAME) {

return parseInt(document.getElementById(NAME).style.left);
}

// 上
function gety(NAME) {

return parseInt(document.getElementById(NAME).style.top);
}
//音楽再生---------------------------------------

function musicplay(OBJ,F) {

//if(F) {document.getElementById(OBJ).play(); NOWM=OBJ;}
//else document.getElementById(OBJ).play();
}
//音楽停止---------------------------------------

function musicstop() {

//if(NOWM)document.getElementById(NOWM).stop();
}

onbeforeunload=function() {
return 'ここでやめるとセーブされません';
}

document.onmousemove=function(evt) {

if(typeof(createPopup)!="undefined"){

MOUSEX=document.body.scrollLeft+event.clientX;
MOUSEY=document.body.scrollTop +event.clientY;
}else{
MOUSEX=evt.pageX;
MOUSEY=evt.pageY;
}
}

document.onmousedown=function() {

MDOWN=true;
}

document.onmouseup=function(){

MDOWN=false;
}

document.onkeydown = function(event) {

KEYCODE = event.keyCode;
CTRL = event.ctrlKey;
SHIFT = event.shiftKey;
// ｲﾍﾞﾝﾄの上位伝播を防止
//event.returnValue = false;
event.cancelBubble = true;

// ｷｰｺｰﾄﾞの文字を取得
KEYCHAR = String.fromCharCode(KEYCODE).toUpperCase();
}
document.onkeyup = function() {

KEYCODE='';
KEYCHAR='';
CTRL=false;
SHIFT=false;
}
/* 特殊ｷｰｺｰﾄﾞの対応
27 Esc
8 BS
9 Tab
32 Space
45 Ins
46 Del
35 End
36 Home
33 PageUp
34 PageDown
38 ↑
40 ↓
37 ←
39 →
*/