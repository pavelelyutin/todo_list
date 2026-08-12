import { useState } from 'react';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoTabs from './components/TodoTabs/TodoTabs';

function ToDo() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main>
      <TodoHeader title="Tasks" date="11 August 2026" />
      <TodoTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}

export default ToDo;
