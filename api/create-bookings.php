<?php

require("../src/authorization.php");
require("../src/bookings.php");
require("../src/api-response.php");
require("../src/error-handler.php");
require("../src/send-email.php");

Authorize::isLoggedIn(function () {
    echo jsonResponse(
        false,
        ["message" => "user is not logged in"]
    );
});

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);
// ? Client data is not sanitized

try {
    // create the user with the extracted data
    $insertId = createBookings($requestBody["bookings"], $requestBody["date"], $requestBody["invitations"]);

    if (session_status() == PHP_SESSION_NONE) session_start();
    $userEmail = $_SESSION["user"]["email"];

    $rawBooking = json_encode($requestBody["bookings"], JSON_PRETTY_PRINT);
    sendEmail($userEmail, "Booking confirmation for {$requestBody["date"]}", "Bookings in json format: \n{$rawBooking}");

    // foreach ($requestBody["invitations"] as $email) {
    //     sendEmail($email, "Meeting invitation {$requestBody["date"]}", "Bookings in json format: \n{$rawBooking}");
    // }

    echo jsonResponse(true, ["insertedId" => $insertId]);
} catch (\Throwable $exception) {
    echo JsonErrorResponse($exception);
    exit();
}
