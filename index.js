window.addEventListener('load', function()
{
    var elementos = document.querySelectorAll('.Mayusculas');
    var elementos1 = document.querySelectorAll('.Mayusculas1');
    var elementos2 = document.querySelectorAll('.Mayusculas2');
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
});