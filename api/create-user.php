<?php

require("../src/users.php");
require("../src/api-response.php");
require("../src/error-handler.php");
require("../src/constants.php");

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// extract the user data from the request body
$email = $requestBody['email'];
$password = $requestBody['password'];
$firstName = $requestBody['firstName'];
$lastName = $requestBody['lastName'];
$phoneNumber = $requestBody['phoneNumber'];

try {
    // create the user with the extracted data
    createUser($email, $password, $firstName, $lastName, $phoneNumber, $ROLE_IDS["employee"]);
    echo jsonResponse(true);
} catch (\Throwable $exception) {
    echo JsonErrorResponse($exception);
    exit();
}
