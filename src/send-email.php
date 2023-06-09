<?php

require __DIR__ . '/vendor/PHPMailer-6.8.0/src/PHPMailer.php';
require __DIR__ . '/vendor/PHPMailer-6.8.0/src/SMTP.php';
require __DIR__ . '/vendor/PHPMailer-6.8.0/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



function sendEmail($recipient, $subject, $body)
{
    $email = parse_ini_file(
        __DIR__ . "/../php.ini",
        true
    )["email"];

    $mail = new PHPMailer(true);

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
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->setFrom($email["username"], 'Info');
        // $mail->addAddress($recipient, 'Recipient');
        //! Hard coded recipient address
        $hardCodedEmail = $email["username"];
        $mail->addAddress($hardCodedEmail, '');

        // send email
        $mail->send();
        // echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Error sending email: {$mail->ErrorInfo}";
    }
}
