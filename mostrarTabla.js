function llenarTabla() {
    var tbody = document.querySelector('#tbPelis tbody');
    tbody.innerHTML = '';

    var apelis = JSON.parse(localStorage.getItem('id_pelis')),
        atitulos = JSON.parse(localStorage.getItem('titulo_peli')),
        genero = JSON.parse(localStorage.getItem('gene')),
        protagonista = JSON.parse(localStorage.getItem('nom_protagonista')),
        year = JSON.parse(localStorage.getItem('año')),
        correo = JSON.parse(localStorage.getItem('corre')),
        fecha = JSON.parse(localStorage.getItem('diaFecha'));


    var cantPelis = apelis.lenght;
    for (var i = 0; i < cantPelis; i++) {
        var fila = document.createElement('tr');

        var celdaId = document.createElement('td');
        var celdaTitulo = document.createElement('td');
        var celdaGenero = document.createElement('td');
        var celdaProt = document.createElement('td');
        var celdaYear = document.createElement('td');
        var celdaMail = document.createElement('td');
        var celdaFecha = document.createElement('td');

        var nodoTextoId = document.createTextNode(apelis[i]);
        var nodoTextoTitulos = document.createTextNode(atitulos[i]);
        var nodoTextoGeneros = document.createTextNode(genero[i]);
        var nodoTextoProtagonista = document.createTextNode(protagonista[i]);
        var nodoTextoYear = document.createTextNode(year[i]);
        var nodoTextoCorreo = document.createTextNode(correo[i]);
        var nodoTextoFecha = document.createTextNode(fecha[i]);

        celdaId.appendChild(nodoTextoId);
        celdaTitulo.appendChild(nodoTextoTitulos);
        celdaGenero.appendChild(nodoTextoGeneros);
        celdaProt.appendChild(nodoTextoProtagonista);
        celdaYear.appendChild(nodoTextoYear);
        celdaMail.appendChild(nodoTextoCorreo);
        celdaFecha.appendChild(nodoTextoFecha);

        fila.appendChild(celdaId);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaGenero);
        fila.appendChild(celdaProt);
        fila.appendChild(celdaYear);
        fila.appendChild(celdaMail);
        fila.appendChild(celdaFecha);


        tbody.appendChild(fila);





    }

}