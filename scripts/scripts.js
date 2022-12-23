function encriptar() {
    var texto = document.getElementById("IngText").value.toLowerCase();
   
    var cifrado = texto.replace(/e/igm, "enter");
    var cifrado = cifrado.replace(/o/igm, "ober");
    var cifrado = cifrado.replace(/i/igm, "imes");
    var cifrado = cifrado.replace(/a/igm, "ai");
    var cifrado = cifrado.replace(/u/igm, "ufat");

    document.getElementById("muheco").style.display = "none";
    document.getElementById("leyenda").style.display = "none";
    document.getElementById("textdes").innerHTML = cifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display ="inherit";
}
function desencriptar() {
    var texto = document.getElementById("IngText").value.toLowerCase();
   
    var cifrado = texto.replace(/enter/igm, "e");
    var cifrado = cifrado.replace(/ober/igm, "o");
    var cifrado = cifrado.replace(/imes/igm, "i");
    var cifrado = cifrado.replace(/ai/igm, "a");
    var cifrado = cifrado.replace(/ufat/igm, "u");

    document.getElementById("muheco").style.display = "none";
    document.getElementById("leyenda").style.display = "none";
    document.getElementById("textdes").innerHTML = cifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display ="inherit";
}

function copy () {
    var textoenarea = document.querySelector("#textdes");
    textoenarea.select();
    document.execCommand("copy");
    alert("Se Copio")
}