import React from 'react';
import { Image } from 'react-bootstrap';
import cube from '../../img/cube.png';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Item = props => (
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={<Image circle width={'100%'} height={'100%'} src={cube} />}
  >
    <h4>{props.text}</h4>
  </VerticalTimelineElement>
);

const Schedule = () => (
  <div>
    <div className="container">
      <p className="schedule-title">Our tentative schedule...</p>
    </div>

    <VerticalTimeline>
      <Item className="item" text="Introduction" />
      <Item className="item" text="Ethics of Blockchain" />
      <Item className="item" text="Investment Panel" />
      <Item className="item" text="Panel: Diversity in Blockchain" />
      <Item className="item" text="Debate: 'Is Bitcoin a Fad'" />
      <Item className="item" text="Speaker: 'Reinventing Customer Loyalty'" />
      <Item className="item" text="Food Provenance" />
      <Item className="item" text="Big Panel: 'Cryptos'" />
      <Item className="item" text="Keynote TBD" />
      <Item className="item" text="Closing Remarks" />
    </VerticalTimeline>
  </div>
);

export default Schedule;
