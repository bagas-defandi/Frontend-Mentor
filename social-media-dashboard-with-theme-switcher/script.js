const switcher = document.querySelector("#theme");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
let darkModeState = useDark.matches;

// Checks & unchecks the switcher
function checkToggle(check) {
  switcher.checked = check;
}

// Toggles the "dark-mode" class based on if the media query matches
function toggleDarkMode(state) {
  checkToggle(state); // when dark mode on the checkbox is checked

  const hasClass = document.body.classList.contains("dark-mode");
  
  if (state) {
    if (!hasClass) {
      document.body.classList.add("dark-mode");
    }

  } else {
    if (hasClass) {
      document.body.classList.remove("dark-mode");
      darkModeState = false;
    }
  }
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

function switchListener() {
  darkModeState = !darkModeState;
  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
}

// Listen for changes in the OS settings
useDark.addListener(function(evt) {
  toggleDarkMode(evt.matches);
  setDarkModeLocalStorage(evt.matches);
});

// Initial setting
if (localStorage.getItem("dark-mode") === null) {
  toggleDarkMode(darkModeState); // first time user visit site
} else {
  toggleDarkMode(localStorage.getItem("dark-mode") == "true");
}

// Listen for switch change
switcher.addEventListener("change", switchListener);