<?php

function createBookings($bookings)
{
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    $userId = $_SESSION["user"]["id"];

    $query = "INSERT INTO bookings (user_id) values (?)";
    [$result, $bookingId] = executeQuery($query, "s", [$userId]);

    $query = "INSERT INTO booking_times (booking_id) values (?)";
    [$result, $bookingId] = executeQuery($query, "s", [$bookingId]);

    return $bookingId;
}
