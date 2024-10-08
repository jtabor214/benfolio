<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Display errors on the web page (useful for debugging)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Log errors to a file called 'error_log' in the same directory
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log'); // Logs errors to error_log file in current directory

// Load environment variables from .env file
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Same form processing logic as before

    $mail = new PHPMailer(true);
    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';  // Set your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['SMTP_USER'];   
        $mail->Password   = $_ENV['SMTP_PASS'];   
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // From and Reply-to setup
        $mail->setFrom('contact@yourdomain.com', 'Contact Form');
        $mail->addReplyTo($email, "$name");

        // Email content
        // (same as previous code)
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
