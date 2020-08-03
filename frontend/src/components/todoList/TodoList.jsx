import React from "react";
import IconButton from "../iconButton/IconButton.jsx";

function TodoList(props) {
    const list = props.list || []
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody >
                {list.map(todo => (
                    <tr key={todo._id}>
                        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
                        <td>
                            <IconButton btnStyle="success" icon="check" click={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                            <IconButton btnStyle="warning" icon="undo" click={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
                            <IconButton btnStyle="danger" icon="trash-o" click={() => props.handleRemove(todo)} hide={!todo.done} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TodoList;