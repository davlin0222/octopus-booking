<?php

header('Content-Type: application/json');

/**
 * Formats a response as JSON with an optional data payload
 *
 * @param boolean $success Whether the operation was successful
 * @param mixed $data (Optional) Data to include in the response payload
 * @return string The formatted JSON response
 */
function jsonResponse($success, $data = null)
{
    if (!$data) {
        $response = [
            "success" => $success
        ];
        return json_encode($response);
    }

    $response = [
        "success" => $success,
        "data" => $data
    ];
    return json_encode($response);
}
