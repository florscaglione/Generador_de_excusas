/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird", "Your father"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let possetion = ["my car", "my homework", "my shoe", "my head"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "after my shower"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    when[whenIndex]
  );
};
