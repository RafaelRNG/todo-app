import React from "react";
import Grid from "../grid/Grid.jsx";
import IconeButton from "../iconButton/IconButton.jsx";

function TodoForm(props) {
    const keyHandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ?
                props.handleSearch() :
                props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="9 9 9">
                <input id="description" className="form-control col-5"
                    placeholder="Adicione uma tarefa"
                    onKeyUp={keyHandler}
                    value={props.value} onChange={props.change} />
            </Grid>

            <Grid cols="3 3 3">
                <IconeButton btnStyle="primary" icon="plus"
                    click={props.handleAdd} />
                <IconeButton btnStyle="info" icon="search"
                    click={props.handleSearch} />
                <IconeButton btnStyle="default" icon="close"
                    click={props.handleClear} />
            </Grid>
        </div>
    )
}

export default TodoForm;