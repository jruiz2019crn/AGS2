
// Esta variable hace un barrido de todas lkas imágenes en todo el documento

//estas variables manejan todo lo que necesitamos

var imatge=document.getElementsByTagName('img');

var tirador=document.getElementsByTagName('input');

var valor=document.getElementsByTagName('p');

tirador[0].addEventListener('input',desenfoc);
tirador[1].addEventListener('input',grey);
tirador[2].addEventListener('input',ombra);
tirador[3].addEventListener('input',sep);
tirador[4].addEventListener('input',llum);
tirador[5].addEventListener('input',contrast);
tirador[6].addEventListener('input',entonar);
tirador[7].addEventListener('input',invert);
tirador[8].addEventListener('input',saturar);
tirador[9].addEventListener('input',opacar);


function desenfoc(){

valor[0].innerHTML=tirador[0].value;
imatge[0].style.webkitFilter="blur("+tirador[0].value+"px)";
}

function grey(){

valor[1].innerHTML=tirador[1].value;
imatge[1].style.webkitFilter="grayscale("+tirador[1].value+"%)";
}

function ombra(){

valor[2].innerHTML=tirador[2].value;
imatge[2].style.webkitFilter="drop-shadow("+tirador[2].value+"px "+tirador[2].value+"px "+tirador[2].value+"px #3d004d)";
}

function sep(){

valor[3].innerHTML=tirador[3].value;
imatge[3].style.webkitFilter="sepia("+tirador[3].value+"%)";
}

function llum(){

valor[4].innerHTML=tirador[4].value;
imatge[4].style.webkitFilter="brightness("+tirador[4].value+"%)";
}

function contrast(){

valor[5].innerHTML=tirador[5].value;
imatge[5].style.webkitFilter="contrast("+tirador[5].value+"%)";
}

function entonar(){

valor[6].innerHTML=tirador[6].value;
imatge[6].style.webkitFilter="hue-rotate("+tirador[6].value+"deg)";
}

function invert(){

valor[7].innerHTML=tirador[7].value;
imatge[7].style.webkitFilter="invert("+tirador[7].value+"%)";
}

function saturar(){

valor[8].innerHTML=tirador[8].value;
imatge[8].style.webkitFilter="saturate("+tirador[8].value+"%)";
}

function opacar(){

valor[9].innerHTML=tirador[9].value;
imatge[9].style.webkitFilter="opacity("+tirador[9].value+"%)";
}
