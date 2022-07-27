



let moveButtons = document.querySelectorAll(".moveButton");

let selectedSpeed = 1;

let speed1 = document.getElementById("speed1");
let speed2 = document.getElementById("speed2");
let speed3 = document.getElementById("speed3");
let speed4 = document.getElementById("speed4");



function myFunction(speed)
{
    moveButtons.forEach(element => {
        let url = element.href;
        let code = url.substring(url.length - 4);

        code = code.substring(0, 3) + speed.toString();

        element.href = "/M" + code;
    });

    switch(speed)
    {
        case 1:
        case "1":
            speed1.firstChild.style.backgroundColor = "#CCD";
            speed2.firstChild.style.backgroundColor = "";
            speed3.firstChild.style.backgroundColor = "";
            speed4.firstChild.style.backgroundColor = "";
        break;

        case 2:
        case "2":
            speed1.firstChild.style.backgroundColor = "";
            speed2.firstChild.style.backgroundColor = "#CCD";
            speed3.firstChild.style.backgroundColor = "";
            speed4.firstChild.style.backgroundColor = "";
        break;

        case 4:
        case "4":
            speed1.firstChild.style.backgroundColor = "";
            speed2.firstChild.style.backgroundColor = "";
            speed3.firstChild.style.backgroundColor = "#CCD";
            speed4.firstChild.style.backgroundColor = "";
        break;

        case 6:
        case 7:
        case 8:
        case 9:
        case "6":
        case "7":
        case "8":
        case "9":
            speed1.firstChild.style.backgroundColor = "";
            speed2.firstChild.style.backgroundColor = "";
            speed3.firstChild.style.backgroundColor = "";
            speed4.firstChild.style.backgroundColor = "#CCD";
        break;
    }

    LOCAL_TOKEN = speed;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(LOCAL_TOKEN));


}




const LOCAL_KEY = "selectedSpeed";

let LOCAL_TOKEN = JSON.parse(localStorage.getItem(LOCAL_KEY));

if(LOCAL_TOKEN == null)
{
    LOCAL_TOKEN = 1;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(LOCAL_TOKEN));
}
else
{
    selectedSpeed = LOCAL_TOKEN;
    myFunction(selectedSpeed);
}













let colorpicker = document.getElementById("colorpicker");

let slider = document.getElementById("slider");

colorpicker.addEventListener("change", function()
{
    backlightChange();
});





slider.addEventListener("change", function()
{
    backlightChange();
});

function backlightChange()
{
    let backColor = colorpicker.value.substring(1);;
    let brightness = slider.value;

    LOCAL_TOKEN_COLOR = '#' + backColor + brightness;

    localStorage.setItem(LOCAL_KEY_COLOR, JSON.stringify(LOCAL_TOKEN_COLOR));

    let red = parseInt(backColor.substring(0,2),16);
    red = String(red).padStart(3, '0');

    let green = parseInt(backColor.substring(2,4),16);
    green = String(green).padStart(3, '0');

    let blue = parseInt(backColor.substring(4,6),16);
    blue = String(blue).padStart(3, '0');

    console.log(red + green + blue);


    window.location.href = '/R' + red + green + blue + brightness;
    
}





const LOCAL_KEY_COLOR = "selectedColor";

let LOCAL_TOKEN_COLOR = JSON.parse(localStorage.getItem(LOCAL_KEY_COLOR));

if(LOCAL_TOKEN_COLOR == null)
{
    LOCAL_TOKEN_COLOR = "#FFFFFF1";
    localStorage.setItem(LOCAL_KEY_COLOR, JSON.stringify(LOCAL_TOKEN_COLOR));
}
else
{
    colorpicker.value = LOCAL_TOKEN_COLOR.substring(0,7);
    slider.value = parseInt(LOCAL_TOKEN_COLOR.charAt(LOCAL_TOKEN_COLOR.length-1));
}



















let colorpicker2 = document.getElementById("colorpicker2");

let slider2 = document.getElementById("slider2");

colorpicker2.addEventListener("change", function()
{
    backlightChange2();
});





slider2.addEventListener("change", function()
{
    backlightChange2();
});

function backlightChange2()
{
    let backColor = colorpicker2.value.substring(1);;
    let brightness = slider2.value;

    LOCAL_TOKEN_COLOR_2 = '#' + backColor + brightness;

    localStorage.setItem(LOCAL_KEY_COLOR_2, JSON.stringify(LOCAL_TOKEN_COLOR_2));

    let red = parseInt(backColor.substring(0,2),16);
    red = String(red).padStart(3, '0');

    let green = parseInt(backColor.substring(2,4),16);
    green = String(green).padStart(3, '0');

    let blue = parseInt(backColor.substring(4,6),16);
    blue = String(blue).padStart(3, '0');

    console.log(red + green + blue);


    window.location.href = '/B' + red + green + blue + brightness;
    
}





const LOCAL_KEY_COLOR_2 = "selectedColor2";

let LOCAL_TOKEN_COLOR_2 = JSON.parse(localStorage.getItem(LOCAL_KEY_COLOR_2));

if(LOCAL_TOKEN_COLOR_2 == null)
{
    LOCAL_TOKEN_COLOR_2 = "#FFFFFF1";
    localStorage.setItem(LOCAL_KEY_COLOR_2, JSON.stringify(LOCAL_TOKEN_COLOR_2));
}
else
{
    colorpicker2.value = LOCAL_TOKEN_COLOR_2.substring(0,7);
    slider2.value = parseInt(LOCAL_TOKEN_COLOR_2.charAt(LOCAL_TOKEN_COLOR_2.length-1));
}
