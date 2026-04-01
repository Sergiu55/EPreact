"use client";

import { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, saveNotes } from '../utils/localStorage';

export default function Home() {
  const [note, setNote] = useState([]);
  const [noteEditata, setNoteEditata] = useState(null);
  const [search, setSearch] = useState('');
  const [filterTag, setFilterTag] = useState('');

  useEffect(() => {
    setNote(getNotes());
  }, []);

  const addNote = (form) => {
    const noua = { ...form, id: Date.now() };
    const updated = [...note, noua];
    setNote(updated);
    saveNotes(updated);
  };

  const updateNote = (form) => {
    const updated = note.map((n) => (n.id === noteEditata.id ? { ...form, id: n.id } : n));
    setNote(updated);
    saveNotes(updated);
    setNoteEditata(null);
  };

  const deleteNote = (id) => {
    const updated = note.filter((n) => n.id !== id);
    setNote(updated);
    saveNotes(updated);
  };

  const handleSave = (form) => {
    if (noteEditata) updateNote(form);
    else addNote(form);
  };

  const noteFiltrate = note.filter((n) => {
    const matchSearch = n.titlu.toLowerCase().includes(search.toLowerCase()) ||
      n.continut.toLowerCase().includes(search.toLowerCase());
    const matchTag = filterTag ? n.tag === filterTag : true;
    return matchSearch && matchTag;
  });

  const taguri = [...new Set(note.map((n) => n.tag).filter(Boolean))];

  return (
    <div className="container">
      <h1 className="title">📒 Notițele mele</h1>
      <NoteForm
        onSave={handleSave}
        noteEditata={noteEditata}
        onCancel={() => setNoteEditata(null)}
      />
      <div className="filters">
        <input
          className="search"
          placeholder="🔍 Caută..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)}>
          <option value="">Toate tag-urile</option>
          {taguri.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <NoteList
        note={noteFiltrate}
        onEdit={setNoteEditata}
        onDelete={deleteNote}
      />
    </div>
  );
}
