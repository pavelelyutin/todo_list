import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks, onToggle, onEdit, onDelete }) {
  return (
    <section>
      <ul className="tasks">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
