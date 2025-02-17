document.getElementById('heartSize').addEventListener('input', function(event) {
    const heart = document.getElementById('heart');
    const newSize = event.target.value;
    heart.style.width = newSize + 'px';
    heart.style.height = newSize + 'px';
});

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
    const heart = document.getElementById('heart');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    heart.style.backgroundColor = randomColor;
});

document.getElementById('sendGiftButton').addEventListener('click', function() {
    const message = document.createElement('p');
    message.textContent = 'Подарок отправлен!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
});
