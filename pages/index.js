
import EventList from '../components/events/event-list';
import { getAllEvents, getFeaturedEvents} from '../helpers/api-util.js';

function HomePage(props) {

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
