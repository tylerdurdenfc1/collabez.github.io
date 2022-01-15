<?php
//get data from form  
$name = $_POST['name'];
$contact= $_POST['contact'];
$task= $_POST['task'];

$to = "tanaynagar4@gmail.com";

$subject = "Mail From collaborate";
$txt ="Name = ". $name . "\r\n  Contact = " . $contact . "\r\n Task =" . $task;
$headers = "From: noreply@collaborate.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>