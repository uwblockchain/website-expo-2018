import React from 'react';
import { Image } from 'react-bootstrap';
// import cube from '../../img/cube.png';
// import { Link } from 'react-scroll';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement
// } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import schedulePNG from '../../img/schedule-nobg.png';

// const Item = props => (
//   // <VerticalTimelineElement
//   //   iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
//   //   icon={<Image circle width={'100%'} height={'100%'} src={cube} />}
//   // >
//   //   <h4>{props.text}</h4>
//   // </VerticalTimelineElement>
// );

const Schedule = () => (
  <div className="text-center">
    <div className="container">
      <p className="schedule-title">Our Schedule</p>
      <Image fluid src={schedulePNG} className="schedule" />
    </div>
  </div>
);

// const verticalTimelineOld = () => (
//   <div>
//     <VerticalTimeline>
//       <Item className="item" text="Event Kick Off" />
//       <Item className="item" text="State of the Blockchain Union" />
//       <Item className="item" text="Ethics of Blockchain" />
//       <Item className="item" text="Panel: Investment" />
//       <Item className="item" text="Panel: Diversity in Blockchain" />
//       <Item className="item" text="Debate: 'Is Bitcoin a Fad'" />
//       <Item className="item" text="Speaker: Reinventing Customer Loyalty" />
//       <Item className="item" text="Food Provenance" />
//       <Item className="item" text="Panel: 'Cryptos'" />
//       <Item className="item" text="Keynote TBD" />
//       <Item className="item" text="Closing Remarks" />
//     </VerticalTimeline>
//     <div className="container text-center">
//       <h4 className="schedule-contact-text">Interested in speaking?</h4>
//       <Link to="contact" smooth={true} className="btn btn-hero">
//         CONTACT US
//       </Link>
//     </div>
//   </div>
// );

export default Schedule;
