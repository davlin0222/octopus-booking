<?php
require("../src/database/execute-query.php");

function createBookings($bookings, $date)
{
    if (session_status() == PHP_SESSION_NONE) session_start();
    $userId = $_SESSION["user"]["id"];

    $query = "INSERT INTO bookings (user_id) values (?)";
    [$result, $bookingId] = executeQuery($query, "s", [$userId]);
    $query = "INSERT INTO booking_times (booking_id, room_id, date, hour) values (?,?,?,?)";

    foreach ($bookings as $booking) {
        [$result] = executeQuery($query, "ssss", [$bookingId, $booking["roomId"], $date, $booking["hour"]]);
    }

    return $bookingId;
}

function getBookings($dateString)
{
    $query = "SELECT hour, room_id FROM booking_times WHERE date = ?";
    [$result] = executeQuery($query, "s", [$dateString]);

    $bookings = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $formattedBookings = array_map(function ($booking) {
        return [
            "hour" => $booking["hour"],
            "roomId" => $booking["room_id"],
        ];
    }, $bookings);

    return $formattedBookings;
}
