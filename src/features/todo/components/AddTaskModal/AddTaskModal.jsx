import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';

function AddTaskModal({ onClose, onSave }) {
  const [title, setTitle] = useState('');

  return (
    <Modal onClose={onClose}>
      <h2>Add task</h2>

      <input
        className="modal__input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="modal__actions">
        <button className="btn btn-reset" onClick={() => onSave(title)}>
          Add
        </button>

        <button className="btn btn-reset" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default AddTaskModal;
