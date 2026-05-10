document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('backgroundVideo');
    const startTimes = [0, 19.30, 42.10, 64.40];
    const randomIndex = Math.floor(Math.random() * startTimes.length);
    const startTime = startTimes[randomIndex];

    videoElement.addEventListener('loadedmetadata', function() {
        videoElement.currentTime = startTime;
        videoElement.play();
    });
});

// YouTube IFrame API - loads asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var bgVideo = document.getElementById('backgroundVideo');
    new YT.Player('ytPlayer', {
        videoId: 'UQ9VAE629Ec',
        playerVars: {
            rel: 0
        },
        events: {
            onStateChange: function(event) {
                if (event.data === YT.PlayerState.PLAYING) {
                    bgVideo.pause();
                    bgVideo.classList.add('dimmed');
                } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                    bgVideo.play();
                    bgVideo.classList.remove('dimmed');
                }
            }
        }
    });
}

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

