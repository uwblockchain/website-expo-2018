import React from 'react';
import '../../css/Speakers.css';
import Speaker1 from './Speaker-1';
import Speaker2 from './Speaker-2';
import Speaker3 from './Speaker-3';
import { PageHeader } from 'react-bootstrap';

const Speakers = () => (
  <div>
    <PageHeader className="speakers-header">Speakers</PageHeader>
    <Speaker1 className="speaker" />
    <Speaker2 className="speaker" />
    <Speaker3 className="speaker" />
  </div>
);

export default Speakers;
