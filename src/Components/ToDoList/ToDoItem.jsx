import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

export default function ToDoItem( {id, link, description, date, priority} ) {

    return (
        <Card
        className="my-2 to-do-item-container"
        color="dark"
        inverse>
        <CardHeader tag="h5">
          { description }
        </CardHeader>
        <CardBody>
          <CardTitle tag="h6">
            Priority: { priority }
          </CardTitle>
          <CardText>
            Due Date: { date }
          </CardText>
          <CardText>
            Supporting Link:&nbsp;
            <a href={link} target="_blank" className="to-do-item-anchor">
            { link }
            </a>
          </CardText>
        </CardBody>
      </Card>
    );
}

    