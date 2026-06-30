import { motion } from 'framer-motion';
import FaltahLogo from './FaltahLogo';
import { useApp } from '../context/AppContext';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const { t } = useApp();
  return (
    <motion.div className="splash" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div initial={{ scale: .82, opacity: 0, y: 22 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <FaltahLogo size="large" />
        <h1>{t.loginTitle}</h1>
        <p>{t.tagline}</p>
        <div className="loading-track"><motion.div className="loading-bar" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.8 }} onAnimationComplete={onFinish} /></div>
      </motion.div>
    </motion.div>
  );
}
