import { useState, useEffect } from 'react';

const emptyForm = { titlu: '', continut: '', dataNotificare: '', tag: '' };

export default function NoteForm({ onSave, noteEditata, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (noteEditata) setForm(noteEditata);
    else setForm(emptyForm);
  }, [noteEditata]);

  const validate = () => {
    const errs = {};
    if (!form.titlu.trim()) errs.titlu = 'Titlul este obligatoriu';
    if (!form.continut.trim()) errs.continut = 'Conținutul este obligatoriu';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onSave(form);
    setForm(emptyForm);
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="form-card">
      <h2>{noteEditata ? 'Editează notița' : 'Notiță nouă'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Titlu *</label>
          <input name="titlu" value={form.titlu} onChange={handleChange} placeholder="Titlul notiței" />
          {errors.titlu && <span className="error">{errors.titlu}</span>}
        </div>
        <div className="field">
          <label>Conținut *</label>
          <textarea name="continut" value={form.continut} onChange={handleChange} placeholder="Scrie ceva..." rows={4} />
          {errors.continut && <span className="error">{errors.continut}</span>}
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
          <button type="submit" className="btn-primary">
            {noteEditata ? 'Salvează' : 'Adaugă'}
          </button>
          {noteEditata && (
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Anulează
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
