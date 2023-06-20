export async function getAllEvents() {
  const response = await fetch('https://nextjsdb-170f1-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();
  let events = [];
  for (let key in data) {
    let item = {
      id: key, date: data[key]['date'],
      description:data[key]['description'],
      image: data[key]['image'],
      isFeatured: data[key]['isFeatured'],
      location: data[key]['location'],
      title: data[key]['title']
    };
    events.push(item);
  }

  return events;
};

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter(event=>event.isFeatured===true)
};

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};


export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}