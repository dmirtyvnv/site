<?php

// сюда нужно вписать токен вашего бота
define('TELEGRAM_TOKEN', '6216186614:AAFlOgLC2vGzAKW-Q3TMk7HeIt9LfBasGQ0');

// сюда нужно вписать ваш внутренний айдишник
define('TELEGRAM_CHATID', '5205111634');


$name = $_POST['name'];
$phone = $_POST['phone'];
$message = "Заявка на ПЕРЕЗВОН!!!:" . "\n" ."Имя: ". $name . "\n" .
    "Телефон: " . $phone;
message_to_telegram($message);

function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
            ),
        )
    );
    curl_exec($ch);
}
?>