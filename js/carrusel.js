var imagenes = ['img/imagen1.jpg', 'img/imagen2.jpg', 'img/imagen3.jpg', 'img/imagen4.png', 'img/imagen5.jpe',]
var contador = 0;

function carrusel(container){
   container.addEventListener('click' , e => {
     
    let atras = container.querySelector('.back'), 
    adelante = container.querySelector('.forward'),
    img = container.querySelector('img'),
    tgt = e.target;

    if(tgt == atras){
        if(contador > 0){
            img.src = imagenes [contador-1];
            contador --;

        } else{
            img.src = imagenes[imagenes.length - 1]
            contador = imagenes.length - 1;

        }

    }else if (tgt == adelante){
        if(contador < imagenes.length - 1){
            img.src = imagenes [contador + 1];
            contador ++;

        } else{
            img.src = imagenes[0]
            contador = 0;

        }



    }
   });

}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.container')
  
   

})

setInterval(carrusel,3000)



function back(){
    return;
}