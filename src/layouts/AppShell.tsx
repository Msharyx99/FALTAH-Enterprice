import { BarChart3, BookOpen, GraduationCap, Home, Settings, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import FaltahLogo from '../components/FaltahLogo';

type Page = 'dashboard' | 'library' | 'learning' | 'admin' | 'settings';

export default function AppShell({ page, setPage, children }: { page: Page; setPage: (page: Page) => void; children: React.ReactNode }) {
  const { t, lang, setLang, darkMode, setDarkMode } = useApp();
  const nav = [
    ['dashboard', t.dashboard, Home],
    ['library', t.library, BookOpen],
    ['learning', t.learning, GraduationCap],
    ['admin', t.admin, Shield],
    ['settings', t.settings, Settings],
  ] as const;
  return (
    <div className={`shell ${darkMode ? 'dark' : 'light'} ${lang === 'ar' ? 'rtl' : ''}`}>
      <aside className="side-panel">
        <FaltahLogo />
        <nav>
          {nav.map(([id, label, Icon]) => <button key={id} onClick={() => setPage(id)} className={page === id ? 'active' : ''}><Icon size={18} />{label}</button>)}
        </nav>
        <div className="side-footer">
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>{lang === 'en' ? 'العربية' : 'English'}</button>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>
      </aside>
      <main className="content">{children}</main>
      <nav className="bottom-nav">
        {nav.slice(0,4).map(([id, label, Icon]) => <button key={id} onClick={() => setPage(id)} className={page === id ? 'active' : ''}><Icon size={20} /><span>{label}</span></button>)}
      </nav>
    </div>
  );
}
