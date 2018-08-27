import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const SpeakerPreview = (props) => (
    <div>
        <Image src={props.img} responsive/>
        <h3 className="speaker-preview-name">{props.name}</h3>
        <p className="speaker-preview-job">{props.job}</p>
    </div>
)


export default SpeakerPreview;