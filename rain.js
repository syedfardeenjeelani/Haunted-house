document.addEventListener('DOMContentLoaded', function () {
  const numRaindrops = 600;

  for (let i = 0; i < numRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.top = `${-Math.random() * window.innerHeight}px`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(raindrop);
  }

  const playButton = document.getElementById('playButton');
  const rainSound = document.getElementById('rainSound');

  if (playButton && rainSound) {
    playButton.addEventListener('click', function () {
      if (rainSound.paused) {
        rainSound.play()
          .then(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
             
            console.log('Audio playback started successfully.');
          })
          .catch(error => {
            console.error('Error starting audio playback:', error);
          });
      } else {
        rainSound.pause();
        rainSound.currentTime = 0;
      }
    });

    // Unmute audio on any user interaction
    document.addEventListener('click', function () {
      rainSound.muted = false;
    });
  } else {
    console.error('Play button or rain sound element not found. Check your HTML.');
  }
});

