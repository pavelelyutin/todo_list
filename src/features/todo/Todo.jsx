import { useState } from 'react';
import tasks from './data/tasks';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoTabs from './components/TodoTabs/TodoTabs';
import TodoList from './components/TodoList/TodoList';

function ToDo() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main>
      <TodoHeader title="Tasks" date="11 August 2026" />
      <TodoTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <TodoList tasks={tasks} />
    </main>
  );
}

export default ToDo;
