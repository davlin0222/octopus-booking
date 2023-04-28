<?php

require("src/database/connection.php");

$query = "SELECT name from rooms";
$result = mysqli_query($connection, $query);

echo json_encode(mysqli_fetch_all($result));
