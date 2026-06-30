import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import { AppProvider } from './context/AppContext';
import AppShell from './layouts/AppShell';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Library from './pages/Library';
import LoginPage from './pages/LoginPage';
import Settings from './pages/Settings';

type Page = 'dashboard' | 'library' | 'learning' | 'admin' | 'settings';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [entered, setEntered] = useState(false);
  const [page, setPage] = useState<Page>('dashboard');
  return (
    <AnimatePresence mode="wait">
      {showSplash ? <SplashScreen key="splash" onFinish={() => setShowSplash(false)} /> : !entered ? <LoginPage key="login" onEnter={() => setEntered(true)} /> : <AppShell key="shell" page={page} setPage={setPage}>{page === 'dashboard' && <Dashboard />}{page === 'library' && <Library />}{page === 'learning' && <Learning />}{page === 'admin' && <Admin />}{page === 'settings' && <Settings />}</AppShell>}
    </AnimatePresence>
  );
}

export default function App() {
  return <AppProvider><AppContent /></AppProvider>;
}
