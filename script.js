

window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
window.LOCALE = 'en';
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




window.translation = {
  common: {
    selectedList: '{quantity} list selected',
    selectedLists: '{quantity} lists selected'
  }
};

var AUTOHIDE = Boolean(0);


var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);



let sprite = document.getElementById("sprite");
let sliderInput = document.getElementById("slider");

let tickEach = document.getElementById("tickTexts").children;


sliderInput.oninput = function()
{
  updateSlider();
  navigator.vibrate(50);
};

function updateSlider()
{
  sprite.style.backgroundPosition = 1300 - 100 * sliderInput.value + "% 0%";

  for(let i = 0; i < tickEach.length; i++)
  {
    tickEach[i].classList.remove("tickSelected");
    if(sliderInput.value == i)
    {
      tickEach[i].classList.add("tickSelected");
    }
  }

  updateSun();
};


function sliderSlide()
{
  setTimeout(
    function()
    {
      if(sliderInput.value != 23)
      {
        sliderInput.value++;
      }
      else
      {
        sliderInput.value = 0;
      }
      sliderSlide();
      updateSlider();
    },250
  );
}




let buttonLinks = 
[
  "Cloud.svg",
  "lightning.svg",
  "Rain.svg",
  "RainLightning.svg",
  "Snow.svg",
  "Sun.svg"
];

let weatherLinks = 
[
  "CloudStill.png",
  "LightningStill.png",
  "RainStill.png",
  "ThunderStill.png",
  "SnowStill.png",
  ""
]

let buttonState = 5;

let spriteContainer = document.getElementById("sprite");


let cloudButton = document.getElementById("cloudButton");

cloudButton.addEventListener("click",function()
{
  scrollToElement(spriteContainer);
  cloudButtonToggle();
  changeWeather();
});

function cloudButtonToggle()
{
  if(buttonState == 5)
  {
    buttonState = 0;
  }
  else
  {
    buttonState++;
  }

  updateSun();

  cloudButton.src = "CloudButton/" + buttonLinks[buttonState];
}

function changeWeather()
{
  sprite.style.backgroundImage =  "url(Sprites/" + weatherLinks[buttonState] +"), url(Sprites/SpriteMain.jpg)";
}


let cloudGlow = document.createElement('div');
cloudGlow.style.position = "absolute";
cloudGlow.style.top = 0;
cloudGlow.style.left = 0;
cloudGlow.style.right = 0;
cloudGlow.style.bottom = 0;
cloudGlow.style.filter = "blur(24px)";
cloudGlow.style.transform = "scale(0.85)";
cloudGlow.style.opacity = 0;
cloudGlow.style.borderRadius = "50%";
cloudGlow.style.zIndex = 1;
cloudGlow.style.pointerEvents = "none";
cloudButton.style.zIndex = 2;
cloudGlow.style.transition = "1s opacity";
cloudButton.parentNode.append(cloudGlow);

function updateSun()
{
  if(buttonState == 5)
  {
    if( sliderInput.value < 7 || sliderInput.value >= 19)
    {

      cloudButton.style.filter = "grayscale(100%)";

      cloudGlow.style.backgroundColor = "white";

      cloudGlow.style.opacity = 0.6;
      

      
    }
    else
    {
      cloudButton.style.filter = "grayscale(0%)";

      cloudGlow.style.backgroundColor = "#FFE168";

      cloudGlow.style.opacity = 0.6;
    }
  }
  else
  {
    cloudButton.style.filter = "grayscale(0%)";
    cloudGlow.style.opacity = 0;
  }
}



let playButton = document.getElementById("playButton");

let animID;
let playState = false;

let animTime, then, elapsed;

playButton.addEventListener("click", function(){
  scrollToElement(spriteContainer);
  if(playState)
  {
    pauseAnimation();
  }else
  {
    animTime = Date.now();
    playAnimation();
  }
});

function playAnimation()
{
  animID = requestAnimationFrame(playAnimation);

  playButton.src = "Icons/Pause.svg";

  if( (Date.now() - animTime) > 450)
  {
    if(sliderInput.value != 23)
    {
      sliderInput.value++;
    }
    else
    {
      sliderInput.value = 0;
    }
  updateSlider();

  animTime = Date.now();
  playState = true;
  }


}

function pauseAnimation()
{
  playButton.src = "Icons/Play.svg";
  cancelAnimationFrame(animID);
  playState = false;
}


let options = {
  rootMargin: '-150px',
  threshold: 0.25
  }
  
  let options2 = {
    rootMargin: '-20px',
    threshold: 0.25
    }





let observer;

let observer2;





function loaded()
{
  console.log("loaded");
  sections.forEach((section, index) => {
    observer.observe(section)
    })
    
    textSections.forEach((section, index) => {
      observer2.observe(section)
      })
}













window.onload = function()
{
  topFunction();
  updateSlider()


  cloudOverlayR.addEventListener("mouseover", 
    function()
    {
      moveAllClouds();
    }
    );

  cloudOverlayL.addEventListener("mouseover", 
    function()
    {
      moveAllClouds();
    }
    );


    if ('IntersectionObserver' in window) {

      observer = new IntersectionObserver(callback, options);

      observer2 = new IntersectionObserver(callback, options2);


      setTimeout(loaded, 1200);

    } else {
      entries.forEach((entry) => 
      {
        var target = entry.target;
    
            target.classList.add("is-inview");
      })
    }






};



let cover = document.getElementById("block");


const LOCAL_KEY = "WhetherWeatherKey";

let LOCAL_TOKEN = JSON.parse(localStorage.getItem(LOCAL_KEY));

const now = new Date();


if(LOCAL_TOKEN == null || now.getTime() > LOCAL_TOKEN.expiry)   //token doesn't exist or token has expired
{
  localStorage.removeItem(LOCAL_KEY);

  LOCAL_TOKEN = 
  {
    expiry: now.getTime() + 28800000,  //8 hours
  }

  localStorage.setItem(LOCAL_KEY, JSON.stringify(LOCAL_TOKEN));


  // show blocker
  document.documentElement.style.setProperty("--myOpacity", 1);

}else
{
  cover.remove();
  enableScroll();  
  enableScroll();
  enableScroll();

}
































let cloudOverlayR = document.getElementById("cloudOverlayR");
let cloudOverlayL = document.getElementById("cloudOverlayL");



function noop(){};

function moveAllClouds()
{
  moveAllClouds = noop;
  setTimeout(
    moveCloudsRight,300
  );

  setTimeout(
    moveCloudsLeft,750
  );
}

function moveCloudsRight()
{
  console.log("move");
  cloudOverlayR.style.position = "absolute";
  cloudOverlayR.style.left = "1000px";
  console.log(parseInt(cloudOverlayR.style.left));
  cloudOverlayR.style.opacity = 0;

}

function moveCloudsLeft()
{
  console.log("move");
  cloudOverlayL.style.position = "absolute";
  cloudOverlayL.style.left = "-1000px";
  console.log(parseInt(cloudOverlayR.style.left));
  cloudOverlayL.style.opacity = 0;

}


































let sections = document.querySelectorAll('.overlay');

let textSections = document.querySelectorAll('.textSection');





var callback = (entries) => 
{
  entries.forEach((entry) => 
  {
    var target = entry.target;
      if (entry.intersectionRatio >= 0.1) 
      {
        console.log("inview");
        target.classList.add("is-inview");
      } 
  })
}



























const resizewatcher=new ResizeObserver(entries => {
  for (const entry of entries){

    if(entry.contentRect.height == 0)
    {
      cover.remove();
    }

  }
})

resizewatcher.observe(cover);






// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


