const cookieButton = document.querySelector("#make-cookie");
const progressBar = document.querySelector(".progress-bar");


cookieButton.addEventListener("click", function () {
  progressBar.classList.add("progress-bar-animation");
});
