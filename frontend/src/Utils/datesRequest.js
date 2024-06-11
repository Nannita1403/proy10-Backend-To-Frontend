export const dateComparator = event => {
    const today = new Date();
    const eventDate = new Date(event.date);
    if (eventDate < today) {
      event.isPast = true;
    } else {
      event.isUpcoming = true;
    }
    return event;
  };
  
  export const sortByDate = data =>
    data.sort(({ date: a }, { date: b }) => (a < b ? -1 : a > b ? 1 : 0));