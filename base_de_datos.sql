CREATE DATABASE ssdatabase;
USE ssdatabase;

CREATE TABLE users(
    id INT(11) AUTO_INCREMENT PRIMARY KEY;
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    nombre_usuario VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);