import './Modal.css';

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <button className="modal__close" onClick={onClose}>
          x
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
