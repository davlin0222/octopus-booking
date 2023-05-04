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
    public static function isLoggedIn($callbackIfNotLoggedIn)
    {
        session_start();
        if (!isset($_SESSION["isLoggedIn"]) || !$_SESSION["isLoggedIn"]) {
            return $callbackIfNotLoggedIn();
            exit();
        }
    }
}
