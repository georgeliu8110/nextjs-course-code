import {getAllEvents} from '../../dummy-data.js';
import EventList from '../../components/events/event-list.js';
import EventsSearch from '../../components/events/events-search.js';
import {useRouter} from 'next/router';

function AllEventsPage() {

  const events = getAllEvents();
  const router = useRouter();

  const seachHandler = (year, month) => {
     const fullPath = `/events/${year}/${month}`;
     router.push(fullPath);
  }

  return<div>
    <EventsSearch onSearch={seachHandler}></EventsSearch>
    <EventList items={events}></EventList>
  </div>
};

export default AllEventsPage;