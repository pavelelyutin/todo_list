import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';

function DeleteConfirmModal({ task, onClose, onConfirm }) {
  return (
    <Modal onClose={onClose}>
      <h2 className="modal__title">Delete task?</h2>

      <p className="modal__text">
        Are you sure you want to delete "{task.title}"?
      </p>

      <div className="modal__actions">
        <button className="btn btn-reset" onClick={() => onConfirm(task.id)}>
          Delete
        </button>

        <button className="btn btn-reset" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmModal;
