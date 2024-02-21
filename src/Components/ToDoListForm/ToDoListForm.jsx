import React from 'react'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

export default function ToDoListForm() {
  return (
    <Form data-bs-theme="dark" className="to-do-form">
      <FormGroup className ="to-do-row">
        <Label htmlFor="link-date">Date</Label>
        <Input id="link-date" name="date" type="date" required />
      </FormGroup>
      <FormGroup className ="to-do-row">
        <Label htmlFor="link-url">Link</Label>
        <Input id="link-url" name="url" type="url" required />
      </FormGroup>
      <FormGroup className ="to-do-row">
        <Label htmlFor="link-description">Link Description</Label>
        <Input 
          id="link-description" 
          type="text" 
          name="description" 
          required />
      </FormGroup>
      <FormGroup className ="to-do-row">
        <Input 
          name="radio-priority"
          type="radio"
          value="High"
          id="prio-high" />
        {' '}
        <Label htmlFor="prio-medium">High</Label>
        <Input 
          name="radio-priority"
          type="radio"
          value="Medium"
          id="prio-medium" />
        {' '}
        <Label htmlFor="prio-medium">Medium</Label>
        <Input 
          name="radio-priority"
          type="radio"
          value="Low"
          id="prio-low" />
        {' '}
        <Label htmlFor="prio-low">Low</Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
