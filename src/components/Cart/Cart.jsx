import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Cart = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
      <ModalBody>Sample Modal Body Text to display...</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Okay
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Cart;
