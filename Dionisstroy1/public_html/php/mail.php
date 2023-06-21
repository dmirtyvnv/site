<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

$to = "Dionis-stroy24@list.ru";
$from = "SK-DIONIS";
$first_name = $_POST['name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";


$message = "Заявка на ПЕРЕЗВОН!!!:" . "\n" ."Имя: ". $name . "\n" .
    "Телефон: " . $phone;
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами. Подтверждение заявки придет вам на телефон";
echo "<br /><br /><a href='http://dionis-stroy.ru/
'>Вернуться на сайт.</a>";
?>