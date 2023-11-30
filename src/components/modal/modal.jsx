import React from 'react';
import './modal.css'; // Modal CSS

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        
        <div className="modal-body">
          {children}
        </div>
      
      </div>
    </div>
  );
};

export default Modal;
