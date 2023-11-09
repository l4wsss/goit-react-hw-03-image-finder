import { ModalDiv, ModalOverlay } from './Modal.styled';
import { Component } from "react";

export class Modal extends Component {
 componentDidMount() {
    window.addEventListener('keydown', this.handleExitModal)
 }

 componentWillUnmount() {
    window.removeEventListener('keydown', this.handleExitModal)
 }

 handleExitModal = e => {
    if (e.code === 'Escape') {
        this.props.onClose()
    }
 }

 render() {
    const { src, alt } = this.props;
    return (
      <ModalOverlay>
        <ModalDiv>
          <img src={src} alt={alt} />
        </ModalDiv>
      </ModalOverlay>
    );
  }
}