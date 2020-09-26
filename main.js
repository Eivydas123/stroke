let box = document.querySelectorAll("#logo .path");
let control = document.querySelector("div .control");
let letters = document.querySelectorAll(".path");
let logo = document.getElementById("logo");

logo.style.animationPlayState = "paused";

for (let i = 0; i < box.length; i++) {
    let total = Math.floor(box[i].getTotalLength() + 1);
    box[i].style = `--i:${total}`;
}

let button = document.querySelector("div .reset");

button.setAttribute("disabled", "true");
button.classList.add("resetdisable")

button.addEventListener('click', () => {
    logo.classList.remove("classlogo");
    logo.style = "fill: transparent";
    setTimeout(() => {
        logo.classList.add("classlogo");
        logo.removeAttribute("style");
        logo.style.animationPlayState = "running";
    }, 10)
    control.removeAttribute("disabled");
    control.style.opacity = "1";
    control.style.cursor = "pointer";

});

letters[7].onanimationend = () => {
    control.setAttribute("disabled", "true");
    control.style.opacity = "0.2";
    control.style.cursor = "no-drop";
};

for (let i = 0; i < letters.length; i++) {
    letters[i].style.animationPlayState = "paused";
}

control.innerText = "Play";
control.addEventListener("click", () => {
    button.removeAttribute("disabled");
    button.classList.add("resetenable")
    if (letters[0].style.animationPlayState === "paused") {
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.animationPlayState = "running";
        }
        logo.style.animationPlayState = "running";
        control.style.backgroundColor = "#c7402e";
        control.innerText = "Pause";
    } else {
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.animationPlayState = "paused";
        }
        logo.style.animationPlayState = "paused";
        control.innerText = "Play";
        control.style.backgroundColor = "";
    }
});