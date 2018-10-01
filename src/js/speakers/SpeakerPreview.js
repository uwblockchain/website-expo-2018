import React from 'react';
import { Image, Modal, Button, Col } from 'react-bootstrap';
import SpeakerModalContent from './SpeakerModalContent';

class SpeakerPreview extends React.Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { img, name, job, body, linkedIn, email, twitter } = this.props;

    const imgSrc = require('../../img/speakers/' + img);

    return (
      <Col md={4} id="col">
        <div className="speaker-preview">
          <div onClick={this.handleShow}>
            <Image src={imgSrc} responsive />
            <h3 className="speaker-preview-name">{name}</h3>
            <div className="speaker-preview-job">{job}</div>
          </div>
          <Modal
            className="speaker-modal"
            show={this.state.show}
            onHide={this.handleClose}
          >
            <Modal.Body className="modal-body">
              <SpeakerModalContent
                img={imgSrc}
                btn={
                  <Button className="modal-button" onClick={this.handleClose}>
                    {'<  BACK'}
                  </Button>
                }
                job={job}
                name={name}
                body={body}
                linkedIn={linkedIn}
                email={email}
                twitter={twitter}
              />
            </Modal.Body>
          </Modal>
        </div>
      </Col>
    );
  }
}

export default SpeakerPreview;
