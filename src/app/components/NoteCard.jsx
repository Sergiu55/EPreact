export default function NoteCard({ nota, onEdit, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Ești sigur că vrei să ștergi această notiță?')) {
      onDelete(nota.id);
    }
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{nota.titlu}</h3>
        {nota.tag && <span className="tag">{nota.tag}</span>}
      </div>
      <p className="note-content">{nota.continut}</p>
      {nota.dataNotificare && (
        <p className="note-date">🔔 {nota.dataNotificare}</p>
      )}
      <div className="note-actions">
        <button className="btn-edit" onClick={() => onEdit(nota)}>Editează</button>
        <button className="btn-delete" onClick={handleDelete}>Șterge</button>
      </div>
    </div>
  );
}
