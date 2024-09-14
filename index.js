window.addEventListener('load', function()
{
    var elementos = document.querySelectorAll('.Mayusculas');
    var elementos1 = document.querySelectorAll('.Mayusculas1');
    var elementos2 = document.querySelectorAll('.Mayusculas2');
    var elementos3 = document.querySelectorAll('.Mayusculas3');
    var elementos4 = document.querySelectorAll('.Mayusculas4');
    var elementos5 = document.querySelectorAll('.Mayusculas5');
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
    elementos4.forEach(function(elemento4)
    {
        elemento4.innerHTML = elemento4.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
        {
            return '<span style="color: #ffffff;">' + match + '</span>';
        });
    });
    elementos5.forEach(function(elemento5)
    {
        elemento5.innerHTML = elemento5.innerHTML.replace(/[A-ZÁÉÍÓÚÜÑ]/g, function(match)
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

document.getElementById('register_form').addEventListener('submit',function(evento)
{
    evento.preventDefault();

    const formData = new FormData(this);

    fetch('database/singupform.php',
    {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data =>
    {
        document.getElementById('mensaje_rpta').innerHTML = data;
    })
    .catch(error =>
    {
        document.getElementById('mensaje_rpta').innerHTML = 'Error en el formulario, envialo otra vez';
    });
});