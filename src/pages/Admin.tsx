import { motion } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Admin(){
 const { t, isAdmin, setIsAdmin } = useApp();
 const [password,setPassword]=useState('');
 if(!isAdmin) return <motion.div className="page admin-login" initial={{opacity:0}} animate={{opacity:1}}><h1>{t.adminLogin}</h1><p>Prototype password: <b>faltah</b></p><input type="password" placeholder={t.password} value={password} onChange={e=>setPassword(e.target.value)} /><button onClick={()=> password==='faltah' && setIsAdmin(true)}>{t.signIn}</button></motion.div>
 return <motion.div className="page" initial={{opacity:0}} animate={{opacity:1}}><h1>{t.upload}</h1><form className="admin-form"><label>{t.lessonTitle}<input placeholder="How Compressor Surge Works" /></label><label>{t.category}<input placeholder="Rotating Equipment" /></label><label>Video Link<input placeholder="Microsoft Stream / SharePoint link" /></label><label>Description<textarea placeholder="Technical lesson summary" /></label><button type="button">{t.save}</button></form></motion.div>
}
