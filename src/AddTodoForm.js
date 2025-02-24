import React from 'react'
import InputWithLabel from './InputWithLabel';

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({title:todoTitle,id:Date.now()});
        setTodoTitle("");
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel  onChange={handleTitleChange}>
                    Title:
                </InputWithLabel>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;
