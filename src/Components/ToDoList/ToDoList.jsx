import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

export default function ToDoList({ ToDoListItems }) {

  const ListItems = ToDoListItems.map((item, index) => 
    <ToDoItem key={item.id} {...item} />
  )

  return (
    <section className="to-do-list-container">{ ListItems }</section>
  );
}
