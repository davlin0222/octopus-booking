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
    $query = "SELECT password_hash FROM users WHERE email = ?";
    $result = executeQuery($query, "s", [$email]);

    $user = mysqli_fetch_assoc($result);
    if (!$user) return false;
    $password_hash = $user["password_hash"];

    // If the query returned a result, verify the password hash
    if (password_verify($password, $password_hash)) return true; // credentials are valid

    // If the query did not return a result or the password is invalid
    return false; // credentials are invalid
}
