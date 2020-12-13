"use strict";

const f2c = () => {
    let fahr;
    let cels;

    let lower = 0;
    let upper = 300;
    let step = 20;

    let s = "<table>";
    s += "<tr><th>Celsius</th><th>Fahrenheit</th></tr>";
    cels = lower;
    while (cels <= upper) {
        fahr = 9 / 5 * cels + 32;
        s += `<tr><td>${cels}</td><td>${fahr}</td></tr>`;
        cels = cels + step;
    }
    s += '</table>';
    return s;
};