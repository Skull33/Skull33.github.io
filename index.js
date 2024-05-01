//obtenemos el texto por una ID
var titulo = document.getElementById('titulopagina')
var titulo1 = document.getElementById('titulopagina1')
var titulo2 = document.getElementById('titulopagina2')
//obtenemos el titulo ya identificado
var tituloinden = titulo.innerText;
var tituloinden1 = titulo1.innerText;
var tituloinden2 = titulo2.innerText;
//creamos un nuevo texto que guardara la mayusculas
var nuevotexto = '';
var nuevotexto1 = '';
var nuevotexto2 = '';
//procedemos con la recoleccion r¿de mayuculas
for(var i = 0; i < tituloinden.length; i++)
{
    //verificamos si la letra en si es mayuscula
    if(tituloinden[i] === tituloinden[i].toUpperCase() && tituloinden[i] !== tituloinden[i].toLowerCase())
    {
        //convertimos las letras mayusculas a otro color
        nuevotexto += '<span style = "color:black;">' + tituloinden[i] + "</span>";
    }
    else
    {
        nuevotexto += tituloinden[i];
    }

    titulo.innerHTML = nuevotexto;
}
for(var o = 0; o < tituloinden1.length; o++)
{
    //verificamos si la letra en si es mayuscula
    if(tituloinden1[o] === tituloinden1[o].toUpperCase() && tituloinden1[o] !== tituloinden1[o].toLowerCase())
    {
        //convertimos las letras mayusculas a otro color
        nuevotexto1 += '<span style = "color:red;">' + tituloinden1[o] + "</span>";
    }
    else
    {
        nuevotexto1 += tituloinden1[o];
    }

    titulo1.innerHTML = nuevotexto1;
}
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