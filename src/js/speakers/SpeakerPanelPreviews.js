import React from 'react';
import PanelSpeakers from './PanelSpeakers';
import SpeakerPreviews from './SpeakerPreviews';

const SpeakerPanelPreviews = () => (
  <SpeakerPreviews
    title="Panel Speakers"
    subtitle={<p>SUB-TITLE</p>}
    speakers={<PanelSpeakers />}
  />
);

export default SpeakerPanelPreviews;
