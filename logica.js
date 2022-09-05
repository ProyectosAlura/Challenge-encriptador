var texto = document.querySelector(".campo-texto");
var pantalla = document.querySelector(".pantalla");

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

var botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.onclick=encriptar;