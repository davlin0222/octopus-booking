<?php

require("../src/users.php");

// define the employee role ID
$EMPLOYEE_ROLE_ID = 1;

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// extract the user data from the request body
$email = $requestBody['email'] ?? '';
$password = $requestBody['password'] ?? '';
$firstName = $requestBody['firstName'] ?? '';
$lastName = $requestBody['lastName'] ?? '';
$phoneNumber = $requestBody['phoneNumber'] ?? '';

// create the user with the extracted data
createUser($email, $password, $firstName, $lastName, $phoneNumber, $EMPLOYEE_ROLE_ID);
