// global scope variables for simplicity
var menuButton = document.querySelector("#menu img[src*='hamburger']");
var menuBar = document.querySelector("#menu ul");
var menuList = document.querySelector(".flex-center").style;
var menuBarItem = document.querySelectorAll("#menu li");

function showMobileMenu() {
  menuButton.style.opacity = 0.5;
  menuList.display = "flex";
  menuList.position = "absolute";
  menuList.justifyContent = "center";
  menuList.left = "50vw";
  menuBar.style.display = "flex";
  menuBar.style.position = "absolute";
  menuBar.style.top = "2em";
  menuBar.style.flexDirection = "column";
  menuBar.style.backgroundColor = "white";
  menuBar.style.width = "83vw";
  menuBar.style.padding = "1em";
  menuBar.style.alignItems = "center";

  // change list items
  for (let li of menuBarItem) {
    li.style.color = "black";
    li.style.padding = "1em";
    li.style.opacity = 0.7;
  }
}

function hideMobileMenu() {
  menuButton.style.opacity = 1;
  menuList.display = "none";
}

// listen for 'click' events on browser window and show/hide mobile menu
var windowSize = window.innerWidth;
window.addEventListener("click", function (e) {
  if (windowSize <= 375) {
    if (menuButton.contains(e.target) || menuBar.contains(e.target)) {
      showMobileMenu();
    } else {
      hideMobileMenu();
    }
  }
});
