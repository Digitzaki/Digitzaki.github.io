document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('backgroundVideo');
    const startTimes = [0, 23.50];
    const randomIndex = Math.floor(Math.random() * startTimes.length);
    const startTime = startTimes[randomIndex];

    videoElement.addEventListener('loadedmetadata', function() {
        videoElement.currentTime = startTime;
        videoElement.play();
    });
});

function getRandomCharacters(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function updateGlitchText() {
    let glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(function(glitchElement) {
        glitchElement.textContent = getRandomCharacters(5);
    });
}

// Update glitch text every 50 milliseconds (adjust as needed)
setInterval(updateGlitchText, 50);

