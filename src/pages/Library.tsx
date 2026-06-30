import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import LessonCard from '../components/LessonCard';
import { useApp } from '../context/AppContext';
import { categories } from '../services/lessons';

export default function Library() {
  const { t, lessons, setSelectedLesson } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const filtered = useMemo(() => lessons.filter(l => {
    const haystack = `${l.title} ${l.titleAr ?? ''} ${l.category} ${l.provider} ${l.description} ${l.tags.join(' ')}`.toLowerCase();
    return l.status === 'Published' && (category === 'All' || l.category === category) && (difficulty === 'All' || l.difficulty === difficulty) && haystack.includes(query.toLowerCase());
  }), [query, category, difficulty, lessons]);
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="page-title-row"><div><h1>{t.library}</h1><p>{t.search}</p></div><span className="result-pill">{filtered.length} Results</span></div>
      <div className="filter-panel">
        <label>{t.search}<input placeholder={t.search} value={query} onChange={e => setQuery(e.target.value)} /></label>
        <label>{t.category}<select value={category} onChange={e => setCategory(e.target.value)}><option>All</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>{t.difficulty}<select value={difficulty} onChange={e => setDifficulty(e.target.value)}><option>All</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
      </div>
      <div className="lesson-grid">{filtered.map(l => <LessonCard key={l.id} lesson={l} onOpen={() => setSelectedLesson(l)} />)}</div>
      {!filtered.length && <div className="empty-state">{t.noResults}</div>}
    </motion.div>
  );
}
