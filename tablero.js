function dibujarCanvas(){
    tablero.clearRect(0,0,1200,860);
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.fillRect(0,0,1200,860);
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = '63px serif';
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    let anchura = 600/palabraSecreta.length
    tablero.strokeText(palabraSecreta[index], 505+(anchura*index), 620)
    palabraAdivinada = palabraAdivinada.substring(0, index) +  palabraSecreta[index] +  palabraAdivinada.substring(index + 1);
    console.log(palabraAdivinada);
    if(palabraAdivinada==palabraSecreta){
        mensajeVictoria();
    }
    tablero.stroke()
}

function mensajeVictoria(){
    let tableroSize = document.getElementById("forca");
    var widthT = (tableroSize.width/2);
    var heightT = (tableroSize.height/2)-150;
    tablero.font = '40px serif';
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#40C43B";
    tablero.strokeStyle = "#40C43B";
    tablero.strokeText("¡¡¡Excelente Adivinaste!!!", widthT+160, heightT+50)
}

function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font = '40px serif';
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.strokeText(letra, 250+(40*(10-errorsLeft)),710,40)
}

function dibujarPerson(part) {
    let tableroSize = document.getElementById("forca");
    var widthT = (tableroSize.width/2);
    var heightT = (tableroSize.height/2)-150;
   switch (part) {
      case 'horca' :
        tablero.strokeStyle = '#0A3871';
        tablero.lineWidth = 8; 
        tablero.beginPath();
        tablero.moveTo(widthT+175, heightT+225);
        tablero.lineTo(widthT+5, heightT+225);
        tablero.moveTo(widthT+40, heightT+225);
        tablero.lineTo(widthT+25, heightT+5);
        tablero.lineTo(widthT+100, heightT+5);
        tablero.lineTo(widthT+100, heightT+25);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;

      case 'cabeza':
        tablero.lineWidth = 7;
        tablero.beginPath();
        tablero.arc(widthT+100, heightT+50, 25, 0, Math.PI*2, true);
        tablero.closePath();
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;
      
      case 'cuerpo':
        tablero.beginPath();
        tablero.moveTo(widthT+100, heightT+75);
        tablero.lineTo(widthT+100, heightT+140);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;

      case 'brazoDerecho':
        tablero.beginPath();
        tablero.moveTo(widthT+100, heightT+85);
        tablero.lineTo(widthT+60, heightT+100);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;

      case 'brazoIzquierdo':
        tablero.beginPath();
        tablero.moveTo(widthT+100, heightT+85);
        tablero.lineTo(widthT+140, heightT+100);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;

      case 'piernaDerecha':
        tablero.beginPath();
        tablero.moveTo(widthT+100, heightT+140);
        tablero.lineTo(widthT+80, heightT+190);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
        break;

      case 'pieDerecho':
        tablero.beginPath();
        tablero.moveTo(widthT+82, heightT+190);
        tablero.lineTo(widthT+70, heightT+185);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
      break;

      case 'piernaIzquierda':
        tablero.beginPath();
        tablero.moveTo(widthT+100, heightT+140);
        tablero.lineTo(widthT+125, heightT+190);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
      break;

      case 'pieIzquierdo':
        tablero.beginPath();
        tablero.moveTo(widthT+122, heightT+190);
        tablero.lineTo(widthT+135, heightT+185);
        tablero.strokeStyle = "#0A3871";
        tablero.stroke();
      break;

      case 'finishHim':
        let img = document.getElementById("imgSource");
        tablero.drawImage(img, widthT+85, heightT+35, 30, 30);
        tablero.font = '40px serif';
        tablero.lineWidth = 2;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#E73A3C";
        tablero.strokeStyle = "#E73A3C";
        tablero.strokeText("Fin del Juego", widthT+160, heightT+50)

      break;
   } 
}
