import React from 'react';
import SpeakerPreviews from './SpeakerPreviews';
import WorkshopSpeakers from './WorkshopSpeakers';

const SpeakerWorkshopPreviews = () => (
  <SpeakerPreviews
    title="Workshop Speakers"
    subtitle={<p>SUB-TITLE</p>}
    speakers={<WorkshopSpeakers />}
  />
);

export default SpeakerWorkshopPreviews;
