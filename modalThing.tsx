import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export function ModalThing(props: any) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img src={props.pic} width='300' height='200' onClick={openModal}></img>
      <Modal
      ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={props.pic} width='700' height='1050' ></img>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.words}</h2>
        <button style={{color: 'black'}} onClick={closeModal} >Close</button>
      </Modal>
    </div>
  );
}