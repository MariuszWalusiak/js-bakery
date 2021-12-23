//document constans
const cookieButton = document.querySelector("#make-dough");
const cookieButtonWrapper = document.querySelector("#button-wrapper");
const progressBar = document.querySelector(".progress-bar");
const counterMadeDough = document.querySelector("#counter");
const flourAvailable = document.querySelector("#flour-available");
const doughTray = document.querySelector(".dough-wrapper");
const madeCookiesCounter = document.querySelector("#cookie-counter");
const ovenButton = document.querySelector("#buttonOven");
const cookiesInOven = document.querySelector("#cookies-in-oven");
const ovenWrapper = document.querySelector(".oven-wrapper");
const oven = document.querySelector(".oven");
const finishedCookiesCounter = document.querySelector(
  "#counter-finished-cookies"
);
const moneyEarnedContent = document.querySelector("#money-earned");

//variables
let amountOfFlour = 100;
let duration;
let isMaking = false;
let madeDough = 0;
let madeCookies = 0;
let ovenCookies = 0;
let finishedCookies = 0;
let moneyEarned = 0;

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

let dough = [{ size: "", elementWHTML: "" }];
function makeDough() {
  //counter
  madeDough++;
  counterMadeDough.textContent = `Liczba ulepionych ciastowych kul: ${madeDough}`;

  //creating piece of dough
  const pieceOfDough = createElement("div", "dough");
  doughTray.append(pieceOfDough);
  const X = makeCookies();
  pieceOfDough.addEventListener("click", X);

  //click event
}

//coookie counter update
function makeCookies() {
  let widthCookie = 50;
  let heightCookie = 50;
  // console.log(event.target.style.width = "20px");
  // let newWidth = widthCookie - 10;
  // this.style.setProperty("width", `${newWidth}px`)
  function reduceCookieSize(event) {
    ovenButton.disabled = false;
    madeCookies++;
    widthCookie -= 2.5;
    heightCookie -= 2.5;
    madeCookiesCounter.textContent = `Liczba ulepionych ciastek: ${madeCookies}`;
    event.target.style.width = widthCookie + "px"; //odnosi sie do width ciastka konkretnego
    event.target.style.height = heightCookie + "px";
    if (widthCookie == 0 && heightCookie == 0) {
      madeDough -= 1;
      console.log(madeDough);
      counterMadeDough.textContent = `Liczba ulepionych ciastowych kul: ${madeDough}`;
    }
    // console.log(document.querySelectorAll('.dough'))
  }

  return reduceCookieSize;
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

    const alert = createElement("span", "redalert");
    cookieButtonWrapper.append(alert);
    alert.textContent = "za mało mąki";
  }
}

function createElement(element, createdClass) {
  let name = document.createElement(element);
  name.classList.add(createdClass);
  return name;
}

// ovenButton.disabled = false;
function bakeCookie() {
  // ovenButton.disabled = false;

  if (madeCookies > 0 && ovenCookies < 9) {
    ovenCookies++;
    madeCookies--;
    madeCookiesCounter.textContent = `Liczba ulepionych ciastek: ${madeCookies}`;
    cookiesInOven.textContent = `Liczba ciastek w piecu: ${ovenCookies}/9`;
    console.log(ovenCookies);
    const cookie = createElement("div", "dough");

    cookie.classList.add("oven-item");
    oven.append(cookie);
    cookie.style.backgroundColor = "yellow";
    const cookieDuration = setInterval(runCookieProgressColor, 3000);

    function runCookieProgressColor() {
      if (cookie.style.backgroundColor === "yellow") {
        cookie.style.backgroundColor = "orange";
      } else if (cookie.style.backgroundColor === "orange") {
        cookie.style.backgroundColor = "brown";
      } else if (cookie.style.backgroundColor === "brown") {
        cookie.style.backgroundColor = "black";
      } else if (cookie.style.backgroundColor === "black") {
        clearInterval(cookieDuration);
        cookie.remove();
        ovenCookies--;
        cookiesInOven.textContent = `Liczba ciastek w piecu: ${ovenCookies}/9`;
      }
    }

    cookie.addEventListener("click", function(event) {
    
      if (event.target.style.backgroundColor === "brown") {
        finishedCookies += 1;
        finishedCookiesCounter.textContent = `Liczba gotowych ciastek: ${finishedCookies}`;
        console.log(event.target);
        buyCookie();
      }
      event.target.remove();
      ovenCookies--;  
      cookiesInOven.textContent = `Liczba ciastek w piecu: ${ovenCookies}/9`;
      clearInterval(cookieDuration);
    });

  } else if (ovenCookies >= 9 || madeCookies === 0) {
    ovenButton.disabled = true;
    // console.log("cistkcz uieczone " + ovenCookies)
    if (ovenCookies >= 9) {
      const ovenAlert = createElement("span", "redalert");
      ovenWrapper.append(ovenAlert);
      ovenAlert.textContent = "Piec jest pełen! :(";
    } else if (madeCookies === 0) {
      const cookieAlert = createElement("span", "redalert");
      ovenWrapper.append(cookieAlert);
      cookieAlert.textContent =
        "Robiliśmy co w naszej mocy, ale mamy za mało ciastek";
    }
  }
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

ovenButton.addEventListener("click", bakeCookie);
//cookie init
// dough.forEach(pieceOfDough => pieceOfDough.addEventListener("click", countMadeCookies));
// cookieButton.addEventListener("click", countMadeCookies);
// console.log((Math.floor(Math.random() * 4) + 3) * 1000);
// console.log(Math.floor(Math.random() * 10) + 1);

// setInterval(buyCookie, (Math.floor(Math.random() * 10) + 1) * 1000);

function buyCookie() {
  let randomCookiesNumber = Math.floor(Math.random() * 10) + 1;
  let randomTime = (Math.floor(Math.random() * 4) + 3) * 1000;
  if (finishedCookies > 0) {
    if (finishedCookies >= randomCookiesNumber) {
      moneyEarned = randomCookiesNumber * 5;
      finishedCookies -= randomCookiesNumber;
      moneyEarnedContent.textContent = `Zarobiliśmy: ${moneyEarned}`;
      finishedCookiesCounter.textContent = `Liczba gotowych ciastek: ${finishedCookies}`;    
    } else if (finishedCookies < randomCookiesNumber) {
      //finishedCookie
    }
    setTimeout(buyCookie, randomTime);
  } else {
    //do nothing
  }
  console.log(randomCookiesNumber);
  console.log(randomTime);
}

