//obtenemos el texto por una ID
var titulo = document.getElementById('titulopagina');
var titulo1 = document.getElementById('titulopagina1');
var titulo1_1 = document.getElementById('titulopagina1_1');
//obtenemos el titulo ya identificado
var tituloinden = titulo.innerText;
var tituloinden1 = titulo1.innerText;
var tituloinden1_1 = titulo1_1.innerText;
//creamos un nuevo texto que guardara la mayusculas
var nuevotexto = '';
var nuevotexto1 = '';
var nuevotexto1_1 = '';
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
for(var u = 0; u < tituloinden1.length; u++)
    {
        //verificamos si la letra en si es mayuscula
        if(tituloinden1_1[u] === tituloinden1_1[u].toUpperCase() && tituloinden1_1[u] !== tituloinden1_1[u].toLowerCase())
        {
            //convertimos las letras mayusculas a otro color
            nuevotexto1_1 += '<span style = "color:red;">' + tituloinden1_1[u] + "</span>";
        }
        else
        {
            nuevotexto1_1 += tituloinden1_1[u];
        }
        titulo1_1.innerHTML = nuevotexto1_1;    
}