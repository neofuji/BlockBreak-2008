
var SCORE=0;	//���

var CLEAR=-1;

var CCT;	//Combo Count Timer
var SRT;	//Staff Roll Timer

var BMT;

var TIM;

var START=false;

var PATH ='img/blockbreak/';

var KEYF=false;

var COMBO=0;	//���ސ�

/*�ްŽ*/

var BONUS=0;	//�ްŽ�_

var BALLS =3;	//�ްِ�
var MCOMBO=0;	//�ő���ސ�

var SPEEDX=10; var SPEEDY=10;	//�ްق̽�߰��

var BLOCKS=0;	//��ۯ�����
var BREAK = new Array();

var T_MIN=0; var T_SEC=0;	//���

var SET=new Array();	//�����ݒ���(true or false)
SET[0] =false;	//��ľ���
SET[1] =true;	//���۰�()
SET[2] =true;	//BGM

var STAGE=0;	//���ð��

var CLIST=new Array();	//���ݼޏ��

//�K���ɗ�L
CLIST[0]='�{�[�����X�Ȃ��ŃN���A���悤�B';
CLIST[1]='�P���ȓ��ɃN���A���悤�B';
CLIST[2]='�A�C�e����S����낤�B';

var STAFF=new Array();	//����۰ُ��

//�\�����鏇�ɗ�L
STAFF[0]='<h2>Director</h2>Higuruma Toru';
STAFF[1]='<h2>Game design</h2>Higuruma Toru<h2>Program</h2>Higuruma Toru<br />(Support:I.H.)';
STAFF[2]='<h2>Graphic</h2>Higuruma Toru<h2>Music</h2>I.H. etc...';
STAFF[3]='<h2>Special thanks</h2>I.H.';
STAFF[4]='<h2>Producer</h2>Higuruma Toru<h2>Executive producer</h2>Higuruma Toru';
STAFF[5]='<h2>Thank you for playing!</h2>';

/*
��10��
�c 8�i

0:����
1:��
2:��
3:��
4:��
5:�󂹂Ȃ�
6:���
*/

var BLOCK=new Array();	//��ۯ��z�u��� �ð�ޏ��ɗ�L����
BLOCK[0]='0000000000'+
         '0111122220'+
         '0333344440';

BLOCK[1]='0222222220'+
         '0011111100'+
         '0004444000'+
         '0000330000';

BLOCK[2]='0333001110'+
         '0300301001'+
         '0333001110'+
         '0300301001'+
         '0333001110';

BLOCK[3]='1111111111'+
         '6666666666';

//2P
BLOCK[-1]='000000000';

var SBGM=new Array();	//Stage BGM �ð�ޏ��ɗ�L����

SBGM[0]='dbgm2';
SBGM[1]='dbgm4';
SBGM[2]='dbgm5';
SBGM[3]='dbgm0';

var IMG=new Array();

IMG[0]=new Image(400,100);
IMG[0].src=PATH+'logo.gif';

IMG[1]=new Image(240,60);
IMG[1].src=PATH+'mm_newgame.jpg';

IMG[2]=new Image(240,60);
IMG[2].src=PATH+'mm_continue.jpg';

IMG[3]=new Image(100,25);
IMG[3].src=PATH+'mm_hiscore.jpg';

IMG[4]=new Image(100,25);
IMG[4].src=PATH+'mm_option.jpg';

IMG[5]=new Image(30,30);
IMG[5].src=PATH+'ball.gif';

IMG[6]=new Image(150,30);
IMG[6].src=PATH+'pad.gif';

IMG[7]=new Image(60,30);
IMG[7].src=PATH+'blockr.gif';

IMG[8]=new Image(60,30);
IMG[8].src=PATH+'blockg.gif';

IMG[9]=new Image(60,30);
IMG[9].src=PATH+'blockb.gif';

IMG[10]=new Image(60,30);
IMG[10].src=PATH+'blocky.gif';

IMG[11]=new Image(60,30);
IMG[11].src=PATH+'blocks.gif';

IMG[12]=new Image(55,30);
IMG[12].src=PATH+'blockbm.gif';

