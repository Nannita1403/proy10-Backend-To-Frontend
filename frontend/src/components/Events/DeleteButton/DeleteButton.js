import './DeleteButton.css';
import { apiRequest } from '../../../Utils/ApiRequest';
import { Modal } from '../../PartsPage/Modal/Modal';
import { showToast } from '../../Toasty/Toasty';

export const DeleteEventButton = (buttonContainer, eventObject) => {
  const user = JSON.parse(localStorage.getItem('user'));
  //Si el usuario tiene permisoso de administrador, se muestra un botón que permite eliminar eventos
  if (user.role === 'admin') {
    const eventId = eventObject._id;
    const deleteEventButton = document.createElement('button');
    const deleteImg = document.createElement('img');
    deleteImg.src = './assets/delete.png';
    deleteEventButton.classList.add('del-btn', 'round');
    deleteEventButton.append(deleteImg);

    deleteEventButton.addEventListener('click', event => {
      const warning = warningBanner();
      document.body.append(warning);
      const confirmationBtn = warning.querySelector('button');
      confirmationBtn.addEventListener('click', () => {
        confirmationBtn.classList.add('loading');
        deleteEvent(event, eventId);
        //tomo el evento del listener original para poder eliminar la tarjeta facilmente
      });
    });
    buttonContainer.append(deleteEventButton);
  }
};

/* Lógica para eliminar el evento */
const deleteEvent = async (e, eventId) => {
  const res = await apiRequest({
    endpoint: 'events',
    id: eventId,
    method: 'DELETE',
  });

  const response = await res.json();
  //Si sale todo bien, se elimina la tarjeta y se muestra un mensaje
  if (res.status === 200) {
    showToast(response.message, 'red');
    e.target.parentNode.remove();
    document.querySelector('.modal').remove();
  } else {
    //Si no, se informa al usuario del error
    showToast(response, 'red');
  }
};

const warningBanner = () => {
  const deleteWarningContainer = Modal();
  deleteWarningContainer.id = 'del-event';
  const warningBanner = document.createElement('div');
  warningBanner.innerHTML = `
  <p>¿Estás seguro de que quieres eliminar el evento?</p>
  <button class="del-btn">Sí. Eliminar el evento</button>
  `;
  deleteWarningContainer.append(warningBanner);
  return deleteWarningContainer;
};