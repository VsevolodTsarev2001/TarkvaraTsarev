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
