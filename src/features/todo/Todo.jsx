import { useState } from 'react';
import initialTasks from './data/tasks';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoTabs from './components/TodoTabs/TodoTabs';
import TodoList from './components/TodoList/TodoList';
import Modal from '../../components/Modal/Modal';

function ToDo() {
  const [activeTab, setActiveTab] = useState('all');
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      return true;
    }

    return task.status === activeTab;
  });

  return (
    <main>
      <div className="todo">
        <TodoHeader title="Tasks" date="11 August 2026" />
        <TodoTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <TodoList tasks={filteredTasks} onToggle={handleToggle} />
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2>Edit task</h2>
            <p>Hello from modal</p>
          </Modal>
        )}
      </div>
    </main>
  );
}

export default ToDo;
