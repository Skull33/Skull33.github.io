<?php

$host = "localhost";
$usuario = "root";
$password = "";
$base_de_datos = "ssdatabase";

$conexion = new mysqli($host,$usuario,$password,$base_de_datos);

if($conexion->connect_error)
{
    die("Error en el servidor".$conexion->connect_error);
}

// Depura los datos recibidos
var_dump($_POST);

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$nombre_usuario = isset($_POST['nombre_usuario']) ? $_POST['nombre_usuario'] : '';
$contraseña = isset($_POST['contraseña']) ? $_POST['contraseña'] : '';

// Verifica si los datos se recibieron correctamente
if (empty($nombre) || empty($correo) || empty($nombre_usuario) || empty($contraseña)) {
    die("Error: Todos los campos son requeridos.");
}

$contraseña = password_hash($contraseña, PASSWORD_BCRYPT);

$sql = "INSERT INTO usuarios (nombre,correo,nombre_usuario,contraseña) VALUES (?,?,?,?)";
$stmt = $conexion->prepare($sql);

if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conexion->error);
}

$stmt->bind_param("ssss", $nombre, $correo, $nombre_usuario, $contraseña);

if($stmt->execute())
{
    echo "Registrado con exito, bienvenido, $nombre_usuario a SkullStudios";
}
else
{
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conexion->close();
?>