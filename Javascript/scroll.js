let scrolling = false;


function topFunction() {

  if(scrolling == false)
    {
    scrolling = true;
    $('html, body').animate(
    {scrollTop:0}, 
    {
      duration: 500,
      complete: function()
      {
        scrolling = false;
      }
    }
    );




    $(window).animate(
      {scrollTop:0},
      {
        duration: 500,
        complete: function()
        {
          scrolling = false;
        }
      }
      );



    console.log("scroll top");
    }
  }



  function scrollToElement(el, speed = 400)
  {

    if(scrolling == false)
    {
    scrolling = true;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    let topPad = 0;
  
    if(windowHeight > windowWidth)
    {
      topPad = (windowHeight - windowWidth)/2;
    }else
    {
      topPad = (windowHeight - el.getBoundingClientRect().height)/2;
      console.log(el.offsetHeight);
    }



    $('html, body').animate(
      {scrollTop:
      ($(el).offset().top - topPad)
    }, 

    {
      duration: speed,
      complete: function()
      {
        scrolling = false;
      }
    }

    );

    $(window).animate(
      {scrollTop:
      ($(el).offset().top - topPad)
    }, 

    {
      duration: speed,
      complete: function()
      {
        scrolling = false;
      }
    }
    
    );

    }

  }


