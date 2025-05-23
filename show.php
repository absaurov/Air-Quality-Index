<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AQI Data</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            font-weight: 600;
        }
        table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #e0e0e0;
        }
        th {
            background-color: #2c3e50;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 0.85em;
            letter-spacing: 0.5px;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        tr:nth-child(odd) {
            background-color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        @media (max-width: 768px) {
            th, td {
                padding: 8px 10px;
            }
        }
    </style>
</head>
<body>

<h1>Air Quality Index (AQI) Data</h1>

<table id="aqi-table">
    <thead>
        <tr>
            <th>City</th>
            <th>Country</th>
            <th>AQI</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data will be loaded here by JS -->
    </tbody>
</table>

<script>
function loadAQIData() {
    fetch('request.php?get_aqi_data=1')
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector('#aqi-table tbody');
        tbody.innerHTML = '';

        data.forEach(city => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${city.city}</td>
                <td>${city.country}</td>
                <td>${city.aqi}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(err => {
        alert('Failed to load AQI data');
        console.error(err);
    });
}

loadAQIData();
</script>

</body>
</html>
<?php
// Close the database connection
$conn->close();
?>
