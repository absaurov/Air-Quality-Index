<?php
session_start();
header('Content-Type: application/json');

// Database configuration
$hostName = "localhost";
$userName = "root";
$password = "";
$dbName = "aqi_db";

// Connect to the database
$conn = new mysqli($hostName, $userName, $password, $dbName);
if ($conn->connect_error) {
    echo json_encode([
        'success' => false,
        'error' => "Connection failed: " . $conn->connect_error
    ]);
    exit;
}

// Handle GET request to fetch AQI data
if (isset($_GET['get_aqi_data'])) {
    $sql = "SELECT id, city, country, aqi FROM air_quality ORDER BY city ASC";
    $result = $conn->query($sql);

    if (!$result) {
        echo json_encode([
            'success' => false,
            'error' => $conn->error
        ]);
        exit;
    }

    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
    exit;
}

// No valid request
http_response_code(400);
echo json_encode([
    'success' => false,
    'error' => 'Invalid request'
]);
exit;
?>