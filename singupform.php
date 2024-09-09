<?php

$host = "localhost";
$usuario = "root";
$password = "";
$base_de_datos = "SSdatabase";

$conexion = new mysqli($host,$usuario,$password,$base_de_datos);

if($conexion->connect_error)
{
    die("Error en el servidor".$conexion->connect_error);
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$nombre_usuario = $_POST['nombre_usuario'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_BCRYPT);

$sql = "INSERT INTO usuarios (nombre,correo,nombre_usuario,contraseña) VALUES (?,?,?,?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ssss",$nombre,$correo,$nombre_usuario,$contraseña);

if($stmt->execute())
{
    echo "Registrado con exito, bienvenido, $nombre_usuario a SkullStudios";
}
else
{
    "Error".$stmt->error;
}

$stmt->close();
$conexion->close();
?>