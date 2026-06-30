import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';
export default function Learning(){
 const { t } = useApp();
 const paths=[['Operator Fundamentals',35,'Process Systems, Pumps, Valves'],['Rotating Equipment',20,'Pumps, compressors, seals, bearings'],['Valves & Instrumentation',10,'Control valves, PSV, transmitters'],['Process Systems',15,'Separators, heat exchangers, flare systems']];
 return <motion.div className="page" initial={{opacity:0}} animate={{opacity:1}}><div className="page-title-row"><div><h1>{t.learning}</h1><p>Structured technical development paths for operators and engineers.</p></div><Award /></div>{paths.map(([p,percent,desc])=><div className="path-card path-card-v2" key={p as string}><div><GraduationCap /><h3>{p}</h3><p>{desc}</p></div><strong>{percent}%</strong><div className="progress"><i style={{width:`${percent}%`}} /></div></div>)}</motion.div>
}
