import React from 'react'

const todoList = [
    {
      id: 1,
      title: 'Read instructions',
    },
    {
      id: 2,
      title: 'Complete assignment',
    },
    {
      id: 3,
      title: 'Commit work',
    },
  ];

function TodoList() {
    return (
        <div>
            <ul>
                {todoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    )
}

export default TodoList;
