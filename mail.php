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

//$headers = "From: noreply@collabway.com" . "\r\n" .

//"CC: somebodyelse@example.com";

if($contact!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect

header("Location:businesses.html?mailsend");

$message_sent= true;
    
}


?>          

<?php
    if($message_sent):
    ?>

        <h3>Thanks, we'll be in touch</h3>


    <?php
    else:
    ?>

<?php
        endif;
        ?>
