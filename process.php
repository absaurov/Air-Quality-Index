<?php
// Include the database connection file

$hostName = "localhost";
$userName = "root";
$password = "";
$dbName = "aqi_db";

$conn = mysqli_connect($hostName, $userName, $password, $dbName);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else {
     echo "Connected successfully";
}
// Check if the form is submitted
?>