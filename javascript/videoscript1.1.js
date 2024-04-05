// videoscript.js
var sliders = [
  {
    containerId: "slider1",
    images: [
      {src: "images/carousel/loop/1.Loop-1Tag-MorgensAufwachen.png", alt: 'Triggerwarnung: interaktive Geschichte behandelt Themen rund um Depressionen, emotionale Belastungen und mentale Gesundheit.Die Handlung kann intensive Gefühle und persönliche Erfahrungen hervorrufen.Wenn du dich in einer sensiblen Verfassung befindest oder Hilfe benötigst, bitte setze das Erlebnis nicht fort.Deine mentale Gesundheit hat oberste Priorität.'},
      { src: "images/carousel/loop/2.Loop-1Tag-MorgensSonne.png", alt: 'Das Bild zeigt eine lila Cartoon Bohne namens Bean schlafend in seinem Bett in einem gemütlich eingerichteten Zimmer. Das Zimmer hat Holzboden und einen großen Teppich in der Mitte. Ein Bett mit grüner Bettwäsche steht rechts, mit einem hölzernen Kopfteil und einem Nachttisch mit einem Wecker darauf. Eine große Topfpflanze befindet sich links neben einem Bücherregal ganz rechts im Bild. Vor dem Bücherregal befindet sich ein Schreibtisch mit Papieren und Stiften sowie ein grüner Stuhl. Der Wecker klingelt, die Sonne geht auf. Der Text auf dem Bild: Beans Augen öffnen sich, nachdem es vom vertrauten Summen des Weckers erwacht. Ein neuer Tag beginnt. Langsam setzt es sich auf den Bettrand, reckt und streckt sich, so wie jeden Morgen.“' },
      { src: "images/carousel/loop/3.Loop-1Tag-MorgensSpiegel.png", alt: 'Das Bild zeigt Bean lächelnd in dem gemütlich eingerichteten Zimmer. Bean schaut in den Spiegel neben der Tür. Durch ein geöffnetes Fenster mit gelben Vorhängen strömt Sonnenlicht in den Raum und schafft eine warme Atmosphäre. Der Text unten im Bild lautet: “Es wirft noch einen Blick in den Spiegel und es geht munter los in Richtung Alltag.” ' },
      { src: "images/carousel/loop/4.Loop-1Tag-AbendsYoga.png", alt: 'Das Bild zeigt das gemütlich eingerichtetes Zimmer. In der Mitte des Raums befindet sich Bean auf einer Yogamatte und eine Yoga-Pose einnimmt. Durch das Fenster sieht man einen Nachthimmel mit einer Mondsichel. Der Text unten im Bild lautet: “Nach einem langen Tag kehrt Bean zurück in sein Zimmer. Die vielen Eindrücke des Tages verarbeitet es in einer energiegeladenen Yoga-Einheit, wobei es den Alltagsstress mit jeder Pose, in die es übergeht, zunehmend hinter sich lässt.“' },
      { src: "images/carousel/loop/5.Loop_1Tag-AbendsBuchLesen.png", alt: 'Bean liegt auf dem Bett und liest ein Buch. Das Fenster mit gelben Vorhängen, enthüllt den Nachthimmel mit einer Mondsichel. Der Text unten im Bild lautet: “Um den Tag ruhig ausklingen zu lassen, liest es noch einige Kapitel seines Buchs…“' },
      { src: "images/carousel/loop/6.Loop_1Tag-AbendsSchlafen.png", alt: 'Bean liegt schlafend im Bett, der Mond scheint durch das Fenster. Der Text oben im Bild lautet:“... bevor ihm müde die Augen zufallen und es in seinen wohlverdienten Schlaf fällt“' },
      { src: "images/carousel/loop/7.Loop_2Tag-MorgensAufwachen.png", alt: 'Bean liegt schlafend im Bett, die Sonne geht vor dem Fenster auf. In einer Gedankenwolke über Beans Kopf steht: “ Der Wecker klingelt. Beans erster Gedanke: jetzt noch nicht, ich will noch nicht in den Tag starten.“  Der Text unten im Bild lautet: “Als der Wecker das zweite Mal klingelt, setzt Bean sich zögernd auf, reckt und streckt sich kurz, dabei reibt es sich verschlafen die Augen. Ein Blick auf die Uhr verrät ihm, dass es durch das längere Schlafen wertvolle Zeit verloren hat. Hektisch muss es seine Sachen zusammensuchen und stürzt aus der Tür.“' },
      { src: "images/carousel/loop/8.Loop_2Tag-AbendsYoga.png", alt: 'Das Bild zeigt das gemütlich eingerichtetes Zimmer. In der Mitte des Raums befindet sich Bean auf einer Yogamatte und eine Yoga-Pose einnimmt. Durch das Fenster sieht man einen Abendhimmel mit einer Mondsichel. Bean sieht unglücklich aus und über seinem Kopf ist eine Gedankenwolke mit Gekritzel darin. Der Text oben im Bild lautet: “Nach einem langen Tag kehrt Bean zurück ins Zimmer. Es lehnt sich gegen die verschlossene Tür und nimmt einen tiefen Atemzug. Was für ein anstrengender Tag das war. Um den Kopf freizubekommen, startet Bean eine Yoga-Session, doch kommt dabei einfach nicht so zu Ruhe. Seine Gedanken wandern die ganze Zeit umher und es kann sich nicht konzentrieren. Bean merkt, dass es heute nicht bei der Sache ist und beendet die Einheit vorzeitig.“ ' },
      { src: "images/carousel/loop/9.Loop_2Tag-AbendsBuch.png", alt: 'Der Text oben im Bild lautet: “Nach einem langen Tag kehrt Bean zurück ins Zimmer. Es lehnt sich gegen die verschlossene Tür und nimmt einen tiefen Atemzug. Was für ein anstrengender Tag das war. Um den Kopf freizubekommen, startet Bean eine Yoga-Session, doch kommt dabei einfach nicht so zu Ruhe. Seine Gedanken wandern die ganze Zeit umher und es kann sich nicht konzentrieren. Bean merkt, dass es heute nicht bei der Sache ist und beendet die Einheit vorzeitig.“' },
      { src: "images/carousel/loop/10.Loop_2Tag-AbendsSchlafen.png", alt: '' },
      { src: "images/carousel/loop/11.Loop-Tag3morgens.png", alt: '' },
      { src: "images/carousel/loop/11.Loop-Tag3morgens.png", alt: '' },
    ],
  },
  {
    containerId: "slider2",
    images: [
      { src: "images/carousel/Slider2/1.ED1_Beangehtlos.png", alt: '' },
      { src: "images/carousel/Slider2/2.ED1_BeanläuftimPark.png", alt: '' },
      { src: "images/carousel/Slider2/3.ED1_KreuzungEntscheidung.png", alt: '' },
      { src: "images/carousel/Slider2/3.ED1_KreuzungEntscheidung.png", alt: '' },

    ],
  },
  {
    containerId: "slider3",
    images: [
      { src: "images/carousel/Slider3/1.ED-1Bean-meldet-sich-krank.jpg", alt: '' },
      { src: "images/carousel/Slider3/2.Übergangsweise-für-nach-Bean-meldet-sich-krank.jpg", alt: '' },
      { src: "images/carousel/Slider3/2.Übergangsweise-für-nach-Bean-meldet-sich-krank.jpg", alt: '' },

    ],
  },
  {
    containerId: "slider4",
    images: [
      { src: "images/carousel/Slider4/1.ED1.2BeanbetrittdasGebäude..jpg", alt: '' },
      { src: "images/carousel/Slider4/1.ED1.2BeanbetrittdasGebäude..jpg", alt: '' },

    ],
  },
  {
    containerId: "slider5",
    images: [
      { src: "images/carousel/Slider5/1.ED1.1_Bean-verlässt-der-Mut-und-es-entscheidet-sich-nach-Hause-zu-gehen.jpg", alt: '' },
      { src: "images/carousel/Slider5/2.ED1.1_Bean-hat-wässrige-Augen-und-geht-nach-Hause.jpg", alt: '' },
      { src: "images/carousel/Slider5/3.ED1.1_Bean-legt-sich-schlafen-am-Tag.jpg", alt: '' },
      { src: "images/carousel/Slider5/3.ED1.1_Bean-legt-sich-schlafen-am-Tag.jpg", alt: '' },

    ],
  },
  {
    containerId: "slider6",
    images: [
      { src: "images/carousel/Slider6/1.ED1.2_BeankommtnachHause.jpg", alt: '' },
      { src: "images/carousel/Slider6/2..ED1.2.1_BeanliegtimBettundliest.jpg", alt: '' },
      { src: "images/carousel/Slider6/3.ED1.2.1_Sequenz,ende.jpg", alt: '' },
    ],
  },
  {
    containerId: "slider7",
    images: [
      { src: "images/carousel/Slider7/1.Praesentationsersatz_ED1.2.2_Bean-hat-sich-den-Tag-über.jpg", alt: '' },
      { src: "images/carousel/Slider7/2.ED1.2.2_Bean-liegt-im-Bett-und-ist-am-Handy.jpg", alt: '' },
      { src: "images/carousel/Slider7/3.ED1.2.2_Bean-ist-am-Handy-und-das-die-ganze-Nacht_Sprung-zu.jpg", alt: '' },
      { src: "images/carousel/Slider7/3.ED1.2.2_Bean-ist-am-Handy-und-das-die-ganze-Nacht_Sprung-zu.jpg", alt: '' },

    ],
  },
];
function showImage(sliderIndex, imageIndex) {
  var slider = document.getElementById(sliders[sliderIndex - 1].containerId);
  var sliderImage = slider.querySelector(".slider");
  sliderImage.src = sliders[sliderIndex - 1].images[imageIndex].src;
  sliderImage.alt = sliders[sliderIndex - 1].images[imageIndex].alt;
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

  // sliderImage.src = sliderImage.src;
  // sliderImage.alt = sliderImage.alt;


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



var landscapeInstruction = document.querySelector(".landscape-instruction");
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