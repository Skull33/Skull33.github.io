//obtenemos el texto por una ID
var titulo = document.getElementById('titulopagina')
//obtenemos el titulo ya identificado
var tituloinden = titulo.innerText;
//creamos un nuevo texto que guardara la mayusculas
var nuevotexto = '';
//procedemos con la recoleccion r¿de mayuculas
for(var i = 0; i < tituloinden.length; i++)
{
    //verificamos si la letra en si es mayuscula
    if(tituloinden[i] === tituloinden[i].toUpperCase() && tituloinden[i] !== tituloinden[i].toLowerCase())
    {
        //convertimos las letras mayusculas a otro color
        nuevotexto += '<span style = "color:red;">' + tituloinden[i] + "</span>";
    }
    else
    {
        nuevotexto += tituloinden[i];
    }

    titulo.innerHTML = nuevotexto;
}