IMG[13]=new Image(64,64);
IMG[13].src=PATH+'bomb.gif';

//�ƭ��\���̏���---------------------------------

function menusetup() {

document.getElementById('game').innerHTML='<p><img alt="�u���b�N����" height="100" src="img/blockbreak/logo.gif" width="400" /></p><div id="menu">Now Loading....</div>';
mainmenu();
}

//Ҳ��ƭ�----------------------------------------

function mainmenu() {

msgscroll('�@�@�@�@�@�@�@�@�@�@���[�h��I��ŉ�����');

with(document.getElementById('menu')) {

innerHTML ='<h1>-MAINMENU-</h1>';

innerHTML+='<a href="#" onclick="clearInterval(KCT); menu_1p(); return false"><img alt="1P GAME" height="60" src="img/blockbreak/mm_1pgame.jpg" width="240" /></a>�@<a href="#" onclick="/*clearInterval(KCT); menu_2p();*/ return false"><img alt="2P GAME" height="60" src="img/blockbreak/mm_2pgame.jpg" width="240" /></a><br />';
innerHTML+='<a href="#" onclick="/*clearInterval(KCT); hiscore();*/ return false"><img alt="HIGHSCORES" height="30" src="img/blockbreak/mm_hiscore.jpg" width="180" /></a>�@�@�@<a href="#" onclick="/*clearInterval(KCT); option();*/ return false"><img alt="OPTION" height="30" src="img/blockbreak/mm_option.jpg" title="�Q�[���̐ݒ�����܂�" width="180" /></a><br />';
}
KCT=setInterval(function(){
if(KEYCHAR=='S'){clearInterval(KCT); menu_1p();}
//else if(KEYCHAR=='H'){clearInterval(KCT); hiscore();}
//else if(KEYCHAR=='O'){clearInterval(KCT); option();}
},50);

musicstop();
musicplay('dbgm3',1);
}
//����������-------------------------------------

function gamesetup() {

START=false;

BLOCKS=0;
MCOMBO=0;

T_MIN=3;
T_SEC='00';

BONUS=0;

with(document.getElementById('game')) {

innerHTML='<img alt="" height="30" id="ball" src="img/blockbreak/ball.gif" style="position:absolute; left:160px; top:370px;" width="30" />';
innerHTML+='<img alt="" height="30" id="pad1" src="img/blockbreak/pad.gif" style="position:absolute; left:100px; top:400px;" width="150" />';

innerHTML+='<div id="stagebox"style="filter: DropShadow(color=silver, offX=3, offY=3); font-size: larger; height: 50px; position:absolute; left:0px; top:0px; width: 150px; z-index: 10;"><big>STAGE'+(STAGE<9 ? ' ':'')+(STAGE+1)+'</big><br />TIME <span id="time">'+T_MIN+':'+T_SEC+'</span></div>';
innerHTML+='<div id="1Pstatus" style="filter: DropShadow(color=silver, offX=3, offY=3); font-size: larger; height: 50px; position:absolute; right:0px; top:0px; width: 150px; z-index: 10;"><big><span id="1Pscore">'+(SCORE<1000000000?'0':'')+(SCORE<100000000?'0':'')+(SCORE<10000000?'0':'')+(SCORE<1000000?'0':'')+(SCORE<100000?'0':'')+(SCORE<10000?'0':'')+(SCORE<1000?'0':'')+(SCORE<100?'0':'')+(SCORE<10?'0':'')+SCORE+'</span></big><br /><span id="bonusbox"></span></div>';

innerHTML+='<div id="lost" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 50px; position:absolute; left:200px; top:200px; visibility: hidden; width: 200px;"><big><b>BALL LOST!</b></big><br />BALL:<span id="balls">3</span></div>';
innerHTML+='<div id="ready" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 50px; position:absolute; left:200px; top:200px; width: 200px;"><big><b>STAGE'+(STAGE+1)+'</b></big><br /><span id="ready_msg">READY?</span></div>';
}

putblock(STAGE);

setTimeout("document.getElementById('ready_msg').innerHTML='GO!!';",1000);
setTimeout("BMT=setInterval('padmove()',50); visibility('ready',0)",2000);

musicstop();
musicplay(SBGM[STAGE],1);
}

