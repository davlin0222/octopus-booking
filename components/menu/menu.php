<aside class="page__menu menu">
    <div class="menu__container">
        <h1 class="heading">Octopus Booking</h1>
        <nav class="menu__navbar">
            <ul class="menu__nav-list">
                <li class="menu__nav-list__item">
                    <a class="menu__nav-list__link" href="./booking.php">Booking chart</a>
                </li>
                <li class="menu__nav-list__item">
                    <a class="menu__nav-list__link" href="./user-management.php">User management</a>
                </li>
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
