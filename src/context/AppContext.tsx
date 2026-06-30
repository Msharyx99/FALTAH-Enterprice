import { createContext, useContext, useMemo, useState } from 'react';
import { Lang, strings } from '../translations/i18n';
import { getStoredLessons, Lesson, storeLessons } from '../services/lessons';

type AppContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof strings.en;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  lessons: Lesson[];
  saveLesson: (lesson: Lesson) => void;
  archiveLesson: (id: number) => void;
  restoreStarterData: () => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  selectedLesson: Lesson | null;
  setSelectedLesson: (lesson: Lesson | null) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [darkMode, setDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>(getStoredLessons);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('faltahFavorites') || '[]'); } catch { return []; }
  });

  function persist(next: Lesson[]) {
    setLessons(next);
    storeLessons(next);
  }

  function saveLesson(lesson: Lesson) {
    const exists = lessons.some(l => l.id === lesson.id);
    const next = exists ? lessons.map(l => (l.id === lesson.id ? lesson : l)) : [lesson, ...lessons];
    persist(next);
  }

  function archiveLesson(id: number) {
    persist(lessons.map(l => (l.id === id ? { ...l, status: 'Archived' } : l)));
  }

  function restoreStarterData() {
    localStorage.removeItem('faltahLessons');
    location.reload();
  }

  function toggleFavorite(id: number) {
    const next = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('faltahFavorites', JSON.stringify(next));
  }

  const value = useMemo(() => ({ lang, setLang, t: strings[lang], darkMode, setDarkMode, isAdmin, setIsAdmin, lessons, saveLesson, archiveLesson, restoreStarterData, favorites, toggleFavorite, selectedLesson, setSelectedLesson }), [lang, darkMode, isAdmin, lessons, favorites, selectedLesson]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
