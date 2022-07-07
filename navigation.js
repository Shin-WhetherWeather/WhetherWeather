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




  let navElements = document.querySelectorAll(".navbarElement");
let logo = document.getElementById("navbarLogo");
let pageTitle = document.getElementById("pageTitle");
let navbar = document.getElementById("navbar");
let menuIcon = document.getElementById("menuIcon");

let backdrop = document.getElementById("backdrop");

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
  
    if(menuOpen == false)
    {
      openMenu();
      

    }
    else if((menuOpen == true))
    {
    closeMenu();
}
}


document.addEventListener("click", function(e)
{
  console.log("close");
  if(e.target.id !== "menuIcon")
  {
    
    closeMenu();
  }
  
});





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
  topFunction();
  scrollFunction();
});










function scrollFunction() {
  closeMenu();

  let font_spacing1 = "12px";
  let font_spacing2 = "4px";
  let font_opacity = 1;

  if (window.matchMedia('(max-width: 800px)').matches) 
  {
    font_spacing1 = "2px";
    font_spacing2 = "2px";
    
  }

  if (window.matchMedia('(max-width: 600px)').matches) 
  {
    font_opacity = 0;
    
  }

  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const scrollposition = document.documentElement.scrollTop; 

  const distanceBottom = difference - scrollposition;


  navElements.forEach((element) => {



    switch(true)
    {
      case (window.pageYOffset >= -500 && window.pageYOffset < 900) || (distanceBottom < 250):
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

      case (window.pageYOffset >= 900 && window.pageYOffset < 2500) || (distanceBottom >= 250 && distanceBottom <= 1440):
        element.style.opacity = 0;
        element.style.padding = 0;
        element.style.pointerEvents = "none";

        
        logo.style.height = "42px";
        logo.style.pointerEvents = "auto";




        pageTitle.style.fontSize = "24px";
        pageTitle.style.paddingLeft = "200px";
        pageTitle.style.paddingRight = "6px";
        pageTitle.style.paddingTop = "28px";
        pageTitle.style.paddingBottom = "28px";
        pageTitle.style.letterSpacing = font_spacing2;

        pageTitle.style.opacity = font_opacity;

        navbar.style.opacity = 1;
        navbar.style.pointerEvents = "none";
        navbar.style.backgroundColor = "transparent";

        menuIcon.style.fontSize = "64px";
        menuIcon.style.pointerEvents = "auto";

        break;

      case (window.pageYOffset >= 2500) && (distanceBottom > 1440):
        element.style.opacity = 0;
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