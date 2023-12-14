// videoscript.js

const videoPlayer = document.getElementById('video-player');
const overlay = document.getElementById('overlay');
const landscapeInstruction = document.getElementById('landscape-instruction');
const choicesContainer = document.getElementById('choices');
const playButton = document.getElementById("play-button");

videoPlayer.addEventListener('ended', function () {
  // Show overlay with next video options
  overlay.style.display = 'grid';
});

function playNextVideo(nextVideoSource) {
  // Hide overlay
  overlay.style.display = "none";

  // Change video source and play
  videoPlayer.src = nextVideoSource;
  videoPlayer.load();
  videoPlayer.play();
}

function startVideo() {
  // Trigger full-screen mode
  const videoContainer = document.getElementById("video-container");
  videoContainer
    .requestFullscreen()
    .then(() => {
      // Once in full-screen mode, play the video
      videoPlayer.play();
      videoPlayer.style.pointerEvents ="all";
      videoPlayer.style.opacity = 1;
      playButton.style.display = "none"; // Hide the play button
    })
    .catch((err) => {
      console.error("Error attempting to enable full-screen mode:", err);
    });
};

// Detect device orientation and adjust video
window.addEventListener('orientationchange', function () {
    const orientation = window.orientation;
    if (orientation === 90 || orientation === -90) {
        // Landscape orientation
        videoPlayer.style.objectFit = 'contain'; // Adjust object fit as needed
    } else {
        // Portrait or other orientation
        videoPlayer.style.objectFit = 'cover'; // Reset to cover
    }
});

// Show landscape instruction if not in landscape mode
if (window.innerHeight > window.innerWidth) {
    landscapeInstruction.style.display = 'block';
}

function dismissLandscapeInstruction() {
    landscapeInstruction.style.display = 'none';
}

// Listen for orientation changes
window.addEventListener('orientationchange', function () {
    if (window.innerHeight > window.innerWidth) {
        landscapeInstruction.style.display = 'block';
    } else {
        landscapeInstruction.style.display = 'none';
    }
});

// Function to show interactive choices based on the current video
function showChoices() {
    choicesContainer.style.display = 'block';
  
    // Clear existing choices
    choicesContainer.innerHTML = '';
  
    // Define choices based on the current video
    const currentVideoSource = videoPlayer.src;
    let choices = [];
  
    if (currentVideoSource.endsWith('VideoJetskiTour.mp4')) {
      // Choices for VideoJetskiTour
      choices = [
        { label: 'Continue with Fishing', videoSource: 'Fisch.mp4' },
        { label: 'Explore another Jetski Tour', videoSource: 'VideoJetskiTour.mp4' },
      ];
    } else if (currentVideoSource.endsWith('Fisch.mp4')) {
      // Choices for Fisch
      choices = [
        { label: 'Continue Fishing', videoSource: 'Fisch-Part2.mp4' },
        { label: 'Return to Jetski Tour', videoSource: 'VideoJetskiTour.mp4' },
      ];
    }
  
    // Create buttons for each choice
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.label;
      button.onclick = () => playNextVideo(choice.videoSource);
      choicesContainer.appendChild(button);
    });
  }