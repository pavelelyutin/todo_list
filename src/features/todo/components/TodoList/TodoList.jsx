import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks }) {
  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
