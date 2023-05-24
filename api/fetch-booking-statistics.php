<?php

require("../src/bookings.php");
require("../src/api-response.php");
require("../src/error-handler.php");
// require("../src/constants.php");
require("../src/authorization.php");

Authorize::isAdmin(function () {
    echo jsonResponse(false, ["message" => "logged in user is not admin"]);
    exit();
});

$bookingStatistics = getBookingStatistics();

echo jsonResponse(
    true,
    ["bookingStatistics" => $bookingStatistics]
);
