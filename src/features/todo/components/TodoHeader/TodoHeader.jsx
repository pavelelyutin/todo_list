import './TodoHeader.css'

function TodoHeader({ title, date }) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__date">{date}</p>
        </header>
    );
}

export default TodoHeader;