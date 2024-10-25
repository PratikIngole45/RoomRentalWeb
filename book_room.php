<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "RoomRental";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture data from form (assuming renter fills in their details and the room ID is sent as a hidden input)
$roomId = $_POST['room_id'];
$renterName = $_POST['renter_name'];
$renterEmail = $_POST['renter_email'];

// Insert data into `bookings` table
$sql = "INSERT INTO bookings (room_id, renter_name, renter_email)
VALUES ('$roomId', '$renterName', '$renterEmail')";

if ($conn->query($sql) === TRUE) {
    echo "Room booked successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
