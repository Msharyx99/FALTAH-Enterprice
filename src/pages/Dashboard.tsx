import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, WifiOff } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { categories, lessons } from '../services/lessons';

export default function Dashboard() {
  const { t } = useApp();
  return (
    <motion.div className="page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <header className="hero-dashboard">
        <div>
          <span className="badge">Enterprise PWA</span>
          <h1>{t.brand}</h1>
          <p>{t.tagline}</p>
          <label className="search"><span>🔎</span><input placeholder={t.search} /></label>
        </div>
        <div className="hero-stat"><Star /><strong>5</strong><span>Featured Lessons</span></div>
      </header>
      <section className="stats-grid">
        <div className="metric"><BookOpen /><strong>{lessons.length}</strong><span>Lessons</span></div>
        <div className="metric"><Clock /><strong>21m</strong><span>Learning Time</span></div>
        <div className="metric"><WifiOff /><strong>{t.offline}</strong><span>PWA Cache</span></div>
      </section>
      <h2>{t.featured}</h2>
      <div className="lesson-grid">{lessons.filter(l => l.featured).map(l => <article className="lesson-card" key={l.id}><span>{l.category}</span><h3>{l.title}</h3><p>{l.provider} • {l.duration}</p><div className="progress"><i style={{ width: `${l.progress}%` }} /></div></article>)}</div>
      <h2>{t.categories}</h2>
      <div className="category-grid">{categories.map(c => <div className="category-tile" key={c}>{c}</div>)}</div>
    </motion.div>
  );
}
