import React from 'react';
import '../../css/Speaker.css';
import Speaker1 from './Speaker-1';
import Speaker2 from './Speaker-2';
import Speaker3 from './Speaker-3';
import { PageHeader } from 'react-bootstrap';

const Speakers = () => (
  <div>
    <PageHeader>Speakers</PageHeader>
    <Speaker1 />
    <Speaker2 />
    <Speaker3 />
  </div>
);

export default Speakers;
