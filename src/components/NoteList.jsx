import NoteCard from './NoteCard';

export default function NoteList({ note, onEdit, onDelete }) {
  if (note.length === 0) {
    return <p className="empty">Nu ai nicio notiță încă. Adaugă una! 📝</p>;
  }
  return (
    <div className="notes-grid">
      {note.map((n) => (
        <NoteCard key={n.id} nota={n} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
