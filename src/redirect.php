<?php

// https://stackoverflow.com/questions/768431/how-do-i-make-a-redirect-in-php
// 301 - permanent (e.g route to resource moved)
// 302 - temporary (e.g redirect because not authorized)
function redirect($url, $permanent = false)
{
    if ($permanent) {
        $statusCode = 301;
    } else {
        $statusCode = 302;
    }
    header('Location: ' . $url, true, $statusCode);
    die();
}
