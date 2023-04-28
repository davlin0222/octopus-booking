<?php

function getRoomNames()
{
    require("src/database/connection.php");

    $query = "SELECT name FROM rooms";
    $stmt = mysqli_prepare($connection, $query);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $roomNames = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_stmt_close($stmt);
    mysqli_close($connection);

    return $roomNames;
}
