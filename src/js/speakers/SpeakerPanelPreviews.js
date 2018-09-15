import React from 'react';
import PanelSpeakers from './PanelSpeakers';
import SpeakerPreviews from './SpeakerPreviews';

const SpeakerPanelPreviews = () => (
  <SpeakerPreviews
    title="Engage with blockchain professionals"
    subtitle={
      <p>
        Speakers from various industries will share <br />
        their insights.
      </p>
    }
    speakers={<PanelSpeakers />}
  />
);

export default SpeakerPanelPreviews;
