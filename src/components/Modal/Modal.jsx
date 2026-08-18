import './Modal.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <button className="modal__close btn-reset" onClick={onClose}>
          <img
            src="../../../../../src/assets/icons/close.svg"
            alt="Close modal"
          />
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
