function TodoHeader({ title, date }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{date}</p>
        </header>
    );
}

export default TodoHeader;