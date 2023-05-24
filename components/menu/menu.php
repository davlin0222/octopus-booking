<?php
if (!isset($pageConfig["activePage"])) {
    $pageConfig["activePage"] = "";
}
?>
<aside class="page__menu menu">
    <div class="menu__container">
        <h1 class="heading">Octopus Booking</h1>
        <nav class="menu__navbar">
            <ul class="menu__nav-list">
                <li class="menu__nav-list__item
                <?php
                if ($pageConfig["activePage"] == "booking") echo "menu__nav-list__item--active";
                ?>
                ">
                    <a class="menu__nav-list__link" href="./booking.php">Booking chart</a>
                </li>
                <?php
                if (session_status() == PHP_SESSION_NONE) session_start();
                if ($_SESSION["isAdmin"]) {
                ?>
                    <li class="menu__nav-list__item
                <?php
                    if ($pageConfig["activePage"] == "user-management") echo "menu__nav-list__item--active";
                ?>
                ">
                        <a class="menu__nav-list__link" href="./user-management.php">User management</a>
                    </li>
                    <li class="menu__nav-list__item
                <?php
                    if ($pageConfig["activePage"] == "statistics") echo "menu__nav-list__item--active";
                ?>
                ">
                        <a class="menu__nav-list__link" href="./statistics.php">Statistics</a>
                    </li>
                <?php
                }
                ?>
                
                <li class="menu__nav-list__item">
                    <button class="menu__nav-list__link" type="button" id="logout-button">Logout</button>
                </li>
            </ul>
        </nav>
        <div class="profile-viewer-container">
            <?php include("profile-viewer/profile-viewer.php"); ?>
        </div>
    </div>
</aside>
