document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector("body");
    let bot = document.querySelector("#toggler");
    bot.onclick = function () {
        console.log("reached here");
        if (bot.innerHTML == "Light Mode 🔆") {
            bot.innerHTML = "Dark Mode 🌛";
            bot.style.color = "white";
            bot.style.backgroundColor = "black";

            console.log("Loading Light Theme From Dark Theme.");
            body.style.color = "black";
            body.style.backgroundColor = "white";
        }
        else if (bot.innerHTML == "Dark Mode 🌛") {
            bot.innerHTML = "Light Mode 🔆";
            bot.style.color = "black";
            bot.style.backgroundColor = "white";

            console.log("Loading Dark Theme From Light THeme.");
            body.style.color = "white";
            body.style.backgroundColor = "black";
        }
    };
});
