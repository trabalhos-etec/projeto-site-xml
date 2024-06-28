<?php
$host = "localhost";
$dbname = "site_pw";
$user = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Banco de dados está funcionando.<br>";

    $rows = $conn->query("SELECT username FROM users");
    foreach($rows as $row) {
        echo "<br>"."nome: ".$row['username'];
    }
} catch(PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
