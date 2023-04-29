<?php

require("database/execute-query.php");

/**
 * Create a new user
 *
 * @param string $email the email address of the user
 * @param string $password the password of the user
 * @param string $first_name the first name of the user
 * @param string $last_name the last name of the user
 * @param int $role_id the ID of the user's role
 * @param string|null $phone_number the phone number of the user (optional)
 * @return void
 */
function createUser($email, $password, $first_name, $last_name, $phone_number, $role_id)
{
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO users (email, first_name, last_name, password_hash, phone_number, role_id) VALUES (?, ?, ?, ?, ?, ?)";
    executeQuery($query, "ssssss", [$email, $first_name, $last_name, $password_hash, $phone_number, $role_id]);
}

function verifyUserCredentials($email, $password)
{
    $query = "SELECT user_id, email, password_hash, role_id FROM users WHERE email = ?";
    $result = executeQuery($query, "s", [$email]);

    $databaseUser = mysqli_fetch_assoc($result);
    if (!$databaseUser) return false;
    $password_hash = $databaseUser["password_hash"];

    $responseUser = [
        "id" => $databaseUser["user_id"],
        "email" => $databaseUser["email"],
        "role_id" => $databaseUser["role_id"]
    ];

    // If the query returned a result, verify the password hash
    if (password_verify($password, $password_hash)) return [true, $responseUser]; // credentials are valid

    // If the query did not return a result or the password is invalid
    return false; // credentials are invalid
}
