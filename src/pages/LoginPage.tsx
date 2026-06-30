import { motion } from 'framer-motion';
import FaltahLogo from '../components/FaltahLogo';
import { useApp } from '../context/AppContext';

export default function LoginPage({ onEnter }: { onEnter: () => void }) {
  const { t, lang, setLang } = useApp();
  return (
    <section className="login-page">
      <motion.div className="login-art" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <div className="character-card">
          <div className="character-helmet">👷‍♂️</div>
          <div className="glow-ring" />
          <h2>FALTAH</h2>
          <p>{t.tagline}</p>
        </div>
      </motion.div>
      <motion.div className="login-card" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <FaltahLogo />
        <h1>{t.loginTitle}</h1>
        <p>{t.loginSub}</p>
        <button className="primary" onClick={onEnter}>{t.loginBtn}</button>
        <button className="ghost" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>{lang === 'en' ? 'العربية' : 'English'}</button>
      </motion.div>
    </section>
  );
}
