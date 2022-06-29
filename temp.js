window.addEventListener("scroll", function () {
    scrollFunction();
  });
  
  
  menuIcon.addEventListener("click", function()
  {
    toggleMenu();
  });
  
  
  let navSpacers = document.querySelectorAll("navbarSpacer");
  
  let menuOpen = false;
  
  function toggleMenu()
  {
    console.log("click");
    
      if(menuOpen == false)
      {
        openMenu();
        menuOpen = true;
  
      }
      else if((menuOpen == true))
      {
      closeMenu();
      menuOpen = false;
    
  }
  }
  
  function openMenu()
  {
  
  
  
    navElements.forEach((element) => 
    {
      element.style.opacity = 1;
      element.style.display = "block";
      element.style.width = "20%";
      element.style.float = "right";
      element.style.pointerEvents = "auto";
  
      
    });
  
    pageTitle.style.opacity = 0;
    logo.style.opacity = 0;
  }
  
  function closeMenu()
  {
    navElements.forEach((element) => 
    {
      element.style.display = "";
      element.style.width = "";
      element.style.float = "";
      element.style.pointerEvents = "";
    });
    pageTitle.style.opacity = "";
    logo.style.opacity = 1;
  
  }
  
  
  
  