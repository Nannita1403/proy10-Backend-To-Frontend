import './SectionEvent.css';
import { dateComparator, sortByDate } from '../../../Utils/datesRequest';
import { EventCard } from '../Card/CardEvent';
import { apiRequest } from '../../../Utils/ApiRequest';

export const EventsSection = ({ title, eventTiming }) => {
  const eventSection = document.createElement('section');
  eventSection.classList.add('events', eventTiming);
  const eventsTitle = document.createElement('h2');
  const eventDiv = document.createElement('div');
  eventsTitle.textContent = title;
  eventSection.append(eventsTitle);

  eventDiv.innerHTML = ` 
  <dotlottie-player class="loader" src="https://lottie.host/b5ff9ff5-0262-45c7-b2d6-ba2a7e8487bc/d035grDmCh.json" speed="1" loop autoplay></dotlottie-player>`;
  eventSection.append(eventDiv);

  return eventSection;
};

export const listOfEvents = async (parentNode, eventTiming) => {
  const res = await apiRequest ({ method: 'get', endpoint: 'events' });
  const listOfEvents = await res.json();
  parentNode.innerHTML = '';
  sortByDate(listOfEvents);
  for (let event of listOfEvents) {
    event = dateComparator(event);
    if (event[eventTiming]) {
      const eventCard = EventCard(event);
      parentNode.classList.add('events-container');
      parentNode.append(eventCard);
    }
  }
};