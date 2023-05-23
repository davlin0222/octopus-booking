<?php
require("../src/authorization.php");
require("../src/redirect.php");

Authorize::isAdmin(function () {
    redirect("booking.php");
});

$pageConfig = [
    "activePage" => "user-management"
]
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
    <script src="../components/user-list/user-list.js" defer type="module"></script>
    <title>Octopus Booking</title>
</head>

<body>
    <div class="page">
        <?php include("../components/menu/menu.php") ?>

        <main class="page__main">
            <h2 class="heading">User Management</h2>
            <div class="sub-page-nav">
                <a href="register-user.php" class="sub-page-nav__link">Register a new user</a>
            </div>
            <?php include("../components/user-list/user-list.php") ?>
        </main>

        <?php include("../components/footer/footer.php") ?>
    </div>
</body>

</html>
