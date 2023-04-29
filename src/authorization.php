<?php

class Authorize
{
    public static function isAdmin($callback)
    {
        session_start();
        if (!$_SESSION["isAdmin"]) {
            return $callback();
            exit();
        }
    }
    public static function isLoggedIn($callback)
    {
        session_start();
        if (!isset($_SESSION["isLoggedIn"]) || !$_SESSION["isLoggedIn"]) {
            return $callback();
            exit();
        }
    }
}
