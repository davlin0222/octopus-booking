<?php

require("../src/users.php");
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

$users = getUsers();

echo jsonResponse(
    true,
    ["users" => $users]
);
