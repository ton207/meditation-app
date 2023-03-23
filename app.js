const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breatTime = totalTime / 5 * 2; // 3秒
let holdTime = totalTime / 5; // 1.5秒

meaditateAnimation();

function meaditateAnimation() {
    text.innerHTML = "吸って！";
    container.className = "container grow";
    setTimeout(() => {
        text.innerHTML = "止めて！";

        setTimeout(() => {
            text.innerHTML = "吐いて！"
            container.className = "container shrink";
        }, holdTime);
    },breatTime);
}

setInterval(meaditateAnimation, totalTime);