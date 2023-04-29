<?php

set_error_handler(function ($errorNumber, $errorString, $errorFile, $errorLine) {
    $exception = new ErrorException($errorString, 0, $errorNumber, $errorFile, $errorLine);
    echo errorResponse($exception);
});

function errorResponse($exception)
{
    $response = [
        "success" => false,
        "errorMessage" => $exception->getMessage()
    ];
    return json_encode($response);
}
