import { Clock, Star } from 'lucide-react';
import { Lesson } from '../services/lessons';
import { useApp } from '../context/AppContext';

export default function LessonCard({ lesson, onOpen }: { lesson: Lesson; onOpen: () => void }) {
  const { lang, favorites, toggleFavorite } = useApp();
  const title = lang === 'ar' && lesson.titleAr ? lesson.titleAr : lesson.title;
  const description = lang === 'ar' && lesson.descriptionAr ? lesson.descriptionAr : lesson.description;
  return (
    <article className="lesson-card lesson-card-v2" onClick={onOpen}>
      <div className="lesson-thumb"><span>{lesson.thumbnail || '👷‍♂️'}</span><i>{lesson.category}</i></div>
      <div className="lesson-topline"><span>{lesson.difficulty}</span><span><Clock size={14} />{lesson.duration}</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="lesson-footer">
        <small>{lesson.provider}</small>
        <button className="icon-button" onClick={(e) => { e.stopPropagation(); toggleFavorite(lesson.id); }} aria-label="Favorite">
          <Star size={17} fill={favorites.includes(lesson.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
    </article>
  );
}
