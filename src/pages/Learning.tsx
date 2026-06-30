import { motion } from 'framer-motion';
export default function Learning(){
 const paths=['Operator Fundamentals','Rotating Equipment','Valves & Instrumentation','Process Systems'];
 return <motion.div className="page" initial={{opacity:0}} animate={{opacity:1}}><h1>Learning Paths</h1>{paths.map((p,i)=><div className="path-card" key={p}><h3>{p}</h3><p>{(i+1)*18}% complete</p><div className="progress"><i style={{width:`${(i+1)*18}%`}} /></div></div>)}</motion.div>
}
