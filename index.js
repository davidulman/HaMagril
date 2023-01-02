function findNumber() {
  let chosenNumbers = [];
  let chosenStrong = [];
  while (true) {
    let number = Math.floor(Math.random() * 37 + 1);
    if (!chosenNumbers.includes(number)) {
      chosenNumbers.push(number);
      return number;
    }
  }
}
function strongNum() {
  return Math.floor(Math.random() * 7 + 100);
}
let button = document.createElement("button");
button.textContent = "לחץ כאן כדי להגריל";
button.classList.add("my-button");
button.addEventListener("click", function () {
  button.innerHTML = "לחץ כדי להגריל שוב";
});

button.addEventListener("click", function () {
  let lines = [];
  for (let i = 0; i < 14; i++) {
    let finalDraw = [];
    for (let j = 0; j < 6; j++) {
      finalDraw.push(findNumber());
    }
    for (let b = 0; b < 1; b++) {
      finalDraw.push(strongNum());
    }
    lines.push(finalDraw);
  }

  console.log(lines);
  let myDiv = document.getElementById("myDiv");
  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
  }

  for (var s = 0; s < 100; s++) {
    var id =
      String.fromCharCode(97 + (s % 26)) + String.fromCharCode(65 + (s % 26));
  }

  for (let i = 0; i < lines.length; i++) {
    let p = document.createElement("p");
    for (let j = 0; j < lines[i].length; j++) {
      let img = document.createElement("img");
      img.setAttribute("class", "AS" + i);
      img.classList.add("bnz" + i + j);
      img.src = "images/lotto_ball_" + lines[i][j] + ".png";
      p.appendChild(img);
    }
    myDiv.appendChild(p);
  }
});

document.body.appendChild(button);

///================================== ShowMore Button ===============================================///

// Get the button element
const btn = document.querySelector("#btnmore");

// Add an event listener to the button
btn.addEventListener("click", toggleCSS);

let clickCount = 0;

function toggleCSS() {
  clickCount++;

  switch (clickCount % 4) {
    case 1:
      toggleClass("AS1", "inline");
      break;
    case 2:
      toggleClass("AS2", "inline");
      toggleClass("AS3", "inline");
      break;
    case 3:
      toggleClass("AS4", "inline");
      toggleClass("AS5", "inline");
      break;
    case 0:
      toggleClass("AS6", "inline");
      toggleClass("AS7", "inline");
      toggleClass("AS8", "inline");
      toggleClass("AS9", "inline");
      toggleClass("AS10", "inline");
      toggleClass("AS11", "inline");
      toggleClass("AS12", "inline");
      toggleClass("AS13", "inline");
      break;
  }
}

function toggleClass(className, displayValue) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = displayValue;
  }
}

// document.getElementById("myDiv").appendChild(img);
// img.src = "images/lotto_ball_" + findNumber + ".png"
// p.textContent = "מטבלה מס׳ " + (i + 1) + ": " + lines[i].join(", ");

// document.querySelector("h1").innerHTML = lines; // Change The HTML

/*
// backup

// Code For Getting Random Number
function findNumber() {
  return Math.floor(Math.random() * 37 + 1);
}
let button = document.createElement("button");
button.textContent = "לחץ כאן כדי להגריל";
button.classList.add("my-button");

button.addEventListener("click", function () {
  let lines = [];
  for (let i = 0; i < 14; i++) {
    let finalDraw = [];
    for (let j = 0; j < 6; j++) {
      finalDraw.push(findNumber());
    }

    lines.push(finalDraw);
  }

  console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    let p = document.createElement("p");
    p.textContent = "מטבלה מס׳ " + (i + 1) + ": " + lines[i].join(", ");
    document.getElementById("myDiv").appendChild(p);
  }
});
document.body.appendChild(button); 
*/
