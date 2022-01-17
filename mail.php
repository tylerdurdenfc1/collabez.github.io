<?php
//get data from form  
$name = $_POST['name'];
$info = $_POST['info'];
$contact= $_POST['contact'];
$task= $_POST['task'];

$to = "tanaynagar4@gmail.com";

$subject = "Mail From collabnow";
$txt ="Name = ". $name . "/r/n info = " . $info . "\r\nContact =" . $contact . "\r\nTask =" . $task;

$headers = "From: noreply@collabnow.com" . "\r\n" .

"CC: somebodyelse@example.com";

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:businesses.html");
?>                              