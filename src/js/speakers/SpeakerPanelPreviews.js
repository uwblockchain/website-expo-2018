import React from 'react';
import PanelSpeakers from './PanelSpeakers';
import SpeakerPreviews from './SpeakerPreviews';

const SpeakerPanelPreviews = () => (
  <SpeakerPreviews
    title="Speakers"
    subtitle={
      <p>
        Speakers and panelists looking to educate and connect people on
        blockchain.
      </p>
    }
    speakers={<PanelSpeakers />}
  />
);

export default SpeakerPanelPreviews;
