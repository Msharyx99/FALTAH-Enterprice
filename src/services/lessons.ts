export type Lesson = {
  id: number;
  title: string;
  category: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  provider: string;
  progress: number;
  featured?: boolean;
};

export const lessons: Lesson[] = [
  { id: 1, title: 'How Three-Phase Separator Works', category: 'Process Systems', duration: '04:00', difficulty: 'Beginner', provider: 'Operations SME', progress: 72, featured: true },
  { id: 2, title: 'Centrifugal Pump Fundamentals', category: 'Rotating Equipment', duration: '05:20', difficulty: 'Beginner', provider: 'Rotating Equipment SME', progress: 45, featured: true },
  { id: 3, title: 'Gate Valve vs Globe Valve', category: 'Valves', duration: '03:10', difficulty: 'Beginner', provider: 'Maintenance SME', progress: 18 },
  { id: 4, title: 'Pressure Safety Valve Basics', category: 'Valves', duration: '04:40', difficulty: 'Intermediate', provider: 'Inspection SME', progress: 0, featured: true },
  { id: 5, title: 'Pressure Transmitter Basics', category: 'Instrumentation', duration: '03:50', difficulty: 'Beginner', provider: 'Instrument SME', progress: 0 }
];

export const categories = ['Rotating Equipment', 'Process Systems', 'Valves', 'Instrumentation', 'Electrical', 'Maintenance', 'Reliability', 'Fundamentals'];
