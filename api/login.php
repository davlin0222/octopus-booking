<?php

require("../src/users.php");
require("../src/api-response.php");
require("../src/error-handler.php");

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// extract the user data from the request body
$email = $requestBody['email'];
$password = $requestBody['password'];

$isAuthenticated = verifyUserCredentials($email, $password);

echo var_dump($isAuthenticated);
