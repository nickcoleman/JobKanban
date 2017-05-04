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
        <Notes notes={notes} />
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

  onDelete = () => {
    console.log('onDelete clicked');
  }

}

export default App;
