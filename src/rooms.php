<?php

function getRoomNames()
{
    require("src/database/connection.php");

    $query = "SELECT name from rooms";
    $result = mysqli_query($connection, $query);

    $roomNames = [];
    while ($roomNames[] = mysqli_fetch_assoc($result)) {
    }

    return $roomNames;
}
