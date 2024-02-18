import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ ToDoListItems }) {

  const ListItems = ToDoListItems.map((item, index) => 
    <ToDoItem key={index} item={item} />
  )

  return (
    <ul>{ ListItems }</ul>
  );
}
