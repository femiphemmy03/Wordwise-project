<?php
// Placeholder for form submission (no actual back-end processing required)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // For demo purposes, echo a success message
    echo "Thank you for subscribing, $name! We will notify you at $email.";
}
?>