
window.scrollTo(0, 0);
window.scrollTo(0, 0);

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
  disableScroll();
}, 200);

