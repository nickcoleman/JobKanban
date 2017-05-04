import React from 'react';
import Note from './Note';

export default ({ notes, onDelete = ()=>{} }) => (
  <ul>{notes.map(({ id, task }) =>
    <Note
      onDelete={onDelete.bind(null, id)}
      key={id}
      task={task}
    />
  )}</ul>
)
