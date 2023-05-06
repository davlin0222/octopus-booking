<?php

require("../src/bookings.php");
require("../src/api-response.php");
require("../src/error-handler.php");
// require("../src/constants.php");
require("../src/authorization.php");

Authorize::isLoggedIn(function () {
    echo jsonResponse(
        false,
        ["message" => "user is not logged in"]
    );
});

$dateString = $_GET["date"];

$bookings = getBookings($dateString);

echo jsonResponse(
    true,
    ["bookings" => $bookings, "userId" => $_SESSION["user"]["id"]]
);