//��ۯ��\��
function putblock(GETSTAGE){

var BTYPE;

for (B=0; B<BLOCK[GETSTAGE].length; B++) {

 switch(BLOCK[GETSTAGE].charAt(B)) {

 case '1': BTYPE='r'; BREAK[B]=1; break;
 case '2': BTYPE='g'; BREAK[B]=1; break;
 case '3': BTYPE='b'; BREAK[B]=1; break;
 case '4': BTYPE='y'; BREAK[B]=1; break;
 case '5': BTYPE='s'; BREAK[B]=1; BLOCKS--; break;
 case '6': BTYPE='bm'; BREAK[B]=1; break;

 default: continue; break;
 }
document.getElementById('game').innerHTML+='<img alt="" height="30" id="'+B+'" src="img/blockbreak/block'+BTYPE+'.gif" style="position:absolute; left:'+(60*B%600)+'px; top:'+(Math.floor(B/10)*30)+'px;" width="60" />';

BLOCKS++;
}

}

//�eӰ�ޏ���-------------------------------------

//Ҳ�Ӱ��
function menu_1p() {

msgscroll();

var STAGEBOX='';

if (CLEAR>-1) {
 for(S=0;S<=CLEAR;S++) {

 STAGEBOX+='<button onclick="start_1p('+S+')">'+(S<10?'&nbsp;':'')+(S+1)+'</button>'+((S+1)%20?'':'<br />');

 }

 with(document.getElementById('menu')) {

 innerHTML='<h1>-1P STAGE-</h1>';

 innerHTML+='<div style="border:1px; width:400px;">'+STAGEBOX+'</div>CONTROLLER<br /><select onchange="KEYF=this.value"><option'+(KEYF?'':' selected="selected"')+' value="false">MOUSE</option><option'+(KEYF?' selected="selected"':'')+' value="true">KEYBOARD</option></select>';

 innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
 }
}
else {


 with(document.getElementById('menu')) {

 innerHTML='<h1>-1P STAGE-</h1>';

 innerHTML+='<button onclick="start_1p(0)">START</button>CONTROLLER<br /><select onchange="KEYF=this.value"><option'+(KEYF?'':' selected="selected"')+' value="false">MOUSE</option><option'+(KEYF?' selected="selected"':'')+' value="true">KEYBOARD</option></select>';

 innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
 }


}
}

function start_1p(GETSTAGE) {

STAGE=GETSTAGE;

gamesetup();

}

function menu_2p() {


with(document.getElementById('menu')) {

innerHTML='<h1>-2PBATTLE-</h1>';

innerHTML+='<h2>RULESELECT</h2>';

innerHTML+='<button onclick="menu_2p_time()" onmouseover="comment.value=\'���߂�ꂽ���ԓ��œ��_���҂��I\'" onmouseout="comment.value=\'\'">TIME&nbsp;</button><button onmouseover="comment.value=\'���߂�ꂽ���_���悵�ď����I\'" onmouseout="comment.value=\'\'">SCORE</button><button onmouseover="comment.value=\'�{�[���̗��Ƃ������I\'" onmouseout="comment.value=\'\'">BALL&nbsp;</button><br /><button onmouseover="comment.value=\'�{�[���𗎂Ƃ����瑦����!�ߍ�!\'" onmouseout="comment.value=\'\'">SUDDEN DEATH</button><br />';

innerHTML+='<input name="comment" readonly="readonly" size="30" style="border-color: #fff;" />';

innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
}
comment=document.getElementsByName('comment')[0];

}

function menu_2p_time() {


with(document.getElementById('menu')) {

innerHTML='<h1>-2PBATTLE-</h1>';

innerHTML+='<h2>TIMESELECT</h2>';

innerHTML+='<button onclick="start_2p_time(2)">2MIN.</button><button onclick="start_2p_time(3)">3MIN.</button><button onclick="start_2p_time(5)">5MIN.</button>';

innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
}


}

