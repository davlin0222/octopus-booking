<div class="profile-viewer">
    <?php

    if (session_status() == PHP_SESSION_NONE) session_start();

    $user = $_SESSION["user"];
    echo $user["firstName"] . " " .  $user["lastName"];

    ?>
</div>
