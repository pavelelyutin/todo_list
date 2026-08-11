import TodoHeader from "./components/TodoHeader";
import TodoTabs from "./components/TodoTabs";

function ToDo() {
    return (
        <main>
            <TodoHeader title="Tasks" date="11 August 2026" />
            <TodoTabs />
        </main>
    );
}

export default ToDo;