/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird", "Bobby"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was playing"
];

// Function to generate a random number between min and max
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a random item from any array
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  return anyArray[getRandomNumber(max, min)];
}

window.onload = function() {
  // Write your code here
  console.log("Hello Rigo from the console!");

  // Use getRandom function to pick random elements
  let randomWho = getRandom(who);
  let randomAction = getRandom(action);
  let randomWhat = getRandom(what);
  let randomWhen = getRandom(when);

  // Set the random excuse
  document.querySelector("#excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
