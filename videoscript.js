// videoscript.js
var sliders = [
  {
    containerId: "slider1",
    images: [
      "images/background/1.Park.png",
      "images/background/2.Park.png",
      "images/background/3.Park.png",
    ],
  },
  {
    containerId: "slider2",
    images: [
      "images/background/2.ParkBohne.png",
      "https://placekitten.com/g/1000/1000",
      "https://placekitten.com/g/400/500",

      "https://placekitten.com/g/1000/900",
    ],
  },
  {
    containerId: "slider3",
    images: [
      "https://placekitten.com/g/780/800",
      "https://placekitten.com/g/5000/4000",
      "https://placekitten.com/g/700/900",
    ],
  },
];
function showImage(sliderIndex, imageIndex) {
  var slider = document.getElementById(sliders[sliderIndex - 1].containerId);
  var sliderImage = slider.querySelector(".slider");
  var changeDecision = slider.querySelector(".change-decision");
  slider.style.display = "block";

  // Check if the slider element exists
  if (!slider) {
    console.error(
      `Slider container with id ${
        sliders[sliderIndex - 1].containerId
      } not found.`
    );
    return;
  } else {
    console.log(
      `Slider container with id ${
        sliders[sliderIndex - 1].containerId
      } has been found.`
    );
    console.log(`Slider img ` + imageIndex);
  }

  sliderImage.src = sliders[sliderIndex - 1].images[imageIndex];
  sliders[sliderIndex - 1].currentIndex = imageIndex;

  var isLastImage = imageIndex === sliders[sliderIndex - 1].images.length - 1;
  var chooseNextSliderButton = slider.querySelector(".choose-next-slider");
  var chooseNextSliderButton2 = slider.querySelector(".nextSlider2");
  var decision = slider.querySelector(".decision");
var nextSliderCont =slider.querySelector(".nextSliderCont");
  var prev = slider.querySelector(".prev");
  var next = slider.querySelector(".next");
  var lastDecision = slider.querySelector(".last-decision");
  var close = slider.querySelector(".close");
 var overlay = slider.querySelector(".overlay");
  var isFirstImage = imageIndex === 0;

  if (isLastImage) {
    chooseNextSliderButton.style.display = "block";
    chooseNextSliderButton2.style.display = "block";
    prev.style.display = "none";
    next.style.display = "none";
    decision.style.display = "block";
    overlay.style.display = "block";
  } else {
    chooseNextSliderButton.style.display = "none";
    chooseNextSliderButton2.style.display = "none";
    decision.style.display = "none";
    prev.style.display = "block";
    next.style.display = "block";
  }
  if (isFirstImage) {
    prev.style.display = "none";
    lastDecision.style.display = "none";
  }
  if (sliderIndex != 1 && isLastImage) {
    lastDecision.style.display = "block";
  }
  if (sliderIndex != 1 && changeDecision != null) {
    changeDecision.style.display = "block";
  }
  if (isLastImage && changeDecision != null) {
    changeDecision.style.display = "none";
  }
  if (close && isLastImage) {
    nextSliderCont.style.gridTemplateColumns = "100%";
    nextSliderCont.style.display = "block";
    close.style.display = "block";
    chooseNextSliderButton.style.display = "none";
    chooseNextSliderButton2.style.display = "none";
    alert("Decision: "+decision.offsetWidth+"    Button: "+close.offsetWidth)
  }
  if (close && !isLastImage) {
    close.style.display = "none";
  }
 
  //Ensure the currentIndex is set properly
  sliders[sliderIndex - 1].currentIndex = imageIndex;
  //   for (let i = 1; i <= sliders.length; i++) {

  //     if (i === sliderIndex) {
  //       // Show the chosen slider
  //       slider.style.display = "block";
  //     } else {
  //       // Hide other sliders
  //       slider.style.display = "none";
  //     }

  // }
}

showImage(1, 0);

function nextImage(sliderIndex) {
  var slider = sliders[sliderIndex - 1];
  var nextIndex = (slider.currentIndex + 1) % slider.images.length;

  // Preload the next image
  var nextImage = new Image();
  nextImage.src = slider.images[nextIndex];

  // Show the next image
  slider.currentIndex = nextIndex;
  showImage(sliderIndex, nextIndex);
}

function prevImage(sliderIndex) {
  var slider = sliders[sliderIndex - 1];
  slider.currentIndex =
    (slider.currentIndex - 1 + slider.images.length) % slider.images.length;
  showImage(sliderIndex, slider.currentIndex);
}

