document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yey.html';
});

document.getElementById('noBtn').addEventListener('click', function() {
    let randomX = Math.random() * (window.innerWidth - 100); // Subtracting 100 to ensure it doesn't go off the screen
    let randomY = Math.random() * (window.innerHeight - 50); // Subtracting 50 to ensure it doesn't go off the screen
    document.getElementById('noBtn').style.left = `${randomX}px`;
    document.getElementById('noBtn').style.top = `${randomY}px`;
});
document.getElementById('reminderBtn').addEventListener('click', function() {
    window.location.href = 'reminder.html';
});
function redirectToReminder() {
    window.location.href = './reminder.html';
}

function goBackToYey() {
    window.location.href = './yey.html';
}
document.getElementById('okBtn').addEventListener('click', function() {
    window.location.href = 'birthday.html';
});
document.getElementById('okBtn').addEventListener('click', function() {
    navigateToBirthday();
});

function navigateToBirthday() {
    window.location.href = 'birthday.html';
}