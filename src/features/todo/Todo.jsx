import { useState } from 'react';
import initialTasks from './data/tasks';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoTabs from './components/TodoTabs/TodoTabs';
import TodoList from './components/TodoList/TodoList';
import EditTaskModal from './components/EditTaskModal/EditTaskModal';
import DeleteConfirmModal from './components/DeleteConfirmModal/DeleteConfirmModal';

function ToDo() {
  const [activeTab, setActiveTab] = useState('all');
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

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

  function handleEdit(task) {
    setEditingTask(task);
  }

  function handleDelete(task) {
    setDeletingTask(task);
  }

  function handleEditSave(taskId, newTitle) {
    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          title: newTitle,
        };
      });
    });

    setEditingTask(null);
    console.log(tasks);
  }

  function handleDeleteConfirm(taskId) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => {
        return task.id !== taskId;
      });
    });

    setDeletingTask(null);
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
        <TodoList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {editingTask && (
          <EditTaskModal
            task={editingTask}
            onClose={() => setEditingTask(null)}
            onSave={handleEditSave}
          />
        )}
        {deletingTask && (
          <DeleteConfirmModal
            task={deletingTask}
            onClose={() => setDeletingTask(null)}
            onConfirm={handleDeleteConfirm}
          />
        )}
      </div>
    </main>
  );
}

export default ToDo;
