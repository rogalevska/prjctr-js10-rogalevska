'use strict';
const body = document.body;
// let date = new Date();
// let formatedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleTimeString('it-IT')}`;
// console.log(formatedDate);
// console.log(date);
const button = document.querySelector('.button');
const lastUpdate = document.getElementById("lastUpdate");
let display = localStorage.getItem("finalDate");

addEventListener('DOMContentLoaded', (event) => {
  if (display.includes("off")) {
    body.style = "background-color: #2f1b12; padding: 10px; color: red; width: 100%";
    lastUpdate.innerHTML = `${display}`;
    button.innerHTML = 'Turn on';
  } else if (display.includes("on")) {
    body.style = "background-color: #fff8e7; padding: 10px; color: red; width: 100%";
    lastUpdate.innerHTML = `${display}`;
    button.innerHTML = 'Turn off';
  }
});

function handleClick() {
    if (button.innerHTML === 'Turn off') {
      body.style = "background-color: #2f1b12; padding: 10px; color: red; width: 100%"; 
      button.innerHTML = 'Turn on';
      let date = new Date();
      let formatedDate = `Last turn off: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleTimeString('it-IT')}`;
      localStorage.setItem("finalDate", formatedDate);
      display = localStorage.getItem("finalDate");
      lastUpdate.innerHTML = `${display}`;
      return display;
    } else if (button.innerHTML === 'Turn on') {
        body.style = "background-color: #fff8e7; padding: 10px; color: red; width: 100%"; 
        button.innerHTML = 'Turn off';
        let date = new Date();
        let formatedDate = `Last turn on: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleTimeString('it-IT')}`;  
        localStorage.setItem("finalDate", formatedDate);
        display = localStorage.getItem("finalDate");
        lastUpdate.innerHTML = `${display}`;
        return display;
    }
    };
button.addEventListener('click', handleClick);
