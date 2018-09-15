import React from 'react';
import SpeakerPreviews from './SpeakerPreviews';
import WorkshopSpeakers from './WorkshopSpeakers';

const SpeakerWorkshopPreviews = () => (
  <SpeakerPreviews
    title="TITLE"
    subtitle={<p>SUB-TITLE</p>}
    speakers={<WorkshopSpeakers />}
  />
);

export default SpeakerWorkshopPreviews;
