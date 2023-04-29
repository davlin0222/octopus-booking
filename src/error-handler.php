<?php

header('Content-Type: application/json');

set_error_handler(function ($errorNumber, $errorString, $errorFile, $errorLine) {
    $exception = new ErrorException($errorString, 0, $errorNumber, $errorFile, $errorLine);
    echo JsonErrorResponse($exception);
    exit();
});

function JsonErrorResponse($exception)
{
    $response = [
        "success" => false,
        "errorMessage" => $exception->getMessage()
    ];
    return json_encode($response);
}
