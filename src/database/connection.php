<?php

$database = parse_ini_file(
    __DIR__ . "/../../php.ini",
    true
)["database"];

$connection = mysqli_connect(
    $database["hostname"],
    $database["username"],
    $database["password"],
    $database["database"]
);

return $connection;

if (mysqli_connect_errno()) {
    die("Failed to connect with mySQL: " . mysqli_connect_error());
}
