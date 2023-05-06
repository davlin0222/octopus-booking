<?php

function createBookings($bookings)
{
    if (session_status() == PHP_SESSION_NONE) session_start();

    $userId = $_SESSION["user"]["id"];

    $query = "INSERT INTO bookings (user_id) values (?)";
    [$result, $bookingId] = executeQuery($query, "s", [$userId]);
    $query = "INSERT INTO booking_times (booking_id, room_id, date, hour) values (?,?,?,?)";

    // echo json_encode($bookings);

    foreach ($bookings as $booking) {
        [$result, $bookingId] = executeQuery($query, "ssss", [$bookingId, $booking["roomId"], "2023-05-06", $booking["hour"]]);
    }

    return $bookingId;
}
