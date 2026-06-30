import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Star, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LessonModal() {
  const { selectedLesson, setSelectedLesson, lang, t, favorites, toggleFavorite } = useApp();
  const lesson = selectedLesson;
  if (!lesson) return null;
  const title = lang === 'ar' && lesson.titleAr ? lesson.titleAr : lesson.title;
  const description = lang === 'ar' && lesson.descriptionAr ? lesson.descriptionAr : lesson.description;
  return (
    <AnimatePresence>
      <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.section className="lesson-modal" initial={{ y: 24, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }}>
          <button className="modal-close" onClick={() => setSelectedLesson(null)}><X size={20} /></button>
          <div className="modal-video">
            <span>▶</span>
            <p>{lesson.videoLink ? t.openVideo : 'Video placeholder'}</p>
          </div>
          <div className="modal-meta"><span>{lesson.category}</span><span>{lesson.difficulty}</span><span>{lesson.duration}</span></div>
          <h2>{title}</h2>
          <p className="modal-desc">{description}</p>
          <h3>{t.learningPoints}</h3>
          <ul className="points-list">{lesson.learningPoints.map(point => <li key={point}>{point}</li>)}</ul>
          <div className="modal-actions">
            {lesson.videoLink && <a className="primary-link" href={lesson.videoLink} target="_blank" rel="noreferrer"><ExternalLink size={17} />{t.openVideo}</a>}
            <button className="ghost" onClick={() => toggleFavorite(lesson.id)}><Star size={17} />{favorites.includes(lesson.id) ? t.unfavorite : t.favorite}</button>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}
