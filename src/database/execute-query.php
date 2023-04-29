<?php

function executeQuery($query, $params = null)
{
    require("connection.php");

    $stmt = $connection->prepare($query);

    if ($params) {
        $stmt->bind_param(str_repeat("s", count($params)), ...$params);
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $connection->close();
    return $result;
}
