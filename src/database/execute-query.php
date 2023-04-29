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
    // Establish a database connection
    require("connection.php");

    // Prepare the query and bind the parameters
    $stmt = $connection->prepare($query);
    $stmt->bind_param($paramString, ...$params);

    // Execute the query and get the result
    $stmt->execute();
    $result = $stmt->get_result();

    // Close the statement and connection
    $stmt->close();
    $connection->close();

    // Return the query result
    return $result;
}
