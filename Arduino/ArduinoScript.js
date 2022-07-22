

let moveButtons = document.querySelectorAll(".moveButton");


function myFunction(speed)
{
    moveButtons.forEach(element => {
        let url = element.href;
        let code = url.substring(url.length - 4);

        code = code.substring(0, 3) + speed.toString();

        element.href = "/" + code;
    });
}