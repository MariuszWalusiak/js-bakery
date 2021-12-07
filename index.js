const cookieButton = document.querySelector("#make-cookie");
const progressBar = document.querySelector(".progress-bar");
const counterBakedCookies = document.querySelector('#counter')


var duration;
let acceleration = false;
progressBar.style.width = "0px";
console.log(duration);
let bakedCookies = 0;

//function declaration
function startInterval() {
  duration = setInterval(runProgressBar, 1000);
  acceleration = true;
  cookieButton.textContent = "zatrzymaj lepienie";
  console.log(duration);
}

function stopInterval() {
  clearInterval(duration);
  acceleration = false;
  cookieButton.textContent = "ulep ciasto";
  console.log(duration);
}

function runProgressBar() {
  if (progressBar.style.width === "0px") {
    progressBar.style.width = "25px";
  } else if (progressBar.style.width === "25px") {
    progressBar.style.width = "50px";
  } else if (progressBar.style.width === "50px") {
    progressBar.style.width = "75px";
  } else if (progressBar.style.width === "75px") {
    progressBar.style.width = "100px";
    countBakedCookies();
  } else if (progressBar.style.width === "100px") {
    progressBar.style.width = "0px";
  }

  console.log(progressBar.style.width);
}

function countBakedCookies(){
    bakedCookies++;
    counterBakedCookies.textContent = `Liczba ulepionych ciastowych kul: ${bakedCookies}`
    return bakedCookies;
}

//button init
cookieButton.addEventListener("click", function () {
  if (acceleration === false) {
    startInterval();
  } else {
    stopInterval();
  }
});
