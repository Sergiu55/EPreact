export const getNotes = () => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem('notite');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveNotes = (notes) => {
  localStorage.setItem('notite', JSON.stringify(notes));
};