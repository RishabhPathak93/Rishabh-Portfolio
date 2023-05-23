<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email parameters
$to = 'your-email@example.com'; // Replace with your email address
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send email
$mailSent = mail($to, $subject, $body, $headers);

// Check if email was sent successfully
if ($mailSent) {
  http_response_code(200);
} else {
  http_response_code(500);
}
