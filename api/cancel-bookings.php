<?php

require("../src/authorization.php");
require("../src/bookings.php");
require("../src/api-response.php");
require("../src/error-handler.php");

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
    $insertId = cancelBookings($requestBody["bookings"], $requestBody["date"]);
    echo jsonResponse(true);
} catch (\Throwable $exception) {
    echo JsonErrorResponse($exception);
    exit();
}
