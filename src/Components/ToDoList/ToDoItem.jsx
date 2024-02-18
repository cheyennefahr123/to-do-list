import React from 'react'

export default function ToDoItem( {id, link, description, date, priority} ) {

    return (
        <section className="to-do-item-container">
            <p className="to-do-item-field">Date: { date }</p>
            <p className="to-do-item-field">Priority: { priority }</p>
            <p className="to-do-item-field">Description: { description }</p>
            <p className="to-do-item-field">
              Link:&nbsp; 
              <a href={link} target="_blank" rel="noreferrer" className="to-do-item-anchor">
                { link }
              </a>
            </p>
        </section>
      );
    }
    
