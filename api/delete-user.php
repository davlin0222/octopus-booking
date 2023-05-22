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

try {
    $userId = $_GET["id"];
    deleteUser($userId);
    echo jsonResponse(true);
} catch (\Throwable $exception) {
    echo JsonErrorResponse($exception);
    exit();
}
