import React from 'react';

function ToDos({ todos, deleteTodo }) {

    const todoList = todos.length ? (
        todos.map(
            (item) => {
                return (
                    <div className="collection-item" key={item.id} onClick={()=>deleteTodo(item.id)}>
                        <span>{item.id}</span>
                        . 
                        <span>{item.task}</span>
                    </div>
                );
            }
        )
    ) : (
            <p className="center"> No Todos to work on! what are you doing?! </p>
        );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );

};

export default ToDos;