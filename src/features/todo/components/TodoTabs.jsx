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
  return (
    <div>
      {tabs.map((tab) => (
        <button key={tab.id}>{tab.label}</button>
      ))}
    </div>
  );
}

export default TodoTabs;
