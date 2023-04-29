<?php
require("../src/authorization.php");
require("../src/redirect.php");

Authorize::isLoggedIn(function () {
    redirect("login.php");
});
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Octopus Booking</title>
</head>

<body>
    <h1>Octopus Booking</h1>
</body>

</html>
