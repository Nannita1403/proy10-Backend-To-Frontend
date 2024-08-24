import { Register } from '../../../pages/Register/Register';
import { NewEventForm } from '../../Forms/EventForm/EventForm';
import './Hero.css';

export const heroData = {
  text: 'Bienvenido a nuestro espacio dedicado a los mejores EVENTOS <br> Comprá tus tickets de forma segura y coleccionalos!. <br> Mantenete actualizado de las próximas fechas & rumores. <br> Descubrí nuevos artistas y enterate de todas las novedades. <br> Conectate con los que escuchan la misma música que vos.',
  image: '/backEventHome.jpeg'
};
const heroSection = ({ text, image }) => {
  return `
    <section id="hero" style="background-image:url(${image})">
    <div>
      <p>${text}    
      </p>
      <button>${
        localStorage.getItem('token') ? 'Crea tu propio evento' : 'Unirme'
      }</button>
    </div>
    </section>
    `;
};

export const Hero = (parentNode, { text, image }) => {
  parentNode.innerHTML = heroSection({ text, image });
  const heroButton = document.querySelector('#hero button');
  if (localStorage.getItem('token')) {
    heroButton.addEventListener('click', NewEventForm);
  } else {
    heroButton.addEventListener('click', Register);
  }
};