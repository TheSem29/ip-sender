const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Настройки почты (замени на свои, если вдруг у тебя есть почта)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aaaaaaaaaaaaaaaa1541@gmail.com', // Тут твой email (если он есть)
        pass: '1801_angel' // Тут твой пароль (но ты его, конечно, забыл)
    }
});

app.get('/', (req, res) => {
    const ip = req.ip || req.connection.remoteAddress;
    
    const mailOptions = {
        from: 'aaaaaaaaaaaaaaaa1541@gmail.com',
        to: 'aaaaaaaaaaaaaaaa1541@gmail.com', // Куда слать (опять же, если ты не забыл)
        subject: 'Твой IP, лузер',
        text: `Вот твой IP: ${ip}. Да, даже бегемот справился бы с этим.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(`Ошибка, кретин: ${error.message}`);
        } else {
            res.send('Письмо отправлено! Проверь почту (если ты её помнишь).');
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
