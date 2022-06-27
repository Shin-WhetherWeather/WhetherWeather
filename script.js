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



var sections = document.querySelectorAll('.overlay');
var options = {
rootMargin: '-150px',
threshold: 0.25
}


let navElements = document.querySelectorAll(".navbarElement");
let logo = document.getElementById("navbarLogo");
let pageTitle = document.getElementById("pageTitle");
let navbar = document.getElementById("navbar");
let menuIcon = document.getElementById("menuIcon");



let mainBody = document.getElementById('main');

mainBody.addEventListener("scroll", function () {
  scrollFunction();
});



function scrollFunction() {

  navElements.forEach((element) => {



    switch(true)
    {
      case (mainBody.scrollTop > 0 || mainBody.scrollTop > 0) && (mainBody.scrollTop < 100 || mainBody.scrollTop < 100):
        element.style.opacity = 1;
        element.style.padding = "28px 64px";
        logo.style.height = "38px";


        pageTitle.style.fontSize = "24px";
        pageTitle.style.paddingLeft = "200px";
        pageTitle.style.paddingRight = "12px";
        pageTitle.style.paddingTop = "28px";
        pageTitle.style.paddingBottom = "28px";
        pageTitle.style.letterSpacing = "8px";

        navbar.style.opacity = 1;
        navbar.style.pointerEvents = "auto";

        menuIcon.style.fontSize = "64px";
        
        break;

      case (mainBody.scrollTop > 100 || mainBody.scrollTop > 100) && (mainBody.scrollTop < 200 || mainBody.scrollTop < 200):
        element.style.opacity = 0;
        element.style.padding = 0;
        logo.style.height = "20px";



        pageTitle.style.fontSize = "18px";
        pageTitle.style.paddingLeft = "150px";
        pageTitle.style.paddingRight = "6px";
        pageTitle.style.paddingTop = "14px";
        pageTitle.style.paddingBottom = "14px";
        pageTitle.style.letterSpacing = "2px";

        navbar.style.opacity = 1;
        navbar.style.pointerEvents = "auto";

        menuIcon.style.fontSize = "32px";

        break;

      case (mainBody.scrollTop > 750 || mainBody.scrollTop > 750):

        navbar.style.opacity = 0;
        navbar.style.pointerEvents = "none";

        break;
    }


    }
  );
  

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
      else 
      {
        //console.log("notinview");
        //target.classList.remove("is-inview");
      }
  })
}

var observer = new IntersectionObserver(callback, options)
sections.forEach((section, index) => {
observer.observe(section)
})


















let cover = document.getElementById("block");



const resizewatcher=new ResizeObserver(entries => {
  for (const entry of entries){

    if(entry.contentRect.height == 0)
    {
      console.log("hello");
      enableScroll();
      cover.remove();
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

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 50);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 60);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 70);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 80);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 100);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 200);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 300);

// setTimeout(function() {
//   window.scrollTo(0, 0);;
// }, 400);


// setTimeout(function() {
//   disableScroll();
// }, 1000);

