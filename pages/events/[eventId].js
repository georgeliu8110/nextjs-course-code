import {useRouter} from 'next/router';
import {getEventById} from '../../dummy-data.js';
import EventSummary from '../../components/event-detail/event-summary.js';
import EventLogistics from '../../components/event-detail/event-logistics.js';
import EventContent from '../../components/event-detail/event-content.js'
import { Fragment } from 'react';

function EventDetailPage() {

  const router = useRouter();
  const eventId = router.query.eventId;
  console.log('router.query',router.query)
  console.log('eventId',eventId)
const event = getEventById(eventId);


if (!event) {
  return (<p>No event found!</p>)
};

  return (
  <Fragment>
    <EventSummary title={event.title}/>
    <EventLogistics
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title}
      />

    <EventContent>
        <p>{event.description}</p>
    </EventContent>
  </Fragment>
  )
}

export default EventDetailPage;


