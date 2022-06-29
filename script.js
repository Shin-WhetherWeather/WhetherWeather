

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



SmoothScroll({
  // Scrolling Core
animationTime    : 1000, // [ms]
stepSize         : 100, // [px]

// Acceleration
accelerationDelta : 50,  // 50
accelerationMax   : 3,   // 3

// Keyboard Settings
keyboardSupport   : true,  // option
arrowScroll       : 50,    // [px]

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm   : true,
pulseScale       : 4,
pulseNormalize   : 1,

// Other
touchpadSupport   : false, // ignore touchpad by default
fixedBackground   : true, 
excluded          : ''    
})






let cloudOverlayR = document.getElementById("cloudOverlayR");
let cloudOverlayL = document.getElementById("cloudOverlayL");

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








let navElements = document.querySelectorAll(".navbarElement");
let logo = document.getElementById("navbarLogo");
let pageTitle = document.getElementById("pageTitle");
let navbar = document.getElementById("navbar");
let menuIcon = document.getElementById("menuIcon");

let logoContainer = document.getElementById("logoContainer");





menuIcon.addEventListener("click", function()
{
  toggleMenu();
});


let navSpacers = document.querySelectorAll(".navbarSpacer");
let navSpacersLarge = document.querySelectorAll(".navbarSpacerLarge");
let iconContainer = document.querySelectorAll(".iconContainer");

let verticalSpacer = document.getElementById("verticalSpacer");

let menuOpen = false;

let menuWidth = menuIcon.offsetWidth;
let menuHeight = menuIcon.offsetHeight;


function toggleMenu()
{
  console.log("click");
  
    if(menuOpen == false)
    {
      openMenu();
      

    }
    else if((menuOpen == true))
    {
    closeMenu();
    
  
}
}

function openMenu()
{


navSpacers.forEach((element) =>
{
  element.style.width = "0%";
});

navSpacersLarge.forEach((element) =>
{
  element.style.width = "100%";
});


  navElements.forEach((element) => 
  {
    element.style.marginLeft = "auto";
    element.style.marginRight = 0;
    element.style.opacity = 1;
    element.style.display = "block";
    element.style.float = "none";
    element.style.pointerEvents = "auto";
    element.style.padding = "12px 64px";
    element.style.width = "200px";

    
  });

  verticalSpacer.style.height = menuHeight + 12 + "px";

  menuIcon.style.display = "block";
  menuIcon.style.float = "none";
  menuIcon.style.marginLeft = "auto";
  menuIcon.style.marginRight = 0;

  menuOpen = true;


  iconContainer.forEach((element) =>
  {
    element.style.marginLeft = "auto";
    element.style.marginRight = 0;
    element.style.display = "block";
    element.style.float = "none";
  });





}

function closeMenu()
{

  navSpacers.forEach((element) =>
{
  element.style.width = "0%";
});

navSpacersLarge.forEach((element) =>
{
  element.style.width = "0%";
});


  navElements.forEach((element) => 
  {
    element.style.display = "";
    element.style.width = "";
    element.style.float = "";
    element.style.pointerEvents = "";
    element.style.padding = "";
  });

  verticalSpacer.style.height = 0;

  menuIcon.style.display = "";
  menuIcon.style.float = "";
  menuIcon.style.marginLeft = "";
  menuIcon.style.marginRight = "";



  menuOpen = false;

}













































let mainBody = document.getElementById('main');

mainBody.addEventListener("scroll", function () {
  scrollFunction();
});

document.addEventListener("scroll", function(){
  scrollFunction();
});

logo.addEventListener("click", function () {
  console.log("CLICK");
  topFunction();
  scrollFunction();
});







function scrollFunction() {
  closeMenu();
  menuOpen = false;

  let font_spacing1 = "12px";
  let font_opacity = 1;

  if (window.matchMedia('(max-width: 800px)').matches) 
  {
    font_spacing1 = "2px";
    
  }

  if (window.matchMedia('(max-width: 600px)').matches) 
  {
    font_opacity = 0;
    
  }

  

  navElements.forEach((element) => {



    switch(true)
    {
      case (window.pageYOffset >= -500 || window.pageYOffset >= -500) && (window.pageYOffset < 100 || window.pageYOffset < 100):
        element.style.opacity = 1;
        element.style.padding = "28px 64px";
        logo.style.height = "38px";

        element.style.pointerEvents = "auto";

        logo.style.pointerEvents = "auto";


        pageTitle.style.fontSize = "24px";
        pageTitle.style.paddingLeft = "200px";
        pageTitle.style.paddingRight = "12px";
        pageTitle.style.paddingTop = "28px";
        pageTitle.style.paddingBottom = "28px";
        pageTitle.style.letterSpacing = font_spacing1;

        pageTitle.style.opacity = font_opacity;
        navbar.style.pointerEvents = "auto";
        navbar.style.opacity = 1;

        menuIcon.style.fontSize = "64px";
        menuIcon.style.pointerEvents = "auto";
        
        break;

      case (window.pageYOffset > 100 || window.pageYOffset > 100) && (window.pageYOffset < 200 || window.pageYOffset < 200):
        element.style.opacity = 0;
        element.style.padding = 0;
        element.style.pointerEvents = "none";

        
        logo.style.height = "48px";
        logo.style.pointerEvents = "auto";




        pageTitle.style.fontSize = "18px";
        pageTitle.style.paddingLeft = "200px";
        pageTitle.style.paddingRight = "6px";
        pageTitle.style.paddingTop = "28px";
        pageTitle.style.paddingBottom = "28px";
        pageTitle.style.letterSpacing = "2px";

        pageTitle.style.opacity = font_opacity;

        navbar.style.opacity = 1;
        navbar.style.pointerEvents = "auto";
        navbar.style.backgroundColor = "transparent";

        menuIcon.style.fontSize = "64px";
        menuIcon.style.pointerEvents = "auto";

        break;

      case (window.pageYOffset > 850 || window.pageYOffset > 850):

        element.style.padding = "64px 64px";
        logo.style.pointerEvents = "auto";

        pageTitle.style.opacity = 0;
        navbar.style.pointerEvents = "none";

        logo.style.opacity = 1;

        menuIcon.style.pointerEvents = "auto";

        break;
    }


    }
  );
  

}



let sections = document.querySelectorAll('.overlay');

let textSections = document.querySelectorAll('.textSection');

let options = {
rootMargin: '-150px',
threshold: 0.25
}

let options2 = {
  rootMargin: '-20px',
  threshold: 0.25
  }



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

var observer = new IntersectionObserver(callback, options)

let observer2 = new IntersectionObserver(callback, options2)


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

setTimeout(loaded, 1200);

















let cover = document.getElementById("block");



const resizewatcher=new ResizeObserver(entries => {
  for (const entry of entries){

    if(entry.contentRect.height == 0)
    {
      console.log("hello");
      enableScroll();
      cover.remove();
      enableScroll();
      enableScroll();
    }

    //console.log("Element",entry.target, (entry.contentRect.height == 0) ? "is now hidden" : "is now visible")
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

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 50);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 60);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 70);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 80);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 100);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 200);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 300);

setTimeout(function() {
  window.scrollTo(0, 0);;
}, 400);


setTimeout(function() {
  disableScroll();
}, 1000);

