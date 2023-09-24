<?php
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $correo . "\r\n";
$mensaje .= "El asunto es: " . $asunto . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'robinzon.m.g.f@gmail.com';
$asunto = 'Mensaje desde mi Página Web DCT.';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:contacto.html')
?>