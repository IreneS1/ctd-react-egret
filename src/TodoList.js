import React from 'react'
import TodoListItem from './TodoListItem';

// const todoList = [
//     {
//       id: 1,
//       title: 'Read instructions',
//     },
//     {
//       id: 2,
//       title: 'Complete assignment',
//     },
//     {
//       id: 3,
//       title: 'Commit work',
//     },
//   ];

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <div>
            <ul>
                {todoList.map((item) => {
                return <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/>
                })}
            </ul>
    </div>
  )
}

export default TodoList;
