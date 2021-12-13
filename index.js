//document constans
const cookieButton = document.querySelector("#make-dough");
const cookieButtonWrapper = document.querySelector("#button-wrapper");
const progressBar = document.querySelector(".progress-bar");
const counterMadeDough = document.querySelector("#counter");
const flourAvailable = document.querySelector("#flour-available");
const doughTray = document.querySelector(".dough-wrapper");
const madeCookiesCounter = document.querySelector("#cookie-counter");

//variables
let amountOfFlour = 100;
let duration;
let isMaking = false;
let madeDough = 0;
let madeCookies = 0;

//sth
progressBar.style.width = "0px";

//function declaration
function startInterval() {
  isMaking = true;
  duration = setInterval(runProgressBar, 200);
  cookieButton.textContent = "zatrzymaj lepienie";
  console.log(duration);
}

function stopInterval() {
  clearInterval(duration);
  cookieButton.textContent = "ulep ciasto";
  console.log(duration);
}

function runProgressBar() {
  if (progressBar.style.width === "0px") {
    reduceFlourAmount();
    if (isMaking === true) {
      progressBar.style.width = "25px";
    } else {
      progressBar.style.width = "0px";
    }
  } else if (progressBar.style.width === "25px") {
    progressBar.style.width = "50px";
  } else if (progressBar.style.width === "50px") {
    progressBar.style.width = "75px";
  } else if (progressBar.style.width === "75px") {
    progressBar.style.width = "100px";
    makeDough();
  } else if (progressBar.style.width === "100px") {
    progressBar.style.width = "0px";
  }

  console.log(progressBar.style.width);
}

let dough = [{size: , elementWHTML}];
function makeDough() {
  //counter
  madeDough++;
  counterMadeDough.textContent = `Liczba ulepionych ciastowych kul: ${madeDough}`;

  //creating piece of dough
  const pieceOfDough = addElements("div", "dough");
  doughTray.append(pieceOfDough);

  //click event
  pieceOfDough.addEventListener("click", makeCookies);
}

//coookie counter update
function makeCookies() {
  const doughArray = document.querySelectorAll(".dough");
  console.log(doughArray);
  madeCookies++;
  // -5px for every dough

  //doughArray.forEach((dough) => dough.style.setProperty("width", `${variable}px`)

  madeCookiesCounter.textContent = `Liczba ulepionych ciastek: ${madeCookies}`;
}

function updateFlourAvailable() {
  flourAvailable.textContent = `Ilość mąki: ${amountOfFlour}kg`;
}
updateFlourAvailable();

function reduceFlourAmount() {
  if (amountOfFlour >= 10) {
    amountOfFlour -= 10;
    flourAvailable.textContent = `Ilość mąki: ${amountOfFlour}kg`;
    //buttonCookie.removeAttribute('disabled')
  } else {
    stopInterval();
    isMaking = false;
    cookieButton.setAttribute("disabled", "");

    const alert = addElements("span", "redalert");
    cookieButtonWrapper.append(alert);
    alert.textContent = "za mało mąki";
  }
}

function addElements(element, createdClass) {
  let name = document.createElement(element);
  name.classList.add(createdClass);
  return name;
}

//button init
cookieButton.addEventListener("click", function () {
  if (isMaking === false) {
    startInterval();
  } else {
    stopInterval();
    isMaking = false;
  }
});

//cookie init
// dough.forEach(pieceOfDough => pieceOfDough.addEventListener("click", countMadeCookies));
// cookieButton.addEventListener("click", countMadeCookies);
