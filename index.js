function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
function setActive(e) {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].classList.remove("active");
  }
  e.target.classList.add("active");
}
function blurFunction() {
  var nav = document.getElementById("myTopnav");
  setTimeout(() => {
    nav.className = "topnav";
  }, 10);
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!name || !email || !message) {
      errorMessage.style.display = "block";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";
    alert("Form submitted successfully!");
  });
