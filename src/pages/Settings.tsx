import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
export default function Settings(){const {lang,setLang,darkMode,setDarkMode}=useApp();return <motion.div className="page" initial={{opacity:0}} animate={{opacity:1}}><h1>Settings</h1><div className="settings-card"><button onClick={()=>setLang(lang==='en'?'ar':'en')}>Language: {lang==='en'?'English':'العربية'}</button><button onClick={()=>setDarkMode(!darkMode)}>Theme: {darkMode?'Dark':'Light'}</button></div></motion.div>}
