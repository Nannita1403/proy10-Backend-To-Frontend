import { EventAssistanceButton } from '../AssistanceButton/AssistanceButton';
import { DeleteEventButton } from '../DeleteButton/DeleteButton';
import './CardEvent.css';

export const EventCard = eventObject => {
  const eventContainer = document.createElement('article');
  eventContainer.classList.add('flex-container');
  eventContainer.innerHTML = `
  <div class="img-container">
    <img src="${eventObject.img ?? eventObject.artist?.img[0]}" alt="${
    eventObject.name}"/>
  </div>
  <div class="event-info flex-container">
    <div>
      <h4>${eventObject.name}</h4>
      <p>${eventObject?.location || 'Ubicación a confirmar'}</p>
      <p>${eventObject.artists?.name || 'Artistas a confirmar'}</p>
      <p>${eventObject.date?.split('T')[0] || 'Fecha a confirmar'}</p>
      <p>${eventObject.price || 'Precio a confirmar'}</p>
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