function start_2p_time(GETTIME) {

musicstop();

SCORE1=0;
SCORE2=0;

START=false;

BLOCKS=0;
MCOMBO=0;

T_MIN=GETTIME;
T_SEC='00';

BONUS=0;

with(document.getElementById('game')) {

innerHTML='<img alt="" height="30" id="ball" src="img/blockbreak/ball.gif" style="position:absolute; left:160px; top:370px;" width="30" />';
innerHTML+='<img alt="" height="30" id="pad1" src="img/blockbreak/pad.gif" style="position:absolute; left:100px; top:400px;" width="150" />'
innerHTML+='<img alt="" height="30" id="pad2" src="img/blockbreak/pad.gif" style="position:absolute; left:100px; bottom:400px;" width="150" />'

innerHTML+='<div id="1Pstatus" style="filter: DropShadow(color=silver, offX=3, offY=3); font-size: larger; height: 50px; position:absolute; left:0px; bottom:0px; width: 150px; z-index: 10;"><big>1P:<span id="1Pscore">'+SCORE1+'</span></big><br /><span id="1Pbonus"></span></div>';
innerHTML+='<div id="2Pstatus" style="filter: DropShadow(color=silver, offX=3, offY=3); font-size: larger; height: 50px; position:absolute; left:0px; top:0px; width: 150px; z-index: 10;"><big>2P:<span id="2Pscore">'+SCORE2+'</span></big><br /><span id="2Pbonus"></span></div>';

innerHTML+='<div id="lost" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 50px; position:absolute; left:200px; top:200px; visibility: hidden; width: 200px;"><big><b>BALL LOST!</b></big><br />BALL:<span id="balls">3</span></div>';
innerHTML+='<div id="ready" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 50px; position:absolute; left:200px; top:200px; width: 200px;"><big><b>STAGE'+(STAGE+1)+'</b></big><br /><span id="ready_msg">READY?</span></div>';
}

putblock(STAGE);

setTimeout("document.getElementById('ready_msg').innerHTML='GO!!';",1000);
setTimeout("BMT=setInterval('padmove()',50); visibility('ready',0)",2000);

musicstop();
musicplay(SBGM[STAGE],1);


}

//���Ӱ��
function hiscore() {

msgscroll('�@�@�@�@�@�@�@�@�@�@���ڂ�I��ŉ������B');

with(document.getElementById('menu')) {

innerHTML='<h1>-HISCORES-</h1>';

innerHTML+='<form><table align="center" height="200" id="hsspace" style="background:#ccc;" width="400"><tr align="center" valign="middle"><td><select name="hssel" onchange="hiscore_disp()" size="13"><option>SCORE</option><option>TIME</option><option>BALL</option></select><span id="hsbox" style="background:#fff; height:190px; width:300px;">���̃��X�g����I�����ĉ������B</span></td></tr></table></form>';

innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
}
document.forms[0].elements[0].focus();
KCT=setInterval("if(KEYCHAR=='Z'){clearInterval(KCT); mainmenu();}",50);

musicstop();
musicplay('dbgm1',1);
}

//�\��
function hiscore_disp() {

with(document.getElementById('hsbox')){

if(document.forms[0].elements[0].options[0].selected)innerHTML='<h2>SCORE</h2>';
else if(document.forms[0].elements[0].options[1].selected)innerHTML='<h2>TIME</h2>';
else if(document.forms[0].elements[0].options[2].selected)innerHTML='<h2>BALL</h2>';

}
}

function option() {

with(document.getElementById('menu')) {

innerHTML='<h1>- OPTION -</h1>';
innerHTML+='<div id="option" style="background: #ccc; text-align: right; width: 200px;">CONTROLLER<select><option>Mouse</option><option>Keyboard</option></select><br />MUSIC<input type="checkbox" /><br /></div>';

innerHTML+='<hr /><a href="#" onclick="mainmenu(); return false"><img alt="Top" height="28px" src="img/button/top.gif" width="140px" /></a>';
}

KCT=setInterval("if(KEYCHAR=='Z'){clearInterval(KCT); mainmenu();}",50);
musicstop();
}
//�߯�ވړ�--------------------------------------

