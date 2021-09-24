import React from 'react'

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
                <label htmlFor="todoTitle">Title</label>
                <input 
                    type="text" 
                    id="todoTitle" 
                    name="title" 
                    value={todoTitle} 
                    onChange={handleTitleChange}
                    />
                <button type="submit">Add</button>

            </form>
            
        </div>
    )
}

export default AddTodoForm;
