import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { categories, lessons } from '../services/lessons';
import { useApp } from '../context/AppContext';

export default function Library() {
  const { t } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => lessons.filter(l => (category === 'All' || l.category === category) && `${l.title} ${l.category} ${l.provider}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><h1>{t.library}</h1><div className="filter-row"><input placeholder={t.search} value={query} onChange={e => setQuery(e.target.value)} /><select value={category} onChange={e => setCategory(e.target.value)}><option>All</option>{categories.map(c => <option key={c}>{c}</option>)}</select></div><div className="lesson-grid">{filtered.map(l => <article className="lesson-card" key={l.id}><span>{l.difficulty}</span><h3>{l.title}</h3><p>{l.category} • {l.duration}</p><small>{l.provider}</small></article>)}</div></motion.div>;
}