function padmove() {

if(KEYF){

/*Left */ if(KEYCODE==37){ if(SHIFT)setxy('pad1',getx('pad1')-40,gety('pad1')); else setxy('pad1',getx('pad1')-25,gety('pad1')); }
/*Right*/ if(KEYCODE==39){ if(SHIFT)setxy('pad1',getx('pad1')+40,gety('pad1')); else setxy('pad1',getx('pad1')+25,gety('pad1')); }

}else setxy('pad1',MOUSEX-95,gety('pad1'));

if(getx('pad1')<0) setxy('pad1',0,gety('pad1'));
if(getx('pad1')>450) setxy('pad1',450,gety('pad1'));

if(START)ballmove('ball');
else {
if(KEYCODE==32||MDOWN) {
START=true;
TIM=setInterval('timer()',1000);
}
else setxy('ball',getx('pad1')+60,370);
}
if(BLOCKS<1) sclear();
document.getElementById('1Pscore').innerHTML=(SCORE<1000000000?'0':'')+(SCORE<100000000?'0':'')+(SCORE<10000000?'0':'')+(SCORE<1000000?'0':'')+(SCORE<100000?'0':'')+(SCORE<10000?'0':'')+(SCORE<1000?'0':'')+(SCORE<100?'0':'')+(SCORE<10?'0':'')+SCORE;
}
//�ްوړ�---------------------------------------

function ballmove(OBJ) {

HF=true;

setxy(OBJ,getx(OBJ)+SPEEDX,gety(OBJ)+SPEEDY);

//���̕ǂ̓��蔻��
if(getx(OBJ)<1) { SPEEDX = -SPEEDX; setxy(OBJ,0,gety(OBJ)); musicplay('se0'); }

if (getx(OBJ)>=570) { SPEEDX = -SPEEDX; setxy(OBJ,570,gety(OBJ)); musicplay('se0'); }

//��̕ǂ̓��蔻��
if(gety(OBJ)<1) { SPEEDY= -SPEEDY; setxy(OBJ,getx(OBJ),0); musicplay('se0'); }

//�߯�ނ̓��蔻��
if(gety(OBJ)>=370 && getx('pad1')<getx(OBJ)+15 && getx('pad1')+150>getx(OBJ)+15) {

//���˕Ԃ�
if ((getx(OBJ)+15<getx('pad1')+50 && SPEEDX>0) || (getx('pad1')+100<getx(OBJ)+15 && SPEEDX<0)) SPEEDX= -SPEEDX;

//��߰�ނ𑫂��Ē��˕Ԃ�
SPEEDY= -(++SPEEDY);

if (SPEEDY<-30)SPEEDY=-30;

setxy(OBJ,getx(OBJ),370);

comboreset();
musicplay('se0');
}

//��ۯ��̓��蔻��
for(A=0; A<BLOCK[STAGE].length; A++) {

//�ްق���ۯ��������Ă��邩?
if(!(BREAK[A]>0 && getx(A)<getx(OBJ)+30 && getx(OBJ)<getx(A)+60 && gety(A)<gety(OBJ)+30 && gety(OBJ)<gety(A)+30)) continue;

//�󂹂Ȃ���ۯ���?
if(BLOCK[STAGE].charAt(A)!=5 && BLOCK[STAGE].charAt(A)!=6) {

bbreak(A);

SCORE+=20;	//���
combo();
}//end if (BLOCK[STAGE].charAt(A) != 5)

else if(BLOCK[STAGE].charAt(A)==6)bomb(A);
else musicplay('se3');

if(HF) { SPEEDY= -SPEEDY; HF=false; }	//���˕Ԃ�

}//end for(A=0; A<BLOCK[STAGE].length; A++)
if(gety(OBJ)>=420) balllost();
}//end function

//�j��-------------------------------------------

function bbreak(OBJ){

//���݂��邩�H
if(BLOCK[STAGE].length<OBJ || BLOCK[STAGE].charAt(OBJ)=='0')return false;

//�󂹂�񐔂ɒB�������H
if(--BREAK[OBJ]>0)return false;

visibility(OBJ,0);	//��\��

if(BLOCK[STAGE].charAt(OBJ)!=5){
BLOCKS--;	//��ۯ��������炷

musicplay('se1');	//�j��
}
}