function jumpToLastDecision(sliderIndex) {
  // sliders.style.display = "none";
  var imageIndex = sliders[sliderIndex - 1].images.length - 1;
  // Hide other sliders
  for (let i = 1; i <= sliders.length; i++) {
    if (i !== sliderIndex) {
      var slider = document.getElementById(sliders[i - 1].containerId);
      slider.style.display = "none";
    }
  }
  showImage(sliderIndex, imageIndex);
}

function changeDecision(sliderIndex) {
  var imageIndex = sliders[sliderIndex - 1].images.length - 1;

  // Hide other sliders
  for (let i = 1; i <= sliders.length; i++) {
    if (i !== sliderIndex) {
      var slider = document.getElementById(sliders[i - 1].containerId);
      slider.style.display = "none";
    }
  }

  showImage(sliderIndex, imageIndex);
}

function chooseNextSlider(sliderIndex) {
  // Hide other sliders
  for (let i = 1; i <= sliders.length; i++) {
    if (i !== sliderIndex) {
      var slider = document.getElementById(sliders[i - 1].containerId);
      slider.style.display = "none";
    }
  }
  // Show the first image of the selected slider initially
  showImage(sliderIndex, 0);
}

// Show the first image of the first slider initially
showImage(1, 0);

// // Hide other sliders
// for (let i = 2; i <= sliders.length; i++) {
//   var slider = document.getElementById(sliders[i - 1].containerId);
//   slider.style.display = "none";
// }

// var videoPlayer = document.getElementById('video-player');
// var overlay = document.getElementById('overlay');
var landscapeInstruction = document.getElementById("landscape-instruction");
// var choicesContainer = document.getElementById('choices');
// var playButton = document.getElementById("play-button");

// videoPlayer.addEventListener('ended', function () {
//   // Show overlay with next video options
//   overlay.style.display = 'grid';
// });

// function playNextVideo(nextVideoSource) {
//   // Hide overlay
//   overlay.style.display = "none";

//   // Change video source and play
//   videoPlayer.src = nextVideoSource;
//   videoPlayer.load();
//   videoPlayer.play();
// }

// function startVideo() {
//   // Trigger full-screen mode
//   var videoContainer = document.getElementById("video-container");
//   videoContainer
//     .requestFullscreen()
//     .then(() => {
//       // Once in full-screen mode, play the video
//       videoPlayer.play();
//       videoPlayer.style.pointerEvents ="all";
//       videoPlayer.style.opacity = 1;
//       playButton.style.display = "none"; // Hide the play button
//     })
//     .catch((err) => {
//       console.error("Error attempting to enable full-screen mode:", err);
//     });
// };

// // Detect device orientation and adjust video
// window.addEventListener('orientationchange', function () {
//     var orientation = window.orientation;
//     if (orientation === 90 || orientation === -90) {
//         // Landscape orientation
//         videoPlayer.style.objectFit = 'contain'; // Adjust object fit as needed
//     } else {
//         // Portrait or other orientation
//         videoPlayer.style.objectFit = 'cover'; // Reset to cover
//     }
// });

// Show landscape instruction if not in landscape mode
if (window.innerHeight > window.innerWidth) {
  landscapeInstruction.style.display = "block";
}

function dismissLandscapeInstruction() {
  landscapeInstruction.style.display = "none";
}

// Listen for orientation changes
window.addEventListener("orientationchange", function () {
  if (window.innerHeight > window.innerWidth) {
    landscapeInstruction.style.display = "block";
  } else {
    landscapeInstruction.style.display = "none";
  }
});

// // Function to show interactive choices based on the current video
// function showChoices() {
//     choicesContainer.style.display = 'block';

//     // Clear existing choices
//     choicesContainer.innerHTML = '';

//     // Define choices based on the current video
//     var currentVideoSource = videoPlayer.src;
//     let choices = [];

//     if (currentVideoSource.endsWith('VideoJetskiTour.mp4')) {
//       // Choices for VideoJetskiTour
//       choices = [
//         { label: 'Continue with Fishing', videoSource: 'Fisch.mp4' },
//         { label: 'Explore another Jetski Tour', videoSource: 'VideoJetskiTour.mp4' },
//       ];
//     } else if (currentVideoSource.endsWith('Fisch.mp4')) {
//       // Choices for Fisch
//       choices = [
//         { label: 'Continue Fishing', videoSource: 'Fisch-Part2.mp4' },
//         { label: 'Return to Jetski Tour', videoSource: 'VideoJetskiTour.mp4' },
//       ];
//     }

//     // Create buttons for each choice
//     choices.forEach(choice => {
//       var button = document.createElement('button');
//       button.textContent = choice.label;
//       button.onclick = () => playNextVideo(choice.videoSource);
//       choicesContainer.appendChild(button);
//     });
//   }
