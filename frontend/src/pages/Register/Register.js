import './Register.css';
import { UserForm } from '../../components/Forms/UserForm/UserForm';
import { registerForm } from '../../Data/Formularios';
import { Login, loginRequest } from '../Login/Login';
import { showToast } from '../../components/Toasty/Toasty';
import { apiRequest } from '../../Utils/ApiRequest';

const registerLayout = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  //Creo el contenedor para el formulario de registro
  const registerSection = document.createElement('section');
  registerSection.id = 'register';
  //Creo el formulario
  UserForm(registerSection, 'Register', registerForm);
  //Agrego un link a la sección de registro
  const isRegisteredQuery = document.createElement('p');
  isRegisteredQuery.innerHTML = ` ¿Ya estás registrado? <a href=#>Login</a>`;
  const title = registerSection.querySelector('h2');
  title.insertAdjacentElement('afterend', isRegisteredQuery);
  isRegisteredQuery.querySelector('a').addEventListener('click', Login);
  //Agrego los componentes al contenedor
  main.append(registerSection);
};

const registerSubmit = async e => {
  e.preventDefault();
  //Recojo los datos del formulario
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;
  //Los envio a la BBDD con un post request
  const response = await apiRequest({
    endpoint: 'users/register',
    method: 'POST',
    body: { username, email, password },
  });

  //Recojo la respuesta
  const data = await response.json();
  //Si hay algun error, lo muestro al usuario
  if (response.status !== 201) {
    showToast(data, 'red');
  } else {
    //Si no hay errores, logueo al usuario y redirijo al home
    loginRequest(username, password);
  }
};

export const Register = () => {
  registerLayout();
  document
    .querySelector('#register form')
    .addEventListener('submit', registerSubmit);
};