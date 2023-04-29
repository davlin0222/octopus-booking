<?php

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
