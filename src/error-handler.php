<?php

set_error_handler(function ($errorNumber, $errorString, $errorFile, $errorLine) {
    $exception = new ErrorException($errorString, 0, $errorNumber, $errorFile, $errorLine);
    respondWithError($exception);
});

function respondWithError($exception)
{
    $response = [
        "success" => false,
        "errorMessage" => $exception->getMessage()
    ];
    echo json_encode($response);
    exit();
}
