// ----------------------------App designer----------------------------
function app_designer_changeText() {
  document.getElementById("headingText").innerText = "App Designer";
}

function app_designer_resetText() {
  document.getElementById("headingText").innerText =
    "iEveEra Popular Digital Marketing Agency";
}
// ----------------------------App developer----------------------------
function app_developer_changeText() {
  document.getElementById("headingText").innerText = "App Developer";
}

function app_developer_resetText() {
  document.getElementById("headingText").innerText =
    "iEveEra Popular Digital Marketing Agency";
}
// ----------------------------Web developer----------------------------
function web_developer_changeText() {
  document.getElementById("headingText").innerText = "Web Developer";
}

function web_developer_resetText() {
  document.getElementById("headingText").innerText =
    "iEveEra Popular Digital Marketing Agency";
}

// ------------------------------OUR Service------------------------------
// function changeHeading(container, newText) {
//   container.querySelector(".heading").textContent = newText;
// }

// function resetHeading(container) {
//   container.querySelector(".heading").textContent = "AD";
// }

function changeHeading(container, newText) {
  const headingElement = container.querySelector(".heading");
  headingElement.textContent = newText;
  container.style.width = "255px";
  container.style.transition = "1s";
  headingElement.style.opacity = "1";
  container.querySelector(".icon").style.opacity = 1;

  // setTimeout(function () {
  //   headingElement.style.opacity = "1";
  //   container.querySelector(".icon").style.opacity = 1;
  // }, 1000);
}

function resetHeading(container) {
  container.style.width = "120px";
  container.style.transition = "1s";
  container.querySelector(".heading").textContent = "AD";
  container.querySelector(".heading").style.opacity = 1;
}

// container.style.transform = "2s";
