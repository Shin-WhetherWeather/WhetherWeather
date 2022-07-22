

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

        element.href = "/" + code;
    });

    switch(speed)
    {
        case 1:
        case "1":
            speed1.style.backgroundColor = "DDD";
        break;

        case 2:
        case "2":
            speed2.style.backgroundColor = "DDD";
        break;

        case 4:
        case "4":
            speed3.style.backgroundColor = "DDD";
        break;

        case 8:
        case "8":
            speed4.style.backgroundColor = "DDD";
        break;
    }

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
