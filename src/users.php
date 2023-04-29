<?php

require("database/execute-query.php");

function createUser($email, $password, $first_name, $last_name, $role_id, $phone_number)
{
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO users (email, first_name, last_name, password_hash, role_id, phone_number) VALUES (?, ?, ?, ?, ?, ?)";
    executeQuery($query, "ssssss", [$email, $first_name, $last_name, $password_hash, $role_id, $phone_number]);
}
