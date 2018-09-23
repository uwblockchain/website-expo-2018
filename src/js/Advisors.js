import React from 'react';
import { Row } from 'react-bootstrap';
import SpeakerPreview from './speakers/SpeakerPreview';
import advisor1Img from '../img/advisors/Sandeep-Krishnamurthy.jpg';

const previewTitle = {
  fontWeight: 700,
  color: 'white',
  lineHeight: 1.5
};

// const previewSubTitle = {
//   fontWeight: 400,
//   color: 'white',
//   lineHeight: 1.5
// };

const Advisors = () => (
  <div className="container-flex speaker-previews">
    <div className="container">
      <div className="speakers-title">
        <h2 style={previewTitle}>Advisors</h2>
        {/* <h4 style={previewSubTitle}>
          Speakers from various industries will share <br />
          their insights.
        </h4> */}
      </div>
      <Row>
        <SpeakerPreview
          img={advisor1Img}
          name={<b>Sandeep Krishnamurthy</b>}
          body={
            <p>
              Sandeep Krishnamurthy is the first Dean of the AACSB-accredited
              School of Business at University of Washington, Bothell. This role
              involves managing the School of Business as its chief academic,
              and, administrative officer, with primary responsibility for
              faculty, students, curriculum, budgets, and external engagement.
              He received his Ph.D. from the University of Arizona in marketing
              with a minor in Economics in 1996.
            </p>
          }
        />
      </Row>
    </div>
  </div>
);

export default Advisors;
