import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks, onToggle }) {
  return (
    <section>
      <ul className="tasks">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
