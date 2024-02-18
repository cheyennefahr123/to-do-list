import React from 'react'

export default function ToDoItem( {item}) {

    return (
        <li>
            <a href={item.link}>
                {item.description} ({item.date} - {item.priority})
            </a>
        </li>
    );
}