//���--------------------------------------------

function bomb(OBJ){

var LEFT=true;	var RIGHT=true;

if(OBJ%10==0)LEFT=false;
else if((OBJ+1)%10==0)RIGHT=false;

//��
if(OBJ-10>-1){
 if(BREAK[OBJ-10])bbreak(OBJ-10);
 if(LEFT && BREAK[OBJ-11]) bbreak(OBJ-11);
 if(RIGHT && BREAK[OBJ-9])bbreak(OBJ-9);
}
//��
if(LEFT && BREAK[OBJ-1])bbreak(OBJ-1);
if(RIGHT && BREAK[OBJ+1])bbreak(OBJ+1);
//��
if(OBJ+10<BLOCK[STAGE].length){
 if(BREAK[OBJ+10])bbreak(OBJ+10);
 if(LEFT && BREAK[OBJ+9]) bbreak(OBJ+9);
 if(RIGHT && BREAK[OBJ+11])bbreak(OBJ+11);
}
bbreak(OBJ);

var BOMBID=Math.random();

document.getElementById('game').innerHTML+='<img alt="" height="128" id="bombimg_'+BOMBID+'" src="img/blockbreak/bomb.gif" style="position: absolute; left: '+(getx(OBJ)-42)+'px; top: '+(gety(OBJ)-34)+'px;" width="128" />';

setTimeout("visibility('bombimg_"+BOMBID+"',0)",800);

musicplay('bombse');
}
//��ϰ-------------------------------------------

function timer() {

if(--T_SEC<0) {
T_MIN--;
T_SEC=59;
}

if(T_MIN<0) {

clearInterval(TIM);

T_MIN=0;
T_SEC=0;
}
if(T_SEC<10) T_SEC='0'+T_SEC;

document.getElementById('time').innerHTML=(T_MIN<1 && T_SEC<10 ? '<span style="color: #f00;">':'')+T_MIN+':'+T_SEC+(T_MIN<1 && T_SEC<10 ? '</span>':'');
}
//����-------------------------------------------

function combo() {

if (++COMBO>1) {

clearTimeout(CCT);
document.getElementById('bonusbox').innerHTML='COMBO:'+COMBO+' <span style="font-style: italic;">+'+(5*Math.pow(2,COMBO-1))+'</span>';
}
}

function comboreset() {

if (COMBO>1) {

SCORE+=5*Math.pow(2,COMBO-1);

CCT=setTimeout("document.getElementById('bonusbox').innerHTML=''",1000);

MCOMBO=Math.max(COMBO,MCOMBO);
}
COMBO=0;
}
//�ð�޸ر---------------------------------------

function sclear() {

clearInterval(BMT);
clearInterval(TIM);

comboreset();

BONUS+=(Math.round(T_SEC/10)*10+T_MIN*60)*10;
BONUS+=BALLS*500;
BONUS+=MCOMBO*200;

CLEAR=Math.max(CLEAR,STAGE);

with(document.getElementById('game')) {

innerHTML+='<div id="sclear" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 300px; position:absolute; left:150px; top:75px; width: 300px;"><p><big><big><b>STAGE'+(++STAGE)+' CLEAR!</b></big></big></p><table cellpadding="0" cellspacing="0" width="250"><tr><th width="100">SCORE</th><td></td><td align="right" width="50">'+SCORE+'</td></tr><tr><th>TIME</th><td>'+(Math.round(T_SEC/10)*10+T_MIN*60)+'sec.x10��</td><td align="right">'+(Math.round(T_SEC/10)*10+T_MIN*60)*10+'</td></tr><tr><th>BALLS</th><td><b>'+BALLS+'</b>x500��</td><td align="right">'+(BALLS*500)+'</td></tr><tr><th>MAXCOMBO</th><td><b>'+MCOMBO+'</b>x200��</td><td align="right">'+(MCOMBO*200)+'</td></tr><tr><th>BONUS</th><td align="right" colspan="2">'+BONUS+'</td></tr><tr style="font-size: larger;"><th>TOTAL</th><td align="right" colspan="2">'+(SCORE+=BONUS)+'</td></tr></table>'+(STAGE>=BLOCK.length ?'':'<button name="quit" onclick="clearInterval(KCT); menusetup()" style="font-size: 125%;">�p�t�h�s</button>')+'<button name="next" onclick="clearInterval(KCT);'+(STAGE>=BLOCK.length ?'staffroll()':'gamesetup()')+'" style="font-size: 125%;">�m�d�w�s</button></div>';
}
quit=document.getElementsByName('quit')[0];
next=document.getElementsByName('next')[0];
next.focus();

save();

KCT=setInterval(function(){
if(STAGE<BLOCK.length && KEYCODE==37)quit.focus();
else if(KEYCODE==39)next.focus();
},50);
}
//�ް�۽/�ްѵ��ް-------------------------------

