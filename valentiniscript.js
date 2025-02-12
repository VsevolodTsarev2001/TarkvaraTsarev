document.getElementById('loveButton').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    const message = document.createElement('p');
    message.textContent = 'Ты подарил сердечко!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);

    const audio = document.getElementById('audio');
    audio.play();

    heart.style.transform = 'scale(1)';
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
    }, 1000);
});
document.getElementById('heart').addEventListener('click', function() {
    //Получаем элемент с сердечком
    const heart = document.getElementById('heart');

    //случайный цвет в формате hex
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    //Меняем фона сердца на случайный
    heart.style.backgroundColor = randomColor;
});

document.getElementById('sendGiftButton').addEventListener('click', function() {
    // Создаем новый параграф с текстом
    const message = document.createElement('p');
    message.textContent = 'Подарок отправлен!';

    // Добавляем созданное сообщение на страницу
    document.body.appendChild(message);

    // Через 3 секунды скрываем сообщение
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
});