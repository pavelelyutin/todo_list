import './TodoHeader.css';

function TodoHeader({ title, date, setIsAddModalOpen }) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <p className="header__date">{date}</p>
      </div>

      <button className='header__btn btn-reset' onClick={() => setIsAddModalOpen(true)}>
        <img src="../../../../../src/assets/icons/plus.svg" alt="Add task" />
      </button>
    </header>
  );
}

export default TodoHeader;
