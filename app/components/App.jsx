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
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }

  addNote = () => {
    const note = {
      id: uuid.v4(),
      task: 'New task'
    }

    this.setState({
      ...this.state,
      notes:[...this.state.notes, note]
    });
  }

  deleteNote = (id, event) => {
    console.log('onDelete clicked');
    event.stopPropagation();
    this.setState({
      ...this.state,
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }

}

export default App;
