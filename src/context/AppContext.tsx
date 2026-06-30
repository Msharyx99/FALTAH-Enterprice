import { createContext, useContext, useMemo, useState } from 'react';
import { Lang, strings } from '../translations/i18n';

type AppContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof strings.en;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [darkMode, setDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const value = useMemo(() => ({ lang, setLang, t: strings[lang], darkMode, setDarkMode, isAdmin, setIsAdmin }), [lang, darkMode, isAdmin]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
