// videoscript.js
var sliders = [
  {
    containerId: "slider1",
    images: [
      "images/carousel/1.Loop-1Tag-Morgensaufwachen.png",
      "images/carousel/2.Loop-1Tag-MorgensSonne.png",
      "images/carousel/3.Loop-1Tag-MorgensSpiegel.png",
      "images/carousel/4.Loop-ErsterTag-AbendsYoga.png",
      "images/carousel/5.Loop_1Tag-AbendsBuchlesen.png",
      "images/carousel/6.Loop_1Tag-Abendsschlafen.png",
      "images/carousel/7.Loop_2Tag-Morgensaufwachen.png",
      "images/carousel/8.Loop_2Tag-AbendsYoga.png",
      "images/carousel/9.Loop_2Tag-AbendsYoga(2).png",
      "images/carousel/10.Loop_2Tag-Abendsschlafen.png",
      "images/carousel/11.Tag3morgens.png",
    ],
  },
  {
    containerId: "slider2",
    images: [
      "images/carousel/Entscheidung1.png",
      "images/carousel/5.Loop_1Tag-AbendsBuchlesen.png",
      "images/carousel/6.Loop_1Tag-Abendsschlafen.png",
      "images/carousel/7.Loop_2Tag-Morgensaufwachen.png",
      "images/carousel/8.Loop_2Tag-AbendsYoga.png",
      "images/carousel/9.Loop_2Tag-AbendsYoga(2).png",
    ],
  },
  {
    containerId: "slider3",
    images: [
      "images/carousel/Loop_2Tag-AbendsYoga-min.jpg",
      "images/carousel/Loop_2Tag-AbendsYoga(2)-min.jpg",
      "images/carousel/Loop_2Tag-Morgensaufwachen-min.jpg",
      "images/carousel/Loop-1Tag-MorgensSonne-min.jpg",
      "images/carousel/Loop-1Tag-MorgensSpiegel-min.jpg",
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
  this.addEventListener("DOMContentLoaded", preloadImages, true);
 
  function preloadImages(e) {
      var imageArray = new Array("path/image.png", "path/image2.png", "path/image3.png");
   
      for (var i = 0; i < imageArray.length; i++) {
          var tempImage = new Image();
          tempImage.src = imageArray[i];
      }
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
  }
  if (close && !isLastImage) {
    close.style.display = "none";
  }
 
  //Ensure the currentIndex is set properly
  sliders[sliderIndex - 1].currentIndex = imageIndex;

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



var landscapeInstruction = document.getElementById("landscape-instruction");
// Show landscape instruction if not in landscape mode
if(screen.availHeight > screen.availWidth){
  landscapeInstruction.style.display = "grid";
  
}

function dismissLandscapeInstruction() {
  landscapeInstruction.style.display = "none";
}

// Listen for orientation changes
window.addEventListener("orientationchange", function () {
  if (window.innerHeight > window.innerWidth) {
    landscapeInstruction.style.display = "grid";
  } else {
    landscapeInstruction.style.display = "none";
  }
});


var trigger = document.querySelector("#trigger");
var cont = document.getElementById("continue");
cont.onclick = function close(){
 console.log("Click");
 trigger.style.display = "none";
}