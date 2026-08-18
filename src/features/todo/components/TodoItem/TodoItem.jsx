import './TodoItem.css';
import formatDate from '../../../../utils/formatDate';

function TodoItem({ task, onToggle, onEdit, onDelete }) {
  const isDone = task.status === 'done';

  return (
    <li className={`tasks__item task ${isDone ? 'done' : ''}`}>
      <div className="task__main">
        <button
          className={`task__checkbox ${isDone ? 'done' : ''}`}
          onClick={() => onToggle(task.id)}
        ></button>

        <div className="task__content">
          <h3 className={`task__title ${isDone ? 'done' : ''}`}>
            {task.title}
          </h3>
          <span className="task__date">{formatDate(task.createdAt)}</span>
        </div>
      </div>

      <div className="task__actions">
        <button className="task__edit btn-reset" onClick={() => onEdit(task)}>
          <img
            src="../../../../../src/assets/icons/pencil.svg"
            alt="Edit task"
          />
        </button>
        <button className="task__delete btn-reset" onClick={() => onDelete(task)}>
          <img
            src="../../../../../src/assets/icons/trash.svg"
            alt="Delete task"
          />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
