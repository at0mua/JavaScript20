const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('.js-switch-input'),
};

function setLightTheme() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

function setDarkTheme() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function setTheme(event) {
  if (event.target.checked) {
    setDarkTheme();
    return;
  }
  setLightTheme();
}

function storageTheme() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    setLightTheme();
    refs.switcher.checked = false;
  }
  if (localStorage.getItem('theme') === Theme.DARK) {
    setDarkTheme();
    refs.switcher.checked = true;
  }
}

refs.switcher.addEventListener('change', setTheme);
document.addEventListener('DOMContentLoaded', storageTheme);
