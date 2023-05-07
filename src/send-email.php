<?php

require './vendor/PHPMailer-6.8.0/src/PHPMailer.php';
require './vendor/PHPMailer-6.8.0/src/SMTP.php';
require './vendor/PHPMailer-6.8.0/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// create a new PHPMailer instance
$mail = new PHPMailer(true);


$email = parse_ini_file(
    __DIR__ . "/../php.ini",
    true
)["email"];

try {
    // specify SMTP settings
    $mail->isSMTP();
    $mail->Host = $email["host"];
    $mail->SMTPAuth = true;
    $mail->Username = $email["username"];
    $mail->Password = $email["password"];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // set email content
    $mail->setFrom($email["username"], 'Info');
    $mail->addAddress($email["testAddress"], 'David');
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email';

    // send email
    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo "Error sending email: {$mail->ErrorInfo}";
}
