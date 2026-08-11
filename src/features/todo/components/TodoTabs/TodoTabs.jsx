import { useState } from 'react';
import './TodoTabs.css'

const tabs = [
  {
    id: 'all',
    label: 'all',
  },
  {
    id: 'todo',
    label: 'todo',
  },
  {
    id: 'in-progress',
    label: 'in progress',
  },
  {
    id: 'done',
    label: 'done',
  },
];

function TodoTabs() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tabs__button ${activeTab === tab.id ? 'acitve' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TodoTabs;
