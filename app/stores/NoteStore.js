import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [];
  }

  create(note) {
    // console.log('create note', note);
    this.setState({ notes: [...this.notes, note] })
  }

  update(updatedNote) {
    this.setState({ notes: this.notes.map(note => {
      if (note.id === updatedNote.id) {
        return Object.assign({}, note, updatedNote);
        // return updatedNote;
      }
      return note;
    })})
  }

  delete(id) {
    this.setState({ notes: this.notes.filter(note => note.id !== id ) })
  }
}
