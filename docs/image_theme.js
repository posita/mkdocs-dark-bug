// Adapted from
// https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#receiving_query_notifications
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

function handleColorSchemeChange(event) {
  var body = document.querySelector("body[data-md-color-scheme]");
  var theme;
  if (event.matches) {
    theme = "slate";
  } else {
    theme = "default";
  }
  if (body !== null && theme !== null) {
    body.setAttribute("data-md-color-scheme", theme);
  }
}

handleColorSchemeChange(mediaQueryList);
mediaQueryList.addListener(handleColorSchemeChange);
