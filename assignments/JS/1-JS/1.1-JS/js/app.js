"use strict";

let diceNo = document.querySelector("#diceNo");

const diceRoll = (min, max) => {
    let calc = max - min + 1;
    let roll = Math.random() * calc;
    let num = Math.floor(roll) + min;

    return num;
};

window.addEventListener("load", () => {
    diceNo.innerHTML = diceRoll(1, 6);
});