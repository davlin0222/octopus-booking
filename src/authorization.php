<?php

function authorize()
{
    session_start();
    if (!$_SESSION["isAdmin"]) {
        echo jsonResponse(false, ["message" => "logged in user is not admin"]);
        exit();
    }
}
