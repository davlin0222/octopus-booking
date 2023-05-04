<?php

require("../src/users.php");
require("../src/api-response.php");
require("../src/error-handler.php");
// require("../src/constants.php");
require("../src/authorization.php");

Authorize::isAdmin(function () {
    echo jsonResponse(false, ["message" => "logged in user is not admin"]);
    exit();
});

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// sanitize user input
$email = filter_var($requestBody['email'], FILTER_SANITIZE_EMAIL);
$password = filter_var($requestBody['password'], FILTER_SANITIZE_SPECIAL_CHARS);
$firstName = filter_var($requestBody['firstName'], FILTER_SANITIZE_SPECIAL_CHARS);
$lastName = filter_var($requestBody['lastName'], FILTER_SANITIZE_SPECIAL_CHARS);
$phoneNumber = filter_var($requestBody['phoneNumber'], FILTER_SANITIZE_SPECIAL_CHARS);
$roleId = filter_var($requestBody['role_id'], FILTER_SANITIZE_SPECIAL_CHARS);

try {
    // create the user with the extracted data
    createUser($email, $password, $firstName, $lastName, $phoneNumber, $roleId);
    echo jsonResponse(true);
} catch (\Throwable $exception) {
    echo JsonErrorResponse($exception);
    exit();
}
