import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '../ui/button.js';
import DateIcon from '../icons/date-icon.js';
import AddressIcon from '../icons/address-icon.js'
import ArrowRightIcon from '../icons/arrow-right-icon.js';

function EventItem(props) {

  const {title, image, date, location, id} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month:'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;


  return <li className={classes.item}>
    <img src={'/' + image} alt={title}></img>
    <div className={classes.content}>
      <div className={classes.summary}>
      <h2>{title}</h2>

      <div className={classes.date}>
        <DateIcon></DateIcon>
      <time>{humanReadableDate}</time>
      </div>
      <div className={classes.address}>
        <AddressIcon></AddressIcon>
        <address>{formattedAddress}</address>
      </div>
    </div>
    <div className={classes.actions}>
      <Button link={exploreLink}>
        <span>Explore Event!</span>
        <span className={classes.icon}><ArrowRightIcon></ArrowRightIcon></span>
        </Button>
    </div>
    </div>
  </li>
}

export default EventItem;