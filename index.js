const cookieButton = document.querySelector("#make-dough");
const progressBar = document.querySelector(".progress-bar");
const counterMadeDough = document.querySelector("#counter");
const flourAvailable = document.querySelector("#flour-available");
let amountOfFlour = 100;

let duration;
let isMaking = false;
progressBar.style.width = "0px";
console.log(duration);
let madeDough = 0;

//function declaration
function startInterval() {
  duration = setInterval(runProgressBar, 200);
  isMaking = true;
  cookieButton.textContent = "zatrzymaj lepienie";
  console.log(duration);
}

function stopInterval() {
  clearInterval(duration);
  isMaking = false;
  cookieButton.textContent = "ulep ciasto";
  console.log(duration);
}

function runProgressBar() {
  if (progressBar.style.width === "0px") {
      reduceFlourAmount();
      progressBar.style.width = "25px"
  } else if (progressBar.style.width === "25px") {
    progressBar.style.width = "50px";
  } else if (progressBar.style.width === "50px") {
    progressBar.style.width = "75px";
  } else if (progressBar.style.width === "75px") {
    progressBar.style.width = "100px";
    countMadeDough();
  } else if (progressBar.style.width === "100px") {
    progressBar.style.width = "0px";
  }

  console.log(progressBar.style.width);
}

function countMadeDough() {
  madeDough++;
  counterMadeDough.textContent = `Liczba ulepionych ciastowych kul: ${madeDough}`;
  return madeDough;
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
    return amountOfFlour
  } else {
    stopInterval();
    cookieButton.setAttribute('disabled','')
    const alert = document.createElement('span');
    alert.classList.add('redalert');
    document.body.append(alert);
    alert.textContent = 'za mało mąki'
  }
}

//button init
cookieButton.addEventListener("click", function () {
  if (isMaking === false) {
    startInterval();
  } else {
    stopInterval();
  }
});




