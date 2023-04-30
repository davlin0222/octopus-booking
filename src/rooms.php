<?php

function getRooms()
{
    require("database/connection.php");

    $query = "SELECT room_id, name FROM rooms ORDER BY room_id";
    $stmt = mysqli_prepare($connection, $query);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    $rooms = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $formattedRooms = array_map(function ($room) {
        return [
            "id" => $room["room_id"],
            "name" => $room["name"]
        ];
    }, $rooms);

    mysqli_stmt_close($stmt);
    mysqli_close($connection);

    return $formattedRooms;
}
