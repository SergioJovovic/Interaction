//SWITCH ROOM


//ROOM1

// JavaScript Document
console.log("Howdy!");

var room1 = document.querySelector('section:nth-of-type(2)');
var magnfierglass = document.querySelector('.BG-1');

function change(){
    function dark(){
        magnfierglass.src = "./images/Room1.1.jpg";
        console.log("bg changed");
    }
    setTimeout(dark, 3000); 
    

}

var room2 = document.querySelector('section:nth-of-type(3)');
var backgroundImage = document.querySelector('.BG-2');

function change2(){
  function dark(){
    backgroundImage.src = "./images/Room2.2.jpg";
    console.log("bg 2 changed");
  }
  setTimeout(dark, 6000); 
  
}

var room3 = document.querySelector('section:nth-of-type(4)');
var backgroundImage3 = document.querySelector('.BG-3');

function change3(){
  function dark(){
    backgroundImage3.src = "./images/Room3.2.jpg";
    console.log("bg 3 changed");
  }
  setTimeout(dark, 9000); 
  
}

var room4 = document.querySelector('section:nth-of-type(5)');
var backgroundImage4 = document.querySelector('.BG-4');

function change4(){
  function dark(){
    backgroundImage4.src = "./images/Room4.2.jpg";
    console.log("bg 4 changed");
  }
  setTimeout(dark, 12000); 
  
}

//ROOM2

change(); /* Bron: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout  */
change2();
change3();
change4();

const deviceHasPointer = window.matchMedia('(pointer: fine)').matches;
const container = document.querySelector('.magnifying-glass');
const magnifier = document.querySelector('.magnifying-glass__magnifier');
const enlargedImage = document.querySelector('.magnifying-glass__enlarged-image');
const speed = 0.2;

let containerRect = {};
let mouse = { x: 0, y: 0 };
let glass = { x: 0, y: 0 };
let enlargedImagePos = { x: 0, y: 0 };
let aboveImage = false;
let runMovement = false;
    
function init () {
  if (deviceHasPointer) {
    containerRect = container.getBoundingClientRect();

    window.addEventListener('mousemove', this.getMousePos);
    container.addEventListener('mouseenter', this.showGlass);
    container.addEventListener('mouseleave', this.hideGlass);
    moveGlass();
  }
}

