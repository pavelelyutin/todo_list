import Modal from '../../../../components/Modal/Modal';

function EditTaskModal({ task, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Edit task</h2>

      <p>{task.title}</p>

      <button type="button">Save</button>
    </Modal>
  );
}

export default EditTaskModal;
