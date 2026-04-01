'use client';
import { useState } from 'react';

const emptyForm = { titlu: '', continut: '', dataNotificare: '', tag: '' };

export default function NoteForm({ onSave }) {
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm(emptyForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card">
      <h2>Notiță nouă</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Titlu</label>
          <input name="titlu" value={form.titlu} onChange={handleChange} placeholder="Titlul notiței" />
        </div>
        <div className="field">
          <label>Conținut</label>
          <textarea name="continut" value={form.continut} onChange={handleChange} placeholder="Scrie ceva..." rows={4} />
        </div>
        <div className="field">
          <label>Dată notificare</label>
          <input type="date" name="dataNotificare" value={form.dataNotificare} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Tag</label>
          <input name="tag" value={form.tag} onChange={handleChange} placeholder="ex: muncă, personal" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Adaugă</button>
        </div>
      </form>
    </div>
  );
}
