<?php

class Authorize
{
    public static function isAdmin()
    {
        session_start();
        if (!$_SESSION["isAdmin"]) {
            return jsonResponse(false, ["message" => "logged in user is not admin"]);
            exit();
        }
    }
}
