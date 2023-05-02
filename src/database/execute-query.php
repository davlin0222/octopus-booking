<?php

/**
 * Executes a database query with the given parameters.
 *
 * @param string $query the SQL query to execute
 * @param string $paramString a string containing the types of the parameters to bind
 * @param array|null $params an array of values to bind to the query parameters, or null if there are no parameters
 *
 * @return mysqli_result|bool the result of the query, or false if the query failed
 */
function executeQuery($query, $paramString, $params = null)
{
    // Check if a query was provided
    if (empty($query)) {
        throw new InvalidArgumentException('Query must be provided');
    }

    // Check if a parameter string was provided
    if (empty($paramString)) {
        throw new InvalidArgumentException('Parameter string must be provided');
    }

    // Establish a database connection
    require("connection.php");

    // Prepare the query and bind the parameters
    $stmt = $connection->prepare($query);

    // Check if the statement could be prepared
    if (!$stmt) {
        throw new RuntimeException('Failed to prepare statement: ' . $connection->error);
    }

    // Bind the parameters
    $stmt->bind_param($paramString, ...$params);

    // Execute the query and get the result
    if (!$stmt->execute()) {
        throw new RuntimeException('Failed to execute query: ' . $stmt->error);
    }
    $result = $stmt->get_result();
    $insertId = mysqli_insert_id($connection);

    // Close the statement and connection
    $stmt->close();
    $connection->close();

    // Return the query result
    return [$result, $insertId];
}
