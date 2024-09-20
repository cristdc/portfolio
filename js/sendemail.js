function enviar(){
    console.log("hola")
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    document.location.href=
    "mailto:cristdc05@gmail.com?subject="+asunto+"&body=Hola%20Soy%20"+nombre+",%20"+mensaje;
}