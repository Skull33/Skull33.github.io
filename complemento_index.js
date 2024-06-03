var titulo2 = document.getElementById('titulopagina2');
var tituloinden2 = titulo2.innerText;
var nuevotexto2 = '';
for(var j = 0; j < tituloinden2.length; j++)
    {
        //verificamos si la letra en si es mayuscula
        if(tituloinden2[j] === tituloinden2[j].toUpperCase() && tituloinden2[j] !== tituloinden2[j].toLowerCase())
        {
            //convertimos las letras mayusculas a otro color
            nuevotexto2 += '<span style = "color:green;">' + tituloinden2[j] + "</span>";
        }
        else
        {
            nuevotexto2 += tituloinden2[j];
        }
    
        titulo2.innerHTML = nuevotexto2;
    }