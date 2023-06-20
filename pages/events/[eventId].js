import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util.js';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  // const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  const event = props.event;

  if (!event) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
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
  );
}

export async function getStaticProps(context) {

  const {params} = context;
  const id = params.eventId;

  const event = await getEventById(id)

 return {
  props: {
    event: event
  },
  revalidate: 30
 }
};

export async function getStaticPaths(context) {

  const events = await getFeaturedEvents();
  let pathArr = []
  for (let key in events) {
    let item = {params: {eventId: key}};
    pathArr.push(item)
  };

  return {
    paths:pathArr,
    fallback: true
  }
}

export default EventDetailPage;
