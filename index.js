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

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9PFQKR4rA8th5KjH8qqW1uZkFnGk06I",
  authDomain: "ssdatabase-101dc.firebaseapp.com",
  projectId: "ssdatabase-101dc",
  storageBucket: "ssdatabase-101dc.appspot.com",
  messagingSenderId: "988112471290",
  appId: "1:988112471290:web:708aa7cb7a19ea637c3543",
  measurementId: "G-EF2M6B8NWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita el envío por defecto del formulario
  
      // Obtiene los valores de los campos del formulario
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const nombreUsuario = document.getElementById('nombre_usuario').value;
      const contraseña = document.getElementById('contraseña').value;
  
      // Obtiene una referencia a la base de datos
      const database = firebase.database();
  
      // Añade los datos a la base de datos
      database.ref('usuarios').push({
        nombre: nombre,
        correo: correo,
        nombre_usuario: nombreUsuario,
        contraseña: contraseña
      }).then(() => {
        alert('Registro exitoso!');
      }).catch((error) => {
        console.error('Error:', error);
      });
    });
  });