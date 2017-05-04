import React from 'react';

export default ({ notes }) => (
  <ul>
    {
      notes.map(note => {
        return <li key={note.id}>{note.task}</li>
      })
    }
  </ul>
);
