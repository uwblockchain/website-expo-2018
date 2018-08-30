import React from 'react';
import { Image, Modal, Button } from 'react-bootstrap';
import Speaker from './Speaker';

class SpeakerPreview extends React.Component {
    constructor(props, context) {
      super(props, context);
  
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
      return (
        <div>  
          <div onClick={this.handleShow}>
            <Image src={this.props.img} responsive/>
            <h3 className="speaker-preview-name">{this.props.name}</h3>
            <div className="speaker-preview-job">{this.props.job}</div>
          </div>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Button onClick={this.handleClose}>Back</Button>
            </Modal.Header>
            <Modal.Body>
              <Speaker 
                img={this.props.img}
                job={this.props.job}
                name={this.props.name}
                body={this.props.body}
              />
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

export default SpeakerPreview;