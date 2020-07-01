import menu from '../menu.json';
import menuTemlates from '../templates/menu-items.hbs';

const menuList = document.querySelector('.js-menu');

const menuMarkup = menuTemlates(menu);

menuList.insertAdjacentHTML('beforeend', menuMarkup);
