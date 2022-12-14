var texto = document.querySelector(".campo-texto");
var pantalla = document.querySelector(".pantalla");
var imagen = document.querySelector(".estado");

function encriptar(){
    var mensaje = texto.value.toLocaleLowerCase();
    console.log(mensaje);
    console.log("funciona");
    var iterador = 0;
    var encriptado="";

    while(iterador<mensaje.length){
        switch(mensaje[iterador]){
            case "e":
                encriptado+="enter";
                break;
            
            case "i":
                encriptado+="imes";
                break;
            
            case "a":
                encriptado+="ai";
                break;
            
            case "o":
                encriptado+="ober";
                break;

            case "u":
                encriptado+="ufat";
                break;

            default:
                encriptado+=mensaje[iterador];
                break;
        }
        iterador++;
    }
    texto.value="";
    pantalla.innerText=encriptado;

}

function desencriptar(){
    var mensaje = texto.value.toLocaleLowerCase();
    var desencriptado = mensaje.replace(/enter/g,"e") /* Se reemplan globalmente*/
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    texto.value="";
    pantalla.innerText=desencriptado;
}

function copiar(){
    pantalla.select();
    document.execCommand("copy");
}

function verificar(){
    var mensaje = texto.value.toLocaleLowerCase();
    if(mensaje==="" && pantalla.value===""){
        imagen.style.visibility="visible";
    }else{
        imagen.style.visibility="hidden";
    }
}

setInterval(verificar,400);

var botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.onclick=encriptar;

var botonDesencriptar = document.querySelector(".boton-desencriptar");
botonDesencriptar.onclick=desencriptar;

var botonCopiar = document.querySelector(".boton-copiar");
botonCopiar.onclick=copiar;