const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('.js-switch-input'),
};

function themeStyle(setStyle, removeStyle, switcherChecked) {
  refs.body.classList.add(setStyle);
  refs.body.classList.remove(removeStyle);
  localStorage.setItem('theme', setStyle);
  refs.switcher.checked = switcherChecked;
}

function setTheme(event) {
  if (event.target.checked) {
    themeStyle(Theme.DARK, Theme.LIGHT, true);
    return;
  }
  themeStyle(Theme.LIGHT, Theme.DARK, false);
}

function storageTheme() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    themeStyle(Theme.LIGHT, Theme.DARK, false);
  }
  if (localStorage.getItem('theme') === Theme.DARK) {
    themeStyle(Theme.DARK, Theme.LIGHT, true);
  }
}

refs.switcher.addEventListener('change', setTheme);
document.addEventListener('DOMContentLoaded', storageTheme);
