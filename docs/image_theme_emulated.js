// This fakes behavior for illustration; see image_theme.js for the real deal
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

function handleColorSchemeChange(event) {
  var emulated = document.querySelector("#emulated");
  var style;
  if (event.matches) {
    style = "background-color: #2e303e;";
  } else {
    style = "background-color: #fff;";
  }
  if (emulated !== null && style !== null) {
    emulated.setAttribute("style", style);
  }
}

handleColorSchemeChange(mediaQueryList);
mediaQueryList.addListener(handleColorSchemeChange);
