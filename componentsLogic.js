//variable button to open and close the drawer
const SideMenuButton = document.querySelector(".SideMenuButton");

const DrawerItem = document.querySelectorAll(".mdc-list-item");

//Event listener for the button
SideMenuButton.addEventListener("click", function () {
  drawer.open = true;
});

DrawerItem.addEventListener("click", function () {
  drawer.open = false;
});

const characterCounter = new MDCTextFieldCharacterCounter(
  document.querySelector(".mdc-text-field-character-counter")
);
