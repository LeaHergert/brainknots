// Video JS
const videoPlayer = document.getElementById("video-player");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("play-button");

videoPlayer.addEventListener("ended", function () {
  // Show overlay with next video options
  overlay.style.display = "grid";
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
}