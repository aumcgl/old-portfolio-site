
<?php
//CREDIT TO: https://css-tricks.com/snippets/php/send-email //

        // from the form
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message = htmlentities($_POST['message']);

       // set here
       $subject = "Contact form submitted!";
       $to = 'ausmcg335ej@gmail.com';

       $body = <<<HTML
       $message 
       HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
       header('Location: /contact.html');
?>