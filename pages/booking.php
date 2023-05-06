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
    <link rel="stylesheet" href="../assets/css/dist/main.css">
    <link rel="stylesheet" href="../assets/css/dist/booking-chart.css">
    <link rel="stylesheet" href="../assets/css/dist/booking-form.css">
    <link rel="stylesheet" href="../assets/css/dist/menu.css">
    <link rel="stylesheet" href="../assets/css/dist/date-selector.css">
    <script src="../components/booking-chart/booking-chart.js" defer type="module"></script>
    <script src="../components/booking-form/booking-form.js" defer type="module"></script>
    <script src="../components/menu/menu.js" defer type="module"></script>
    <title>Octopus Booking</title>
</head>

<body>
    <div class="page">
        <?php include("../components/menu/menu.php") ?>

        <main class="page__main">
            <?php include("../components/date-selector/date-selector.php") ?>
            <?php include("../components/booking-chart/booking-chart.php") ?>
            <?php include("../components/booking-form/booking-form.php") ?>
        </main>
    </div>
</body>

</html>
