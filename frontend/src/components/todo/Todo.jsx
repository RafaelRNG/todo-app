import React, { useState, useEffect } from "react";
import api from "../../api.js";

import PageHeader from "../../template/pageHeader/PageHeader.jsx";
import TodoForm from "../todoForm/TodoForm.jsx";
import TodoList from "../todoList/TodoList.jsx";

function Todo() {

    const [description, setDescription] = useState("");
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        api.get(`?sort=-createdAt`)
            .then(res => setList([...res.data]));
    }, [list]);

    function refresh(description = "") {
        const search = description ? `&description_regex=/${description}` : ""
        api.get(`?sort=-createdAt${search}`)
            .then(() => setDescription(""))
    }

    function search() {
        return refresh(description);
    }

    function add() {
        api.post("", { description })
            .then(() => refresh())
            .then(() => {
                if (description.trim())
                    setAlert(false);
            })
            .catch(() => {
                if (!description.trim())
                    setAlert(true);
            });
    }

    function remove(todo) {
        api.delete(`/${todo._id}`)
            .then(() => refresh(description));
    }

    function done(todo) {
        api.put(`/${todo._id}`, { ...todo, done: true })
            .then()
            .catch(err => console.log(err));
    }

    function pending(todo) {
        api.put(`/${todo._id}`, { ...todo, done: false })
            .then()
    }

    function clear() {
        refresh();
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="cadastro" />
            <div className="py-3">
                {alert ? <div className="alert alert-danger"><strong>Não é permitido valor nulo!!</strong></div> : ""}
            </div>
            <TodoForm handleAdd={add}
                value={description}
                change={event => setDescription(event.target.value)}
                handleSearch={search}
                handleClear={clear} />

            <TodoList list={list}
                handleRemove={remove}
                handleMarkAsDone={done}
                handleMarkAsPending={pending} />
        </div>
    )
}

export default Todo;