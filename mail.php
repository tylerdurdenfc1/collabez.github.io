<?php
//get data from form  

$message_sent = false;
if (isset($_POST['task']) && $_POST['task'] != ''){

$name = $_POST['name'];
$info = $_POST['info'];
$contact= $_POST['contact'];
$task= $_POST['task'];

$mailTo = "tanaynagar4@gmail.com";
$headers = "From: ".$name;

$txt ="name =". $name . "\r\n info = " . $info . "\r\n contact =" . $contact ." \r\n task =". $task;

//$headers = "From: noreply@collabnow.com" . "\r\n" .

//"CC: somebodyelse@example.com";

if($contact!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect

header("Location:businesses.html");

$message_sent= true;
}

?>                              