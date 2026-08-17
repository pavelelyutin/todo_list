import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks, onToggle, onEdit }) {
  return (
    <section>
      <ul className="tasks">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
