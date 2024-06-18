import "./Home.css";
import { cleanHeader } from '../../components/PartsPage/HeaderNav/HeaderNav';
import { Hero, heroData } from '../../components/PartsPage/Hero/Hero';
import {EventsSection,listOfEvents,} from '../../components/Events/Section/SectionEvent';

export const Home = async () => {
  cleanHeader();

  const main = document.querySelector('main');
  Hero (main, heroData);

  const eventSection = EventsSection({
    title: 'Próximos Eventos',
    eventTiming: 'isUpcoming',
  });
  main.append(eventSection);
  await listOfEvents(eventSection.querySelector('div'), 'isUpcoming');
};