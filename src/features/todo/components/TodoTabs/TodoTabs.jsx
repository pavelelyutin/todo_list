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

function TodoTabs({ activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tabs__button ${activeTab === tab.id ? 'acitve' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TodoTabs;
