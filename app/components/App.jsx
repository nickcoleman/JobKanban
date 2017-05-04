import React, { Component } from 'react';
import uuid from 'uuid';
import Notes from './Notes';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Apply to Google'
        },
        {
          id: uuid.v4(),
          task: 'Apply to Facebook'
        }
      ]
    };
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          />
      </div>
    );
  }

  addNote = () => {
    const note = {
      id: uuid.v4(),
      task: 'New task'
    }

    this.setState({
      notes:[...this.state.notes, note]
    });
  }

  deleteNote = (id, event) => {
    console.log('onDelete clicked');
    event.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }

        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }

        return note;
      })
    });
  }

}

export default App;
