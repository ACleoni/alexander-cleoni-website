<?php

    // Only process POST requests
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Remove whitespace from form fields
        $name = strip_tages(trim($_POST['name']));
                                 $name = str_replace(array('\r', '\n'), array(' ',' '),$name);
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = trime($_POST['message']);

        // Check for valid submission
        if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo 'Oops! There was a problem with your submission. Please complete the form and try again.';
            exit;
        }

        // Set recipient email address and subject
        $recipient = 'alexander.cleoni@gmail.com';

        $subject = 'New message from $name';

        // Build email content
        $email_content = 'Name: $name\n';
        $email_content .= 'Email: $email\n\n';
        $email_content .= 'Message: \n$message\n';

        // Build email headers
        $email_headers = 'From: $name <$email>';

        // Send email
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo 'Thank You! Your email has been sent.';
        } else {
            http_response_code(500);
            echo 'Oops! Something went wrong and we could not send your message. Please try again.';
        }

    } else {
        http_response_code(403);
        echo 'There was a problem with your submission, please try again.';
    }

?>