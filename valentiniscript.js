document.getElementById('loveButton').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    heart.style.transform = 'scale(1)';
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
    }, 1000);
});
// JavaScript nuppudele klõpsamise jaoks
document.getElementById('loveButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Kuvab sõnumi
});