
var apelis = []
var atitulos =[]
var genero =[]
var protagonista =[]

var year = []
var correo =[]
var fecha =[]

var botonSelect = document.querySelector('#btnRegistrar');

botonSelect.addEventListener('click', registrarLibro);

function registrarLibro(){
  var rpelis = document.querySelector('#numId').value,
  
     rtitulos = document.querySelector('#tit').value,
      rgenero = document.querySelector('#gen').value, 
      rprotagonista = document.querySelector('#prot').value, 
      ryear = document.querySelector('#ye').value,
      rmail = document.querySelector('#mail').value,
      rfecha = document.querySelector('#date');


      apelis.push(rpelis);
      atitulos.push(rtitulos);
      genero.push(rgenero);
      protagonista.push(rprotagonista);
      year.push(ryear);
      correo.push(rmail);
      fecha.push(rfecha);


      localStorage.setItem('id_pelis', JSON.stringify(apelis))
      localStorage.setItem('titulo_peli', JSON.stringify(atitulos))
      localStorage.setItem('gene', JSON.stringify(genero))
      localStorage.setItem('nom_Protagonista', JSON.stringify(protagonista))
      localStorage.setItem('año', JSON.stringify(year))
      localStorage.setItem('corre', JSON.stringify(correo))
      localStorage.setItem('diaFecha', JSON.stringify(fecha))



}