function getMousePos (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function moveGlass () {
  // Calculate smooth mouse movement
  glass.x = lerp(glass.x, mouse.x, speed);
  glass.y = lerp(glass.y, mouse.y, speed);
  
  // Calculate enlarged image position
  enlargedImagePos.x = (glass.x - containerRect.left) / containerRect.width * -100;
  enlargedImagePos.y = (glass.y - containerRect.top) / containerRect.height * -100;
   
  // Set style positions
  magnifier.style.transform = `translate(calc(${glass.x}px - 50%), calc(${glass.y}px  - 50%))`;
  enlargedImage.style.transform = `translate(${enlargedImagePos.x}%, ${enlargedImagePos.y}%)`;

  if (runMovement)
    requestAnimationFrame(moveGlass);
}


// function showGlass () {
//   containerRect = container.getBoundingClientRect();
//   aboveImage = true;
//   runMovement = true;
//   magnifier.style.opacity = '1';
//   moveGlass();
// }

// function hideGlass () {
//   aboveImage = false;
//   magnifier.style.opacity = '0';
//   setTimeout(() => { runMovement = false; }, 250);
// }

function lerp (a, b, n) {
  return (1 - n) * a + n * b;
}

init();


//BASTET

const bastetStatueImage = document.querySelector('img[src="./images/BASTET STATUE.png"]');
const popupImageContainer = document.getElementById("popup-image-container");

let isPopupVisible = false;

bastetStatueImage.addEventListener("click", function () {
    if (isPopupVisible) {
        popupImageContainer.style.display = "none";
        isPopupVisible = false;
    } else {
        popupImageContainer.style.display = "block";
        isPopupVisible = true;
    }
});

const popupImage = document.getElementById("popup-image");
popupImage.addEventListener("click", function () {
    popupImageContainer.style.display = "none";
    isPopupVisible = false;
});

//https://stackoverflow.com/questions/69858023/i-want-my-html-pop-up-to-appear-from-a-js-if-statement
// ChatGPT

//SCION

const scionImage = document.getElementById("scion-image");
const scionInfoImageContainer = document.getElementById("popup-image-container-scion");

let isScionPopupVisible = false;

scionImage.addEventListener("click", function () {
    console.log("clickedx")
    if (isScionPopupVisible) {
        scionInfoImageContainer.style.display = "none";
        isScionPopupVisible = false;
    } else {
        scionInfoImageContainer.style.display = "block";
        isScionPopupVisible = true;
    }
});

scionInfoImageContainer.addEventListener("click", function () {
    scionInfoImageContainer.style.display = "none";
    isScionPopupVisible = false;
});

//https://stackoverflow.com/questions/69858023/i-want-my-html-pop-up-to-appear-from-a-js-if-statement
// ChatGPT



//ROOM2

//TALION

const talionImage = document.getElementById("talion-image");
const talionInfoImageContainer = document.getElementById("popup-image-container-talion");

let isTalionPopupVisible = false;

talionImage.addEventListener("click", function () {
    if (isTalionPopupVisible) {
        talionInfoImageContainer.style.display = "none";
        isTalionPopupVisible = false;
    } else {
        talionInfoImageContainer.style.display = "block";
        isTalionPopupVisible = true;
    }
});

talionInfoImageContainer.addEventListener("click", function () {
    talionInfoImageContainer.style.display = "none";
    isTalionPopupVisible = false;
});

//DAGGER

const daggerImage = document.getElementById("dagger-image");
const daggerInfoImageContainer = document.getElementById("popup-image-container-dagger");

let isDaggerPopupVisible = false;

daggerImage.addEventListener("click", function () {
    if (isDaggerPopupVisible) {
        daggerInfoImageContainer.style.display = "none";
        isDaggerPopupVisible = false;
    } else {
        daggerInfoImageContainer.style.display = "block";
        isDaggerPopupVisible = true;
    }
});

daggerInfoImageContainer.addEventListener("click", function () {
    daggerInfoImageContainer.style.display = "none";
    isDaggerPopupVisible = false;
});


//ROOM3

//ISIS

const isisImage = document.getElementById("isis-image");
const isisInfoImageContainer = document.getElementById("popup-image-container-isis");

let isIsisPopupVisible = false;

isisImage.addEventListener("click", function () {
    if (isIsisPopupVisible) {
        isisInfoImageContainer.style.display = "none";
        isIsisPopupVisible = false;
    } else {
        isisInfoImageContainer.style.display = "block";
        isIsisPopupVisible = true;
    }
});

isisInfoImageContainer.addEventListener("click", function () {
    isisInfoImageContainer.style.display = "none";
    isIsisPopupVisible = false;
});


//INVADA

const invadaImage = document.getElementById("invada-image");
const invadaInfoImageContainer = document.getElementById("popup-image-container-invada");

let isInvadaPopupVisible = false;

invadaImage.addEventListener("click", function () {
    if (isInvadaPopupVisible) {
        invadaInfoImageContainer.style.display = "none";
        isInvadaPopupVisible = false;
    } else {
        invadaInfoImageContainer.style.display = "block";
        isInvadaPopupVisible = true;
    }
});

invadaInfoImageContainer.addEventListener("click", function () {
    invadaInfoImageContainer.style.display = "none";
    isInvadaPopupVisible = false;
});


//ROOM3

//AMULET

const amuletImage = document.getElementById("amulet-image");
const amuletInfoImageContainer = document.getElementById("popup-image-container-amulet");

let isAmuletPopupVisible = false;

amuletImage.addEventListener("click", function () {
    if (isAmuletPopupVisible) {
      amuletInfoImageContainer.style.display = "none";
        isAmuletPopupVisible = false;
    } else {
      amuletInfoImageContainer.style.display = "block";
        isAmuletPopupVisible = true;
    }
});

amuletInfoImageContainer.addEventListener("click", function () {
  amuletInfoImageContainer.style.display = "none";
    isAmuletPopupVisible = false;
});

//IRIS

const irisImage = document.getElementById("iris-image");
const irisInfoImageContainer = document.getElementById("popup-image-container-iris");

let isIrisPopupVisible = false;

irisImage.addEventListener("click", function () {
    if (isIrisPopupVisible) {
      irisInfoImageContainer.style.display = "none";
        isIrisPopupVisible = false;
    } else {
      irisInfoImageContainer.style.display = "block";
        isIrisPopupVisible = true;
    }
});

irisInfoImageContainer.addEventListener("click", function () {
  irisInfoImageContainer.style.display = "none";
    isIrisPopupVisible = false;
});









