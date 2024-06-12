import { Register } from '../../Pages/Register/Register';
import { NewEventForm } from '../NewEventForm/NewEventForm';
import './Hero.css';

export const heroData = {
  text: 'Bienvenido a nuestro espacio dedicado a los juegos de mesa: donde la diversión y la estrategia se encuentran. Somos el lugar perfecto para los amantes de los dados, las cartas y los tableros. Nuestros eventos son más que partidas; son experiencias compartidas, risas y momentos inolvidables. Únete a nosotros para sumergirte en un mundo de estrategia, creatividad y camaradería. <br> ¡Ven a jugar y crea recuerdos inolvidables con nosotros!',
  image: '/assets/boardgame03.avif'
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