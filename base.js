
var MOUSEX = 0;
var MOUSEY = 0;

var KEYCODE='';
var KEYCHAR='';

var CTRL =false;
var SHIFT=false;

var NOWM;

var MST;

var MDOWN=false;

//ү���ނ𗬂�����-------------------------------

function msgscroll(MESSAGE) {

//�O����ϰ���~�߂�
clearInterval(MST);

//�ð���ް����ɂ���
status='';

//��������̏ꍇ�A�������~����
if (!MESSAGE) return false;

//�ϐ��Ɉ�����Ă���
MSG = MESSAGE;

//��ϰ�� 0.2�b���Ƃɏ��������s����
MST = setInterval('status=MSG; MSG=MSG.substring(1,MSG.length)+MSG.substring(0,1)',200);

return true;

}
//ڲԕ\��/��\��-----------------------------------

function visibility(NAME,FLAG) {

if (FLAG) document.getElementById(NAME).style.visibility = 'visible';
else document.getElementById(NAME).style.visibility = 'hidden';
}
//ڲԂ̈ʒu�w��------------------------------------

function setxy(NAME,X,Y) {

document.getElementById(NAME).style.left= X+'px';
document.getElementById(NAME).style.top = Y+'px';
}
//ڲԂ̍��W�擾------------------------------------

// ��
function getx(NAME) {

return parseInt(document.getElementById(NAME).style.left);
}

// ��
function gety(NAME) {

return parseInt(document.getElementById(NAME).style.top);
}
//���y�Đ�---------------------------------------

function musicplay(OBJ,F) {

//if(F) {document.getElementById(OBJ).play(); NOWM=OBJ;}
//else document.getElementById(OBJ).play();
}
//���y��~---------------------------------------

function musicstop() {

//if(NOWM)document.getElementById(NOWM).stop();
}

onbeforeunload=function() {
return '�����ł�߂�ƃZ�[�u����܂���';
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
// ����Ă̏�ʓ`�d��h�~
//event.returnValue = false;
event.cancelBubble = true;

// �����ނ̕������擾
KEYCHAR = String.fromCharCode(KEYCODE).toUpperCase();
}
document.onkeyup = function() {

KEYCODE='';
KEYCHAR='';
CTRL=false;
SHIFT=false;
}
/* ���귰���ނ̑Ή�
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
38 ��
40 ��
37 ��
39 ��
*/