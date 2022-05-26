var menuButton = document.querySelector("#menu img[src*='hamburger']");
var origMenuBar = document.querySelector("#menu ul");
var origMenuBarItem = document.querySelectorAll("#menu li");
var menuBar = origMenuBar;
var menuBarItem = origMenuBarItem;

function showMobileMenu() {
  menuButton.style.opacity = 0.7;
  let mbStyle = menuBar.style;
  mbStyle.display = "flex";
  mbStyle.position = "absolute";
  mbStyle.top = "6em";
  mbStyle.flexDirection = "column";
  mbStyle.backgroundColor = "white";
  mbStyle.width = "83vw";
  mbStyle.padding = "inherit";

  // change list items
  for (let li of menuBarItem) {
    li.style.color = "black";
    li.style.padding = "1em";
    li.style.opacity = 0.7;
  }
}

function hideMobileMenu() {
  menuButton.style.opacity = 1;
  menuBar.style.display = "none";
}

window.addEventListener("click", function (e) {
  if (menuButton.contains(e.target) || menuBar.contains(e.target)) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
});
