import './TodoItem.css';

function TodoItem({ task }) {
  return (
    <li className="tasks__item task">
      <div className="task__main">
        <button className="task__checkbox"></button>

        <div className="task__content">
          <h3 className="task__title">{task.title}</h3>
          <span className="task__date">{task.createdAt}</span>
        </div>
      </div>

      <div className="task__actions">
        <button className='task__edit'>edit</button>
        <button className='task__delete'>delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
