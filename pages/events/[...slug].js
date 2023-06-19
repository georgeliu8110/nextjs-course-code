import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../dummy-data.js';
import EventList from '../../components/events/event-list.js';

function FilteredEventsPage() {

  const router = useRouter();

  const filteredData = router.query.slug;

  if(!filteredData) {
    return <p>Loading ......</p>
  }

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filter, please adjust your filter</p>
  };

  const filteredEvents = getFilteredEvents({year:numYear, month:numMonth});

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for your filter!</p>
  }

  return <div>
    <EventList items={filteredEvents}></EventList>
  </div>
};

export default FilteredEventsPage;