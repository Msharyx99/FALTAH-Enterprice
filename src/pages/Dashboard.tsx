import { motion } from 'framer-motion';
import { BookOpen, Clock, Sparkles, Star, WifiOff } from 'lucide-react';
import LessonCard from '../components/LessonCard';
import { useApp } from '../context/AppContext';
import { categories, categoryIcons } from '../services/lessons';

export default function Dashboard() {
  const { t, lessons, setSelectedLesson, favorites } = useApp();
  const published = lessons.filter(l => l.status === 'Published');
  const featured = published.filter(l => l.featured).slice(0, 4);
  return (
    <motion.div className="page" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <header className="hero-dashboard hero-v2">
        <div>
          <span className="badge"><Sparkles size={15} /> Enterprise PWA Sprint 2</span>
          <h1>{t.brand}</h1>
          <p>{t.tagline}</p>
          <label className="search"><span>🔎</span><input placeholder={t.search} /></label>
        </div>
        <div className="hero-character"><div className="gold-orbit" /><span>👷‍♂️</span><strong>FALTAH</strong></div>
      </header>
      <section className="stats-grid">
        <div className="metric"><BookOpen /><strong>{published.length}</strong><span>{t.published}</span></div>
        <div className="metric"><Clock /><strong>21m</strong><span>Learning Time</span></div>
        <div className="metric"><Star /><strong>{favorites.length}</strong><span>{t.favorites}</span></div>
        <div className="metric"><WifiOff /><strong>{t.offline}</strong><span>PWA Cache</span></div>
      </section>
      <h2>{t.featured}</h2>
      <div className="lesson-grid">{featured.map(l => <LessonCard key={l.id} lesson={l} onOpen={() => setSelectedLesson(l)} />)}</div>
      <h2>{t.categories}</h2>
      <div className="category-grid">{categories.map(c => <div className="category-tile category-v2" key={c}><span>{categoryIcons[c]}</span><strong>{c}</strong><small>{published.filter(l => l.category === c).length} lessons</small></div>)}</div>
    </motion.div>
  );
}
