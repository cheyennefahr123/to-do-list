import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

export default function ToDoList({ ToDoListItems, deleteItem }) {

  const ListItems = ToDoListItems.map(item => 
    <ToDoItem key={item.id} deleteItem={deleteItem} {...item} />
  )

  return (
    <section className="to-do-list-container">{ ListItems }</section>
  );
}
