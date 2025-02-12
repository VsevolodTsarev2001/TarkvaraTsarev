document.getElementById('loveButton').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    heart.style.transform = 'scale(1)';
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
    }, 1000);
});
