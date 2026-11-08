'use strict';

function getElementWidth(content, padding, border) {
    const totalWidth = Number(content) + Number(padding) * 2 + Number(border) * 2;
    return totalWidth;

}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
