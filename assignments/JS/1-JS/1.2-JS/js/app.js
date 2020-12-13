"use strict";

let diceNo = document.getElementById("diceNo");
let diceNo1 = document.getElementById("diceNo1");
let diceNo2 = document.getElementById("diceNo2");
let diceNo3 = document.getElementById("diceNo3");
let diceNo4 = document.getElementById("diceNo4");

const diceRoll = (min, max) => {
    let calc = max - min + 1;
    let roll = Math.random() * calc;
    let num = Math.floor(roll) + min;

    return num;
};

let array = [];

for (let i = 0; i < 6; i++) {
    array[i] = diceRoll(1, 6);
}

diceNo.innerHTML = array[0];
diceNo1.innerHTML = array[1];
diceNo2.innerHTML = array[2];
diceNo3.innerHTML = array[3];
diceNo4.innerHTML = array[4];

/*
window.addEventListener("load", () => {
    diceNo.innerHTML = array;
});
*/
