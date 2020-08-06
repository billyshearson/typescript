"use strict";
function add(n1, n2, showResult) {
    console.log(typeof n1);
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 5;
var printResult = true;
var result = add(number1, number2, printResult);
