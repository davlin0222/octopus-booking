<?php

require './vendor/PHPMailer-6.8.0/src/PHPMailer.php';
require './vendor/PHPMailer-6.8.0/src/SMTP.php';
require './vendor/PHPMailer-6.8.0/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // specify SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@gmail.com';
    $mail->Password = 'your_email_password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // set email content
    $mail->setFrom('from@example.com', 'From Name');
    $mail->addAddress('to@example.com', 'To Name');
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email';

    // send email
    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo "Error sending email: {$mail->ErrorInfo}";
}
