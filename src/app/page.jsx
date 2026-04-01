'use client';

import { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, saveNotes } from '../utils/localStorage';

export default function Home() {
  const [note, setNote] = useState([]);

  useEffect(() => {
    setNote(getNotes());
  }, []);

  const addNote = (form) => {
    const noua = { ...form, id: Date.now() };
    const updated = [...note, noua];
    setNote(updated);
    saveNotes(updated);
  };

  return (
    <div className="container">
      <h1 className="title">{"\u{1F4D2}"} Notițele mele</h1>
      <NoteForm onSave={addNote} />
      <NoteList note={note} />
    </div>
  );
}
