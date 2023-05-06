<?php

/**
 * The Authorize class provides methods for checking if a user is logged in and if they have admin privileges.
 */
class Authorize
{
    /**
     * Check if the user is logged in.
     *
     * @param callable $notLoggedInCallback A callback function to be executed if the user is not logged in.
     * @return mixed True if the user is logged in, otherwise the result of the callback function.
     */
    public static function isLoggedIn($notLoggedInCallback)
    {
        if (session_status() == PHP_SESSION_NONE) session_start();
        if (!isset($_SESSION["isLoggedIn"]) || !$_SESSION["isLoggedIn"]) {
            return $notLoggedInCallback();
            exit();
        }
        return true;
    }
    /**
     * Check if the user is an admin.
     *
     * @param callable $notAdminCallback A callback function to be executed if the user is not an admin.
     * @return mixed True if the user is an admin, otherwise the result of the callback function.
     */
    public static function isAdmin($notAdminCallback)
    {
        if (session_status() == PHP_SESSION_NONE) session_start();
        if (!$_SESSION["isAdmin"]) {
            return $notAdminCallback();
            exit();
        }
        return true;
    }
}
