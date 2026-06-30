import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories, Difficulty, Lesson, LessonStatus } from '../services/lessons';

const blankLesson: Lesson = {
  id: 0,
  title: '',
  titleAr: '',
  category: 'Rotating Equipment',
  duration: '03:00',
  difficulty: 'Beginner',
  provider: '',
  description: '',
  descriptionAr: '',
  learningPoints: [],
  videoLink: '',
  progress: 0,
  featured: false,
  status: 'Draft',
  views: 0,
  tags: []
};

export default function Admin(){
 const { t, isAdmin, setIsAdmin, lessons, saveLesson, archiveLesson, restoreStarterData } = useApp();
 const [password,setPassword]=useState('');
 const [editing,setEditing]=useState<Lesson>(blankLesson);
 const [points,setPoints]=useState('');
 const [tags,setTags]=useState('');
 const adminMetrics = useMemo(() => ({ total: lessons.length, published: lessons.filter(l => l.status === 'Published').length, draft: lessons.filter(l => l.status === 'Draft').length }), [lessons]);
 if(!isAdmin) return <motion.div className="page admin-login" initial={{opacity:0}} animate={{opacity:1}}><h1>{t.adminLogin}</h1><p>Prototype password: <b>faltah</b></p><input type="password" placeholder={t.password} value={password} onChange={e=>setPassword(e.target.value)} /><button onClick={()=> password==='faltah' && setIsAdmin(true)}>{t.signIn}</button></motion.div>
 function startEdit(lesson: Lesson){setEditing(lesson); setPoints(lesson.learningPoints.join('\n')); setTags(lesson.tags.join(', ')); window.scrollTo({top:0, behavior:'smooth'});}
 function newLesson(){setEditing({...blankLesson, id: Date.now()}); setPoints(''); setTags('');}
 function submit(e: React.FormEvent){e.preventDefault(); const finalLesson = {...editing, id: editing.id || Date.now(), learningPoints: points.split('\n').map(x=>x.trim()).filter(Boolean), tags: tags.split(',').map(x=>x.trim()).filter(Boolean)}; saveLesson(finalLesson); newLesson();}
 return <motion.div className="page" initial={{opacity:0}} animate={{opacity:1}}>
  <div className="page-title-row"><div><h1>{t.adminDashboard}</h1><p>Manage FALTAH technical films and learning content.</p></div><button onClick={newLesson}>{t.newLesson}</button></div>
  <section className="stats-grid"><div className="metric"><strong>{adminMetrics.total}</strong><span>Total Lessons</span></div><div className="metric"><strong>{adminMetrics.published}</strong><span>Published</span></div><div className="metric"><strong>{adminMetrics.draft}</strong><span>Draft</span></div></section>
  <form className="admin-form admin-form-v2" onSubmit={submit}>
   <h2>{editing.id ? t.editLesson : t.newLesson}</h2>
   <label>{t.lessonTitle}<input value={editing.title} onChange={e=>setEditing({...editing,title:e.target.value})} required placeholder="How Compressor Surge Works" /></label>
   <label>Arabic Title<input value={editing.titleAr || ''} onChange={e=>setEditing({...editing,titleAr:e.target.value})} placeholder="العنوان باللغة العربية" /></label>
   <label>{t.category}<select value={editing.category} onChange={e=>setEditing({...editing,category:e.target.value})}>{categories.map(c=><option key={c}>{c}</option>)}</select></label>
   <label>{t.difficulty}<select value={editing.difficulty} onChange={e=>setEditing({...editing,difficulty:e.target.value as Difficulty})}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
   <label>{t.duration}<input value={editing.duration} onChange={e=>setEditing({...editing,duration:e.target.value})} placeholder="03:30" /></label>
   <label>{t.provider}<input value={editing.provider} onChange={e=>setEditing({...editing,provider:e.target.value})} placeholder="Senior Operator / Engineer" /></label>
   <label>{t.videoLink}<input value={editing.videoLink || ''} onChange={e=>setEditing({...editing,videoLink:e.target.value})} placeholder="Microsoft Stream / SharePoint URL" /></label>
   <label>{t.status}<select value={editing.status} onChange={e=>setEditing({...editing,status:e.target.value as LessonStatus})}><option>Draft</option><option>Published</option><option>Archived</option></select></label>
   <label className="wide">{t.description}<textarea value={editing.description} onChange={e=>setEditing({...editing,description:e.target.value})} /></label>
   <label className="wide">Arabic Description<textarea value={editing.descriptionAr || ''} onChange={e=>setEditing({...editing,descriptionAr:e.target.value})} /></label>
   <label className="wide">{t.learningPoints}<textarea value={points} onChange={e=>setPoints(e.target.value)} placeholder="Write each point on a new line" /></label>
   <label className="wide">{t.tags}<input value={tags} onChange={e=>setTags(e.target.value)} placeholder="pump, centrifugal, npsh" /></label>
   <label className="check-row"><input type="checkbox" checked={!!editing.featured} onChange={e=>setEditing({...editing,featured:e.target.checked})} /> Featured lesson</label>
   <button type="submit">{t.save}</button>
  </form>
  <div className="admin-actions"><button className="ghost" onClick={restoreStarterData}>{t.reset}</button></div>
  <h2>Lessons Database</h2>
  <div className="admin-list">{lessons.map(l=><div className="admin-row" key={l.id}><div><b>{l.title}</b><p>{l.category} • {l.status} • {l.provider}</p></div><div><button onClick={()=>startEdit(l)}>{t.editLesson}</button><button className="danger" onClick={()=>archiveLesson(l.id)}>{t.archive}</button></div></div>)}</div>
 </motion.div>
}
