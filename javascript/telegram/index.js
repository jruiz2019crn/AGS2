var color=["#2952a3","black","green","navy","#ff6699"];
var colordark=["#003300","#001a33","#331a00","#602020","#4d004d"];
var colorartic=["#669999","#001a33","#ff5050","#9966ff","#008080"];

var bola=document.getElementsByClassName('bola');

for (var k=0; k<bola.length; k++) {
      bola[k].style.backgroundColor=color[k];
    }

var bola2=document.getElementsByClassName('bola2');

for (var k=0; k<bola2.length; k++) {
      bola2[k].style.backgroundColor=colordark[k];
    }

var bola3=document.getElementsByClassName('bola3');

for (var k=0; k<bola3.length; k++) {
      bola3[k].style.backgroundColor=colorartic[k];
    }

var chati=document.getElementsByClassName('chati');
var chatd=document.getElementsByClassName('chatd');

var bocata3=document.getElementsByClassName('bocata3');

  document.getElementById('default').addEventListener('click',def);
  document.getElementById('mono').addEventListener('click',mono);
  document.getElementById('dark').addEventListener('click',dark);
  document.getElementById('artic').addEventListener('click',artic);

  document.getElementById('uno').addEventListener('click',red);
  document.getElementById('dos').addEventListener('click',black);
  document.getElementById('tres').addEventListener('click',green);
  document.getElementById('cuatro').addEventListener('click',navy);
  document.getElementById('cinco').addEventListener('click',pink);

  document.getElementById('one').addEventListener('click',dark1);
  document.getElementById('two').addEventListener('click',dark2);
  document.getElementById('three').addEventListener('click',dark3);
  document.getElementById('four').addEventListener('click',dark4);
  document.getElementById('five').addEventListener('click',dark5);

  document.getElementById('unos').addEventListener('click',artic1);
  document.getElementById('due').addEventListener('click',artic2);
  document.getElementById('tre').addEventListener('click',artic3);
  document.getElementById('quattro').addEventListener('click',artic4);
  document.getElementById('cinque').addEventListener('click',artic5);


function def(){
  document.getElementById('chat').style.backgroundColor='#800080';
  chati[0].style.backgroundColor='#FFF';
  chatd[0].style.backgroundColor='#20B2AA';
  document.getElementById('barra').style.display="none";
  document.getElementById('barra2').style.display="none";
  document.getElementById('barra3').style.display="none";
}

function mono(){
  document.getElementById('chat').style.backgroundColor='#2952a3';
  document.getElementById('barra').style.display="block";
  document.getElementById('barra2').style.display="none";
  document.getElementById('barra3').style.display="none";

  chati[0].style.backgroundColor="#EF946C";
  chati[0].style.filter='brightness(8)';
  chati[0].style.opacity=0.6;

  chatd[0].style.backgroundColor='#74D3AE';
  chatd[0].style.filter='brightness(10)';
  chatd[0].style.opacity=0.35;
}

function dark(){
  document.getElementById('chat').style.backgroundColor='#003300';
  document.getElementById('barra').style.display="none";
  document.getElementById('barra2').style.display="block";
  document.getElementById('barra3').style.display="none";


  chati[0].style.backgroundColor='#FFF';
  chati[0].style.filter='brightness(8)';
  chati[0].style.opacity=0.7;

  chatd[0].style.backgroundColor='#82204A';
  chatd[0].style.filter='brightness(8)';
  chatd[0].style.opacity=0.35;
}

function artic(){
  document.getElementById('chat').style.backgroundColor='#669999';
  document.getElementById('barra').style.display="none";
  document.getElementById('barra2').style.display="none";
  document.getElementById('barra3').style.display="block";

  chati[0].style.backgroundColor='#5A7684';
  chati[0].style.filter='brightness(6)';
  chati[0].style.opacity=0.7;

  chatd[0].style.backgroundColor='#A0DDFF';
  chatd[0].style.filter='brightness(6)';
  chatd[0].style.opacity=0.35;
  }

function red(){
  document.getElementById('chat').style.backgroundColor='#2952a3';
  document.getElementById('mono').style.backgroundColor='#2952a3';

}

function black(){
  document.getElementById('chat').style.backgroundColor='black';
  document.getElementById('mono').style.backgroundColor='black';
}

function green(){
  document.getElementById('chat').style.backgroundColor='green';
  document.getElementById('mono').style.backgroundColor='green';
}


function navy(){
  document.getElementById('chat').style.backgroundColor='navy';
  document.getElementById('mono').style.backgroundColor='navy';
}

function pink(){
  document.getElementById('chat').style.backgroundColor='#ff6699';
  document.getElementById('mono').style.backgroundColor='#ff6699';
}





function dark1(){
  document.getElementById('chat').style.backgroundColor='#003300';
  document.getElementById('dark').style.backgroundColor='#003300';
}

function dark2(){
  document.getElementById('chat').style.backgroundColor='#001a33';
  document.getElementById('dark').style.backgroundColor='#001a33';
}

function dark3(){
  document.getElementById('chat').style.backgroundColor='#331a00';
  document.getElementById('dark').style.backgroundColor='#331a00';
}

function dark4(){
  document.getElementById('chat').style.backgroundColor='#602020';
  document.getElementById('dark').style.backgroundColor='#602020';
}

function dark5(){
  document.getElementById('chat').style.backgroundColor='#4d004d';
  document.getElementById('dark').style.backgroundColor='#4d004d';
}


function artic1(){
  document.getElementById('chat').style.backgroundColor='#669999';
  document.getElementById('artic').style.backgroundColor='#669999';
}

function artic2(){
  document.getElementById('chat').style.backgroundColor='#001a33';
  document.getElementById('artic').style.backgroundColor='#001a33';
}

function artic3(){
  document.getElementById('chat').style.backgroundColor='#ff5050';
  document.getElementById('artic').style.backgroundColor='#ff5050';
}

function artic4(){
  document.getElementById('chat').style.backgroundColor='#9966ff';
  document.getElementById('artic').style.backgroundColor='#9966ff';
}

function artic5(){
  document.getElementById('chat').style.backgroundColor='#008080';
  document.getElementById('artic').style.backgroundColor='#008080';
}
