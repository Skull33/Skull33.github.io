window.addEventListener('load', function()
{
    var elementos = document.querySelectorAll('.Mayusculas');
    var elementos1 = document.querySelectorAll('.Mayusculas1');
    var elementos2 = document.querySelectorAll('.Mayusculas2');
    var elementos3 = document.querySelectorAll('.Mayusculas3');
    elementos.forEach(function(elemento)
    {
        elemento.innerHTML = elemento.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
        {
            return '<span style="color: black;">' + match + '</span>';
        });
    });
    elementos1.forEach(function(elemento1)
    {
        elemento1.innerHTML = elemento1.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
        {
            return '<span style="color: green;">' + match + '</span>';
        });
    });
    elementos2.forEach(function(elemento2)
    {
        elemento2.innerHTML = elemento2.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
        {
            return '<span style="color: red;">' + match + '</span>';
        });
    });
    elementos3.forEach(function(elemento3)
    {
        elemento3.innerHTML = elemento3.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
        {
            return '<span style="color: orange;">' + match + '</span>';
        });
    });
});
function mostrarseccion(seccionId)
{
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion)
    {
        seccion.classList.remove('activo');
    });
    var seccionobj = document.getElementById(seccionId);
    seccionobj.classList.add('activo');
}
document.addEventListener('DOMContentLoaded', function()
{
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion)
    {
        seccion.classList.remove('activo');
    });
    document.getElementById('paginamain').classList.add('activo');
});