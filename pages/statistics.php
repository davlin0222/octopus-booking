<?php
require("../src/authorization.php");
require("../src/redirect.php");

Authorize::isAdmin(function () {
    redirect("booking.php");
});

$pageConfig = [
    "activePage" => "statistics"
];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/dist/main.css">
    <link rel="stylesheet" href="../assets/css/dist/menu.css">
    <link rel="stylesheet" href="../assets/css/dist/profile-viewer.css">
    <link rel="stylesheet" href="../assets/css/dist/user-list.css">
    <link rel="stylesheet" href="../assets/css/dist/footer.css">
    <script src="../components/menu/menu.js" defer type="module"></script>
    <script src="../components/statistics/statistics.js" defer type="module"></script>
    <title>Octopus Booking</title>
</head>

<body>
    <div class="page">
        <?php include("../components/menu/menu.php") ?>

        <main class="page__main">
            <h2 class="heading">Statistics</h2>
            <?php include("../components/statistics/statistics.php") ?>
        </main>

        <?php include("../components/footer/footer.php") ?>
    </div>
</body>

</html>