function balllost() {

START=false;

clearInterval(BMT);
clearInterval(TIM);

comboreset();

musicplay('se2');

if(--BALLS<1) {
gameover();
return;
}
document.getElementById('balls').innerHTML=BALLS;

visibility('lost',1);

setTimeout(function(){
visibility('lost',0);
SPEEDY=10;
BMT=setInterval('padmove()',50);
},2000);
}
//�ްѵ��ް
function gameover() {

BALLS=3;

clearInterval(BMT);
clearInterval(TIM);

document.getElementById('game').innerHTML+='<div id="gameover" style="background: #ccc; color: #000; filter:alpha(style=0,opacity=75); font-size: larger; height: 300px; position: absolute; left: 150px; top: 75px; width: 300px;"><p><big><big><b>GAME OVER!</b></big></big></p><p style="width: 150px;">SCORE:'+SCORE+'</p><br />CONTINUE?<br /><button name="yes" onclick="clearInterval(KCT); go_continue()" style="font-size: 125%;">�x�d�r</button>�@<button name="no" onclick="clearInterval(KCT); SCORE=0; menusetup()" style="font-size: 125%;">�m�@�n</button></div>';
yes=document.getElementsByName('yes')[0];
no=document.getElementsByName('no')[0];

yes.focus();
KCT=setInterval("if(KEYCODE==37)yes.focus(); else if(KEYCODE==39)no.focus();",50);

musicstop();
musicplay('game_over',1);
}
//��èƭ�----------------------------------------

function go_continue() {

SCORE=Math.floor(Math.floor(SCORE/2)/10)*10+Math.min(SCORE%10+1,9);
gamesetup();
}
//����۰�----------------------------------------

function staffroll() {

STAGE=0;
SRID =0;

document.getElementById('game').innerHTML='<p><img alt="�u���b�N����" src="img/blockbreak/logo.gif" /></p><h1>STAFFROLL</h1><div id="sr"><h2>T-GAME</h2></div>';

SRT=setInterval(function(){
document.getElementById('sr').innerHTML=STAFF[SRID];

if(++SRID>=STAFF.length) {
clearInterval(SRT); setTimeout('menusetup()',5000)
}
},5000);

musicstop();
musicplay('srbgm',1);
}


//۰��-------------------------------------------

function load(){

var COOKIE=document.cookie;

//IE4�΍�
if(COOKIE.charAt(COOKIE.length-1)!=';')COOKIE+=';';

COOKIE=COOKIE.substring(COOKIE.indexOf('BLOCKBREAK='),COOKIE.length);
COOKIE=COOKIE.substring(0,COOKIE.indexOf(';')+1);
eval(unescape(COOKIE));
}

//����-------------------------------------------

function save() {
document.cookie="BLOCKBREAK="+escape("SCORE="+SCORE+";BALLS="+BALLS+";CLEAR="+CLEAR+";")+"; expires=Thu, 1-Jan-2030 00:00:00 GMT; domain=.github.io; path=/;";
}

function pause() {
 if(confirm('-----�o�`�t�r�d-----\n���j���[�ɖ߂�܂���')) {

 clearInterval(BMT);
 clearInterval(TIM);
 menusetup();
 }
}

//������-----------------------------------------

load();

menusetup();
