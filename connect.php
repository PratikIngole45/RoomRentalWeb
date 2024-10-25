<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "RoomRental";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture data from form
$ownerName = $_POST['ownerName'];
$contactNumber = $_POST['contactNumber'];
$email = $_POST['email'];
$roomTitle = $_POST['roomTitle'];
$roomDescription = $_POST['roomDescription'];
$roomPrice = $_POST['roomPrice'];
$roomImage = $_POST['roomImage'];

// Insert data into `rooms` table
$sql = "INSERT INTO rooms (owner_name, contact_number, email, room_title, room_description, room_price, room_image_url)
VALUES ('$ownerName', '$contactNumber', '$email', '$roomTitle', '$roomDescription', '$roomPrice', '$roomImage')";

if ($conn->query($sql) === TRUE) {
    echo "New room listing created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
