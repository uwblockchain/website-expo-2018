import React from 'react';
import { Image, Modal, Button, Col } from 'react-bootstrap';
import SpeakerModalContent from './SpeakerModalContent';

class SpeakerPreview extends React.Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const imgSrc = require('../../img/speakers/' + this.props.img);
    return (
      <Col md={4} id="col">
        <div className="speaker-preview">
          <div onClick={this.handleShow}>
            <Image src={imgSrc} responsive />
            <h3 className="speaker-preview-name">{this.props.name}</h3>
            <div className="speaker-preview-job">{this.props.job}</div>
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
                job={this.props.job}
                name={this.props.name}
                body={this.props.body}
                linkedIn={this.props.linkedIn}
                email={this.props.email}
                twitter={this.props.twitter}
              />
            </Modal.Body>
          </Modal>
        </div>
      </Col>
    );
  }
}

export default SpeakerPreview;
