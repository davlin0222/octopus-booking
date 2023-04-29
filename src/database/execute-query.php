<?php

function executeQuery($query, $paramString, $params = null)
{
    require("connection.php");
    $stmt = $connection->prepare($query);
    $stmt->bind_param($paramString, ...$params);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $connection->close();
    return $result;
}
