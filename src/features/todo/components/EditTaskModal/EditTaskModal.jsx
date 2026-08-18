import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';

function EditTaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);

  return (
    <Modal onClose={onClose}>
      <h2 className="modal__title">Edit task</h2>

      <input
        className="modal__input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="modal__actions">
        <button
          className="btn btn-reset"
          onClick={() => onSave(task.id, title)}
        >
          Save
        </button>
        <button className="btn btn-reset" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default EditTaskModal;
