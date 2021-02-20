import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import letter from '../assets/letter.jpg';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <div className="modal-content">
          <img className="letter" src={letter} alt="letter" />
          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <button>subscribe</button>
          </div>
        </div>

        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
