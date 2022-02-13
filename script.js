document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector("body");
    let bot = document.querySelector("#toggler");
    bot.onclick = function () {
        console.log("reached here");
        if (bot.innerHTML == "Light Mode 🔆") {
            bot.innerHTML = "Dark Mode 🌛";
            bot.style.color = "white";
            bot.style.backgroundColor = "black";

            body.style.color = "black";
            body.style.backgroundColor = "white";
        }
        else if (bot.innerHTML == "Dark Mode 🌛") {
            bot.innerHTML = "Light Mode 🔆";
            bot.style.color = "black";
            bot.style.backgroundColor = "white";

            body.style.color = "white";
            body.style.backgroundColor = "black";
        }
    };
});
