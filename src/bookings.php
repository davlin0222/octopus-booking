<?php
require("../src/database/execute-query.php");

function getBookings($dateString)
{
    $query =
        "SELECT bt.hour, bt.room_id, b.user_id, u.first_name,u.last_name, u.email  
        FROM booking_times bt
        INNER JOIN bookings b ON b.booking_id = bt.booking_id
        INNER JOIN users u ON u.user_id = b.user_id
        WHERE bt.date = ?";
    [$result] = executeQuery($query, "s", [$dateString]);

    $bookings = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $formattedBookings = array_map(function ($booking) {
        $user = [
            "firstName" => $booking["first_name"],
            "lastName" => $booking["last_name"],
            "email" => $booking["email"]
        ];
        return [
            "hour" => $booking["hour"],
            "roomId" => $booking["room_id"],
            "userId" => $booking["user_id"],
            "user" => $user
        ];
    }, $bookings);

    return $formattedBookings;
}

function createBookings($bookings, $date, $invitations)
{
    if (session_status() == PHP_SESSION_NONE) session_start();
    $userId = $_SESSION["user"]["id"];

    $hours = array_column($bookings, 'hour');
    $uniqueHours = array_unique($hours);
    $hasDuplicateHours = count($hours) !== count($uniqueHours);

    if ($hasDuplicateHours) return;

    $bookingsQuery = "INSERT INTO bookings (user_id) values (?)";
    [$result, $bookingId] = executeQuery($bookingsQuery, "s", [$userId]);
    $bookingTimesQuery = "INSERT INTO booking_times (booking_id, room_id, date, hour) values (?,?,?,?)";
    $bookingInvitationsQuery = "INSERT INTO booking_invitations (booking_id, user_id) values (?,?)";

    foreach ($bookings as $booking) {
        [$result] = executeQuery($bookingTimesQuery, "ssss", [$bookingId, $booking["roomId"], $date, $booking["hour"]]);
    }
    foreach ($invitations as $invitation) {
        [$result] = executeQuery($bookingInvitationsQuery, "ss", [$bookingId, $invitation["userId"]]);
    }

    return $bookingId;
}

function cancelBookings($bookings, $date)
{
    $query = "DELETE FROM booking_times WHERE date = ? AND hour = ? AND room_id = ? LIMIT 1";

    foreach ($bookings as $booking) {
        [$result] = executeQuery($query, "sss", [$date, $booking["hour"], $booking["roomId"]]);
    }
    return $result;
}
