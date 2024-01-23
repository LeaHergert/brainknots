// videoscript.js
var sliders = [
  {
    containerId: "slider1",
    images: [
      "images/carousel/loop/1.Loop-1Tag-MorgensAufwachen.png",
      "images/carousel/loop/2.Loop-1Tag-MorgensSonne.png",
      "images/carousel/loop/3.Loop-1Tag-MorgensSpiegel.png",
      "images/carousel/loop/4.Loop-1Tag-AbendsYoga.png",
      "images/carousel/loop/5.Loop_1Tag-AbendsBuchLesen.png",
      "images/carousel/loop/6.Loop_1Tag-AbendsSchlafen.png",
      "images/carousel/loop/7.Loop_2Tag-MorgensAufwachen.png",
      "images/carousel/loop/8.Loop_2Tag-AbendsYoga.png",
      "images/carousel/loop/9.Loop_2Tag-AbendsBuch.png",
      "images/carousel/loop/10.Loop_2Tag-AbendsSchlafen.png",
      "images/carousel/loop/11.Loop-Tag3morgens.png",
      "images/carousel/loop/11.Loop-Tag3morgens.png",
    ],
  },
  {
    containerId: "slider2",
    images: [
      "images/carousel/Slider2/1.ED1_Beangehtlos.png",
      "images/carousel/Slider2/2.ED1_BeanläuftimPark.png",
      "images/carousel/Slider2/3.ED1_KreuzungEntscheidung.png",
      "images/carousel/Slider2/3.ED1_KreuzungEntscheidung.png",

    ],
  },
  {
    containerId: "slider3",
    images: [
      "images/carousel/Slider3/1.ED-1Bean-meldet-sich-krank.jpg",
      "images/carousel/Slider3/2.Übergangsweise-für-nach-Bean-meldet-sich-krank.jpg",
      "images/carousel/Slider3/2.Übergangsweise-für-nach-Bean-meldet-sich-krank.jpg",

    ],
  },
  {
    containerId: "slider4",
    images: [
      "images/carousel/Slider4/1.ED1.2BeanbetrittdasGebäude..jpg",
      "images/carousel/Slider4/1.ED1.2BeanbetrittdasGebäude..jpg",

    ],
  },
  {
    containerId: "slider5",
    images: [
      "images/carousel/Slider5/1.ED1.1_Bean-verlässt-der-Mut-und-es-entscheidet-sich-nach-Hause-zu-gehen.jpg",
      "images/carousel/Slider5/2.ED1.1_Bean-hat-wässrige-Augen-und-geht-nach-Hause.jpg",
      "images/carousel/Slider5/3.ED1.1_Bean-legt-sich-schlafen-am-Tag.jpg",
      "images/carousel/Slider5/3.ED1.1_Bean-legt-sich-schlafen-am-Tag.jpg"

    ],
  },
  {
    containerId: "slider6",
    images: [
      "images/carousel/Slider6/1.ED1.2_BeankommtnachHause.jpg",
      "images/carousel/Slider6/2..ED1.2.1_BeanliegtimBettundliest.jpg",
      "images/carousel/Slider6/3.ED1.2.1_Sequenz,ende.jpg",
    ],
  },
  {
    containerId: "slider7",
    images: [
      "images/carousel/Slider7/1.Präsentationsersatz_ ED1.2.2_Bean-hat-sich-den-Tag-über-nicht-gut-gefühlt.jpg",
      "images/carousel/Slider7/2.ED1.2.2_Bean-liegt-im-Bett-und-ist-am-Handy.jpg",
      "images/carousel/Slider7/3.ED1.2.2_Bean-ist-am-Handy-und-das-die-ganze-Nacht_Sprung-zu.jpg",
      "images/carousel/Slider7/3.ED1.2.2_Bean-ist-am-Handy-und-das-die-ganze-Nacht_Sprung-zu.jpg",

    ],
  },
];function showImage(sliderIndex, imageIndex) {
  var slider = document.getElementById(sliders[sliderIndex - 1].containerId);
  var sliderImage = slider.querySelector(".slider");
  var changeDecision = slider.querySelector(".change-decision");
  slider.style.display = "block";

  // Check if the slider element exists
  if (!slider) {
    console.error(`Slider container with id ${sliders[sliderIndex - 1].containerId} not found.`);
    return;
  } else {
    console.log(`Slider container with id ${sliders[sliderIndex - 1].containerId} has been found.`);
    console.log(`Slider img ` + imageIndex);
  }

  // Ensure the currentIndex is set properly
  sliders[sliderIndex - 1].currentIndex = imageIndex;

  sliderImage.src = sliders[sliderIndex - 1].images[imageIndex];

  var isLastImage = imageIndex === sliders[sliderIndex - 1].images.length - 1;
  var chooseNextSliderButton = slider.querySelector(".choose-next-slider");
  var chooseNextSliderButton2 = slider.querySelector(".nextSlider2");
  var decision = slider.querySelector(".decision");
  var nextSliderCont = slider.querySelector(".nextSliderCont");
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
}


showImage(1, 0);

function nextImage(sliderIndex) {
  var slider = sliders[sliderIndex - 1];
  var nextIndex = (slider.currentIndex + 1) % slider.images.length;

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
if (screen.availHeight > screen.availWidth) {
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
cont.onclick = function close() {
  console.log("Click");
  trigger.style.display = "none";
}