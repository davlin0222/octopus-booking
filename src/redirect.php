<?php

/**
 * Redirects the user to the specified URL with the specified status code.
 *
 * @param string $url The URL to redirect to.
 * @param bool $permanent Whether the redirect should be permanent (301) or temporary (302).
 * @return void
 */
function redirect($url, $permanent = false)
{
    // Determine the appropriate HTTP status code based on whether the redirect is permanent or temporary.
    if ($permanent) {
        $statusCode = 301;
    } else {
        $statusCode = 302;
    }

    // Set the appropriate HTTP headers and redirect the user to the specified URL.
    header('Location: ' . $url, true, $statusCode);
    die();
}
