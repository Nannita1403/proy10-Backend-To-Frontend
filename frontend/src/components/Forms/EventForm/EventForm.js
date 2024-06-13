import './EventForm.css';
//import { showToast } from '../Toast/Toast';
//import { Modal } from '../Modal/Modal';

import { createEventForm } from '../../../Data/Formularios';
import { UserForm } from '../UserForm/UserForm';
import { listOfEvents } from '../../Events/Section/SectionEvent';
import { apiRequest } from '../../../Utils/ApiRequest';

const postEvent = async e => {
  e.preventDefault();

  const gameName = document.querySelector('#game').value;
  const dataList = document.querySelector('#list-of-games');

  const body = {
    name: document.querySelector('#name').value,
    date: document.querySelector('#date').value,
    location: document.querySelector('#location').value,
    game: dataList
      .querySelector(`[value="${gameName}"]`)
      .getAttribute('data-id'),
  };

  const res = await apiRequest({
    endpoint: 'events',
    method: 'POST',
    body,
  });

  const response = await res.json();
  if (res.status === 201) {
    const { message } = response;
    showToast(message, 'linear-gradient(to right, #00b09b, #96c93d)');
    document.querySelector('#create-event').remove();
    const upcomingEventsDiv = document.querySelector(
      'section.isUpcoming > div'
    );
    await listOfEvents(upcomingEventsDiv, 'isUpcoming');
  } else {
    showToast(response, 'red');
  }
};
export const NewEventForm = () => {
  const eventFormContainer = Modal();
  eventFormContainer.id = 'create-event';

  UserForm(eventFormContainer, 'Crea tu propio evento', createEventForm);
  eventFormContainer
    .querySelector('[type="date"]')
    .addEventListener('change', e => {
      const inputDate = new Date(e.target.value);
      const now = new Date();
      if (now > inputDate) {
        alert('La fecha del evento debe ser futura');
      }
    });
  const gameInputContainer = document.createElement('div');
  gameInputContainer.classList.add('input-container');
  gameInputContainer.innerHTML = `  <label class="iLabel" for="game">Juego</label>
  <input class="input" list="list-of-games" id="game" name="game">
  <datalist id="list-of-games"></datalist>`;

  document.body.append(eventFormContainer);
  document
    .querySelector('#create-event button')
    .insertAdjacentElement('beforebegin', gameInputContainer);

  const datalistOfGames = document.querySelector('#list-of-games');
  apiRequest({ method: 'get', endpoint: 'boardgames' })
    .then(res => res.json())
    .then(listOfGames => {
      for (const game of listOfGames) {
        const option = document.createElement('option');
        option.value = game.title;
        option.setAttribute('data-id', game._id);
        datalistOfGames.append(option);
      }
    });
  document
    .querySelector('#create-event form')
    .addEventListener('submit', postEvent);
};