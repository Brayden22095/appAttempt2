//Top bar
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

//Side bar
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

//TextField
const textField = new MDCTextField(document.querySelector(".mdc-text-field"));
const characterCounter = new MDCTextFieldCharacterCounter(
  document.querySelector(".mdc-text-field-character-counter")
);

//Button
const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
