import { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';

function EditTaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);

  return (
    <Modal onClose={onClose}>
      <h2>Edit task</h2>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="button" onClick={() => onSave(task.id, title)}>
        Save
      </button>
      <p>current value: {title}</p>
    </Modal>
  );
}

export default EditTaskModal;
