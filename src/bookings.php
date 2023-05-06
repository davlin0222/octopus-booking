<?php
require("../src/database/execute-query.php");

function createBookings($bookings)
{
    if (session_status() == PHP_SESSION_NONE) session_start();
    $userId = $_SESSION["user"]["id"];

    $query = "INSERT INTO bookings (user_id) values (?)";
    [$result, $bookingId] = executeQuery($query, "s", [$userId]);
    $query = "INSERT INTO booking_times (booking_id, room_id, date, hour) values (?,?,?,?)";

    foreach ($bookings as $booking) {
        [$result, $bookingId] = executeQuery($query, "ssss", [$bookingId, $booking["roomId"], "2023-05-06", $booking["hour"]]);
    }

    return $bookingId;
}

function getBookings()
{
    $query = "SELECT hour, room_id FROM booking_times";
    [$result] = executeQuery($query);

    $bookings = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $formattedBookings = array_map(function ($booking) {
        return [
            "hour" => $booking["hour"],
            "roomId" => $booking["room_id"],
        ];
    }, $bookings);

    return $formattedBookings;
}
