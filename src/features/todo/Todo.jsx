import { useState } from 'react';
import initialTasks from './data/tasks';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoTabs from './components/TodoTabs/TodoTabs';
import TodoList from './components/TodoList/TodoList';

function ToDo() {
  const [activeTab, setActiveTab] = useState('all');
  const [tasks, setTasks] = useState(initialTasks);

  function handleToggle(taskId) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          status: task.status === 'done' ? 'in-progress' : 'done',
        };
      });
    });
  }

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'all') {
      return true
    }

    return task.status === activeTab;
  })

  return (
    <main>
      <TodoHeader title="Tasks" date="11 August 2026" />
      <TodoTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <TodoList tasks={filteredTasks} onToggle={handleToggle} />
    </main>
  );
}

export default ToDo;
