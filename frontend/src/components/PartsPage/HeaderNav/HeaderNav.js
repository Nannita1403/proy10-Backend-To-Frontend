import { Events } from '../../../pages/Events/Events';
import { Home } from '../../../pages/Home/Home';
import { Login } from '../../../pages/Login/Login';
import { Register } from '../../../pages/Register/Register';
import { profileIcon } from '../ImgProfile/ImgProfile';
import './HeaderNav.css';

const navLayout = () => `
<ul class="flex-container">
  <li>
    <a href="#" id="events-link">Eventos</a>
  </li>
  <li id="log-link">

      ${
        localStorage.getItem('token')
          ? profileIcon(JSON.parse(localStorage.getItem('user')).profilePic)
          : 'Identificarse'
      }

  </li>
</ul>`;

const loginMenuLayout = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-login';
  const loginLink = document.createElement('a');
  loginLink.id = 'login-link';
  loginLink.innerText = 'Ingresar';
  const registerLink = document.createElement('a');
  registerLink.id = 'register-link';
  registerLink.innerText = 'Registrarme';
  loginLink.addEventListener('click', Login);
  registerLink.addEventListener('click', Register);
  menuContainer.append(loginLink, registerLink);
  return menuContainer;
};

export const Header = () => {
  const header = document.querySelector('header nav');
  header.innerHTML = navLayout();
  const homeLink = document.querySelector('#bombo-logo');
  homeLink.addEventListener('click', Home);
  const eventsLink = document.querySelector('#events-link');
  eventsLink.addEventListener('click', Events);
  const logLink = document.querySelector('#log-link');

  if (localStorage.getItem('token')) {
    document.querySelector('#menu-login');
    logLink.addEventListener('click', () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      Header();
      Home();
    });
  } else {
    logLink.append(loginMenuLayout());
  }
};

export const cleanHeader = () => {
  const headerLinks = document.querySelectorAll('header > nav > ul > li');
  for (const link of headerLinks) {
    link.classList.remove('current-location');
  }
};