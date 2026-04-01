'use client';

export default function NoteCard({ nota }) {
  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{nota.titlu}</h3>
        {nota.tag && <span className="tag">{nota.tag}</span>}
      </div>
      <p className="note-content">{nota.continut}</p>
      {nota.dataNotificare && (
        <p className="note-date">{String.fromCodePoint(0x1F514)} {nota.dataNotificare}</p>
      )}
    </div>
  );
}
