const cookieButton = document.querySelector("#make-cookie");
const progressBar = document.querySelector(".progress-bar");

var duration;
let acceleration = false;

function intervalFunction() {
  progressBar.style.width = "0px";
  duration = setInterval(runProgressBar, 1000);
}

function stopInterval() {
  clearInterval(duration);
}

function runProgressBar() {
  acceleration = true;
  if (progressBar.style.width === "0px") {
    progressBar.style.width = "25px";
  } else if (progressBar.style.width === "25px") {
    progressBar.style.width = "50px";
  } else if (progressBar.style.width === "50px") {
    progressBar.style.width = "75px";
  } else if (progressBar.style.width === "75px") {
    progressBar.style.width = "100px";
  } else if (progressBar.style.width === "100px") {
    progressBar.style.width = "0px";
  }

  console.log(progressBar.style.width);
}

cookieButton.addEventListener("click", function () {
  if (acceleration === true) {
    stopInterval();
  } else {
    intervalFunction();
  }
});
