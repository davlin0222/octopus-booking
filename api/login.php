<?php

require("../src/users.php");
require("../src/api-response.php");
require("../src/error-handler.php");
require("../src/constants.php");

// get the request body as JSON and decode it
$requestBody = json_decode(file_get_contents('php://input'), true);

// sanitize user input
$email = filter_var($requestBody['email'], FILTER_SANITIZE_EMAIL);
$password = filter_var($requestBody['password'], FILTER_SANITIZE_SPECIAL_CHARS);

[$isAuthenticated, $user] = verifyUserCredentials($email, $password);

if (!$isAuthenticated) {
    echo jsonResponse(false);
    exit();
}

session_set_cookie_params([
    'httponly' => true,
    'secure' => true,  // Set to true if using HTTPS
    'samesite' => 'strict',  // Recommended to prevent CSRF attacks
]);
session_start();
$_SESSION["isLoggedIn"] = true;
$_SESSION["isAdmin"] = $user["role_id"] == $ROLE_IDS["admin"];
$_SESSION["user"] = $user;

echo jsonResponse(true, ["user" => $user]);
