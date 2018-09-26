import React from 'react';
import SpeakerPreviews from './SpeakerPreviews';
import WorkshopSpeakers from './WorkshopSpeakers';

const SpeakerWorkshopPreviews = () => (
  <SpeakerPreviews
    title="Workshop Speakers"
    subtitle={
      <p>
        Workshops are designed to be more interactive in nature and educate or
        discuss topics with the audience.
      </p>
    }
    speakers={<WorkshopSpeakers />}
  />
);

export default SpeakerWorkshopPreviews;
