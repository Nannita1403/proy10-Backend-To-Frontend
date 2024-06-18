import { apiRequest } from '../../../Utils/ApiRequest';
import { showToast } from '../../Toasty/Toasty';
import './AssistanceButton.css';


export const EventAssistanceButton = (buttonContainer, eventObject) => {
  //Si el usuario está identificado, verá un botón para manejar su asistencia a eventos
  if (localStorage.getItem('token')) {
    const user = JSON.parse(localStorage.getItem('user'));
    const eventId = eventObject._id;
    const joinEventButton = document.createElement('button');
    const userIsGoing = eventObject.assistants.find(
      assistant => assistant._id === user._id
    );
    if (userIsGoing) {
      //Si ya está anotado, el botón le permite darse de baja
      joinEventButton.textContent = 'Darme de baja';
      joinEventButton.classList.add('negative');
      joinEventButton.addEventListener('click', e => {
        handleEventAssistance({ e, eventId, userIsGoing });
      });
    } else {
      //Si no está anotado, click en el botón para informar su asistencia
      joinEventButton.textContent = 'Unirme';
      joinEventButton.addEventListener('click', e => {
        handleEventAssistance({ e, eventId, userId: user._id });
      });
    }
    buttonContainer.append(joinEventButton);
  }
};

const handleEventAssistance = async ({ e, eventId, userId, userIsGoing }) => {
  e.target.classList.add('loading');
  const requestObject = {
    endpoint: 'events',
    method: 'PUT',
  };
  if (userIsGoing) {
    //Si el usuario está anotado al evento, uso el endpoint para darlo de baja
    requestObject.id = `${eventId}/removeAssistant`;
  } else {
    //Si el usuario NO está anotado al evento, uso el endpoint general y paso los datos del asistente
    requestObject.id = eventId;
    requestObject.body = { assistants: userId };
  }
  //En ambos casos, se hace la petición
  const res = await apiRequest(requestObject);
  const response = await res.json();

  if (res.status === 200) {
    //Si sale todo bien, se actualiza el botón
    const { updatedEvent } = response;
    EventAssistanceButton(e.target.parentNode, updatedEvent);
    e.target.remove();
  } else {
    //Si no, se informa al usuario del error
    showToast(response, 'red');
  }
};