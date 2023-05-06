<?php

class Authorize
{
    public static function isAdmin($notAdminCallback)
    {
        if (session_status() == PHP_SESSION_NONE) session_start();
        if (!$_SESSION["isAdmin"]) {
            return $notAdminCallback();
            exit();
        }
    }
    public static function isLoggedIn($notLoggedInCallback)
    {
        if (session_status() == PHP_SESSION_NONE) session_start();
        if (!isset($_SESSION["isLoggedIn"]) || !$_SESSION["isLoggedIn"]) {
            return $notLoggedInCallback();
            exit();
        }
    }
}
