var imagen = 0;

var direccion = 0;

var foto = document.getElementById("fotos")



function forward() {
    if (imagen >= 4) {
       
        imagen = 0;
    
    } else {
        
        imagen++;
    }
    foto.src = "./img/imagen" + imagen + ".jpg";
   
    direccion = 0;
}

function back() {
    if (imagen <= 0) {
        
        imagen = 4;
   
    } else {
        
        imagen--;
    }
    
    foto.src = "./img/imagen" + imagen + ".jpg";
    direccion = 1;
}

function move() {
    if (direccion == 1) {
      
        back();
    
    } else {
        
        forward();
    }
}
setInterval(move, 3000);