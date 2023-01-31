/*

source: prompt-exercise-5.js
author: @misael-diaz
date:   2023-01-31

Synopsis:
Basic Prompt Exercise.

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] Getting input from user via nodejs:
	stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
[1] to string methods:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// asks users for their weight and height
rl.question("input your weight in kilograms: ", function(w) {
	rl.question("input your height in meters: ", function(h) {
	// gets the current year from Date instance
	// calculates the age of the user
	let BMI = w / (h * h)
	console.log(`your BMI is ${BMI}`)
	rl.close();
	});
});
