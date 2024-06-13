import { EventAssistanceButton } from '../AssistanceButton/AssistanceButton';
import { DeleteEventButton } from '../DeleteButton/DeleteButton';
import './EventCard.css';

export const EventCard = eventObject => {
  const eventContainer = document.createElement('article');
  eventContainer.classList.add('flex-container');
  eventContainer.innerHTML = `
  <div class="img-container">
    <img src="${eventObject.img ?? eventObject.game?.img[0]}" alt="${
    eventObject.name
  }"/>
  </div>
  <div class="event-info flex-container">
    <div>
      <h4>${eventObject.name}</h4>
      <p>${eventObject.game?.title || 'Juego a confirmar'}</p>
      <p>${eventObject.date?.split('T')[0] || 'Fecha a confirmar'}</p>
      <p>${eventObject?.location || 'Ubicación a confirmar'}</p>
    </div>
  </div>
  `;
  if (localStorage.getItem('user')) {
    DeleteEventButton(eventContainer, eventObject);
  }
  if (eventObject.isUpcoming) {
    EventAssistanceButton(
      eventContainer.querySelector('.event-info'),
      eventObject
    );
  }
  return eventContainer;
};