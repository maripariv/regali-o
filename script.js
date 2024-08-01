function cambiarCarta(emocion) {
    let contenidoCarta = "";
    let imagenSrc = ""; 

    switch (emocion.toLowerCase()) {
        case "instrucciones":
            contenidoCarta = "Hola, se me ocurrió esto hace meses y finalmente lo terminé. Me gusta mostrarte mi amor por medio de tu lenguaje y bueno, espero te guste tanto como yo disfruté haciéndolo :D El propósito es que tengas un sitio al que recurrir cuando quieras leer algo lindo dependiendo de la emoción sin tener que decirle a nadie. Al final puse la imagen de cuando se me ocurrió y lo anoté en mi propio chat de wasa pa que no se me olvidara.";
            imagenSrc = "instrucciones.png"; 
            break;
        case "felicidad":
            contenidoCarta = "Me alegra que estés feliz hoy!! enjoy the feeling.";
            imagenSrc = "felicidad.jpg";
            break;
        case "miedo":
            contenidoCarta = "Abajo te dejé la carta para días como este. https://www.youtube.com/watch?v=u5CVsCnxyXg";
            imagenSrc = "miedo.jpg";
            break;
        case "tristeza":
            contenidoCarta = "El propósito no es jamás estar triste, es saber lidiar con ella cuando pega y duro.";
            imagenSrc = "tristeza.jpg";
            break;
        case "enojado":
            contenidoCarta = "Life is unfair sometimes, is ok. Aún estoy buscando las palabras adecuadas para esta emoción";
            break;
        case "ansiedad":
            contenidoCarta = "Diría que es algo parecido al miedo. Aún estoy buscando las palabras adecuadas para esta emoción";
            break;
        default:
            contenidoCarta = "Escribe una emoción válida (por ejemplo: 'tristeza' o 'felicidad') para ver lo que te he escrito.";
            break;
    }

    document.getElementById("mensaje").innerText = contenidoCarta; 

    
    if (imagenSrc !== "") {
        document.getElementById("imagenEmocion").src = imagenSrc;
        document.getElementById("imagenEmocion").style.display = "block"; 
    } else {
        document.getElementById("imagenEmocion").style.display = "none"; 
    }
}

document.getElementById("formEmocion").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emocionInput = document.getElementById("inputEmocion").value;
    cambiarCarta(emocionInput);
});
