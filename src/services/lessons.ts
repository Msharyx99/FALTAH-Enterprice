export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type LessonStatus = 'Draft' | 'Published' | 'Archived';
export type Lesson = {
  id: number;
  title: string;
  titleAr?: string;
  category: string;
  duration: string;
  difficulty: Difficulty;
  provider: string;
  description: string;
  descriptionAr?: string;
  learningPoints: string[];
  videoLink?: string;
  thumbnail?: string;
  progress: number;
  featured?: boolean;
  status: LessonStatus;
  views: number;
  tags: string[];
};

export const categories = [
  'Rotating Equipment',
  'Process Systems',
  'Valves',
  'Instrumentation',
  'Electrical',
  'Maintenance',
  'Reliability',
  'Fundamentals'
];

export const categoryIcons: Record<string, string> = {
  'Rotating Equipment': '⚙️',
  'Process Systems': '🏭',
  Valves: '🚰',
  Instrumentation: '📈',
  Electrical: '⚡',
  Maintenance: '🔧',
  Reliability: '🛡️',
  Fundamentals: '📚'
};

export const starterLessons: Lesson[] = [
  {
    id: 1,
    title: 'How Three-Phase Separator Works',
    titleAr: 'كيف يعمل الفاصل ثلاثي الطور',
    category: 'Process Systems',
    duration: '04:00',
    difficulty: 'Beginner',
    provider: 'Operations SME',
    description: 'A short 3D-style lesson explaining how gas, oil, and water are separated inside a three-phase separator and how level control protects stable operation.',
    descriptionAr: 'درس قصير يشرح بطريقة مبسطة كيف يتم فصل الغاز والزيت والماء داخل الفاصل ثلاثي الطور ودور التحكم بالمستوى في استقرار التشغيل.',
    learningPoints: ['Inlet diverter reduces momentum', 'Gravity separates gas, oil and water', 'Mist extractor removes droplets', 'Level control maintains stable interface'],
    progress: 72,
    featured: true,
    status: 'Published',
    views: 124,
    tags: ['separator', 'process', 'oil', 'water', 'gas']
  },
  {
    id: 2,
    title: 'Centrifugal Pump Fundamentals',
    titleAr: 'أساسيات المضخة الطاردة المركزية',
    category: 'Rotating Equipment',
    duration: '05:20',
    difficulty: 'Beginner',
    provider: 'Rotating Equipment SME',
    description: 'Explains how the impeller and volute convert mechanical energy into hydraulic energy, with practical reminders on NPSH and minimum flow.',
    descriptionAr: 'يشرح كيف يحول الدافع والغلاف الطاقة الميكانيكية إلى طاقة هيدروليكية مع تذكير عملي بأهمية NPSH والحد الأدنى للتدفق.',
    learningPoints: ['Impeller accelerates liquid', 'Volute converts velocity to pressure', 'NPSH prevents cavitation', 'Minimum flow protects the pump'],
    progress: 45,
    featured: true,
    status: 'Published',
    views: 98,
    tags: ['pump', 'centrifugal', 'npsh', 'cavitation']
  },
  {
    id: 3,
    title: 'Gate Valve vs Globe Valve',
    titleAr: 'الفرق بين صمام البوابة وصمام الجلوب',
    category: 'Valves',
    duration: '03:10',
    difficulty: 'Beginner',
    provider: 'Maintenance SME',
    description: 'Shows the practical difference between isolation service and throttling service and why the correct valve selection matters.',
    descriptionAr: 'يوضح الفرق العملي بين صمامات العزل وصمامات التحكم في التدفق ولماذا اختيار الصمام الصحيح مهم.',
    learningPoints: ['Gate valves are for isolation', 'Globe valves support throttling', 'Valve type affects pressure drop', 'Wrong application may cause damage'],
    progress: 18,
    status: 'Published',
    views: 77,
    tags: ['valve', 'gate', 'globe', 'isolation', 'throttling']
  },
  {
    id: 4,
    title: 'Pressure Safety Valve Basics',
    titleAr: 'أساسيات صمام الأمان للضغط',
    category: 'Valves',
    duration: '04:40',
    difficulty: 'Intermediate',
    provider: 'Inspection SME',
    description: 'Explains PSV purpose, set pressure, relief path, and the role of inspection in protecting equipment from overpressure.',
    descriptionAr: 'يشرح وظيفة PSV وضغط الضبط ومسار التنفيس ودور الفحص في حماية المعدات من زيادة الضغط.',
    learningPoints: ['PSV protects from overpressure', 'Set pressure is controlled', 'Relief path must be available', 'Inspection maintains reliability'],
    progress: 0,
    featured: true,
    status: 'Published',
    views: 66,
    tags: ['psv', 'safety valve', 'overpressure', 'relief']
  },
  {
    id: 5,
    title: 'Pressure Transmitter Basics',
    titleAr: 'أساسيات مرسل الضغط',
    category: 'Instrumentation',
    duration: '03:50',
    difficulty: 'Beginner',
    provider: 'Instrument SME',
    description: 'A simple lesson on how pressure is sensed, converted to a signal, and used by the control system.',
    descriptionAr: 'درس مبسط عن كيفية قياس الضغط وتحويله إلى إشارة واستخدامه في نظام التحكم.',
    learningPoints: ['Sensing element detects pressure', 'Signal is transmitted to control system', 'Calibration improves accuracy', 'Impulse lines must be healthy'],
    progress: 0,
    status: 'Published',
    views: 44,
    tags: ['pressure', 'transmitter', 'instrumentation']
  }
];

export function getStoredLessons(): Lesson[] {
  const raw = localStorage.getItem('faltahLessons');
  if (!raw) return starterLessons;
  try {
    const parsed = JSON.parse(raw) as Lesson[];
    return Array.isArray(parsed) && parsed.length ? parsed : starterLessons;
  } catch {
    return starterLessons;
  }
}

export function storeLessons(lessons: Lesson[]) {
  localStorage.setItem('faltahLessons', JSON.stringify(lessons));
}
