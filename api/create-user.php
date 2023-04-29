<?php

require("../src/users.php");

// define the employee role ID
$EMPLOYEE_ROLE_ID = 1;

set_error_handler(function ($errorNumber, $errorString, $errorFile, $errorLine) {
    // error was suppressed with the @-operator
    if (0 === error_reporting()) {
        return false;
    }

    $exception = new ErrorException($errorString, 0, $errorNumber, $errorFile, $errorLine);

    $response = [
        "success" => false,
        "errorMessage" => $exception->getMessage()
    ];
    echo json_encode($response);
    exit();
});

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// extract the user data from the request body
$email = $requestBody['email'];
$password = $requestBody['password'];
$firstName = $requestBody['firstName'];
$lastName = $requestBody['lastName'];
$phoneNumber = $requestBody['phoneNumber'];

// create the user with the extracted data
createUser($email, $password, $firstName, $lastName, $phoneNumber, $EMPLOYEE_ROLE_ID);

$response = [
    "success" => true
];
echo json_encode($response);
