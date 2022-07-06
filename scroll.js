function topFunction() {
 
    $('html, body').animate({scrollTop:0}, 'slow');
    $(window).animate({scrollTop:0}, 'slow');
    console.log("scroll top");
  }

  function scrollToElement(el)
  {


    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    let topPad = 0;
  
    if(windowHeight > windowWidth)
    {
      topPad = (windowHeight - windowWidth)/2;
    }else
    {
      topPad = (windowHeight - el.getBoundingClientRect().width)/2;
      console.log(el.offsetHeight);
    }



    $('html, body').animate({scrollTop:
      ($(el).offset().top - topPad)
    }, 400);

    $(window).animate({scrollTop:
      ($(el).offset().top - topPad)
    }, 400);
  }
  