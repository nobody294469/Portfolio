import React from 'react';

// Authentic vector tech stack configurations with official brand assets
export const ALL_TECH_LOGOS = {
  python: {
    key: 'python',
    name: 'Python',
    color: '#3776AB',
    bg: 'rgba(55, 118, 171, 0.14)',
    border: 'rgba(55, 118, 171, 0.35)',
    iconUrl: '/tech-icons/python.svg',
    svg: (
      <img
        src="/tech-icons/python.svg"
        alt="Python"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  cpp: {
    key: 'cpp',
    name: 'C++',
    color: '#00599C',
    bg: 'rgba(0, 89, 156, 0.14)',
    border: 'rgba(0, 89, 156, 0.35)',
    iconUrl: '/tech-icons/cpp.svg',
    svg: (
      <img
        src="/tech-icons/cpp.svg"
        alt="C++"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  c: {
    key: 'c',
    name: 'C',
    color: '#00599C',
    bg: 'rgba(0, 89, 156, 0.14)',
    border: 'rgba(0, 89, 156, 0.35)',
    iconUrl: '/tech-icons/c.svg',
    svg: (
      <img
        src="/tech-icons/c.svg"
        alt="C"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  javascript: {
    key: 'javascript',
    name: 'JavaScript',
    color: '#F7DF1E',
    bg: 'rgba(247, 223, 30, 0.16)',
    border: 'rgba(247, 223, 30, 0.45)',
    iconUrl: '/tech-icons/javascript.svg',
    svg: (
      <img
        src="/tech-icons/javascript.svg"
        alt="JavaScript"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  typescript: {
    key: 'typescript',
    name: 'TypeScript',
    color: '#3178C6',
    bg: 'rgba(49, 120, 198, 0.14)',
    border: 'rgba(49, 120, 198, 0.35)',
    iconUrl: '/tech-icons/typescript.svg',
    svg: (
      <img
        src="/tech-icons/typescript.svg"
        alt="TypeScript"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  sql: {
    key: 'sql',
    name: 'SQL',
    color: '#336791',
    bg: 'rgba(51, 103, 145, 0.14)',
    border: 'rgba(51, 103, 145, 0.35)',
    iconUrl: '/tech-icons/sql.svg',
    svg: (
      <img
        src="/tech-icons/sql.svg"
        alt="SQL"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  react: {
    key: 'react',
    name: 'React',
    color: '#00D8FF',
    bg: 'rgba(0, 216, 255, 0.14)',
    border: 'rgba(0, 216, 255, 0.35)',
    iconUrl: '/tech-icons/react.svg',
    svg: (
      <img
        src="/tech-icons/react.svg"
        alt="React"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  nodejs: {
    key: 'nodejs',
    name: 'Node.js',
    color: '#539E43',
    bg: 'rgba(83, 158, 67, 0.14)',
    border: 'rgba(83, 158, 67, 0.35)',
    iconUrl: '/tech-icons/nodejs.svg',
    svg: (
      <img
        src="/tech-icons/nodejs.svg"
        alt="Node.js"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  socketio: {
    key: 'socketio',
    name: 'Socket.io',
    color: '#010101',
    bg: 'rgba(1, 1, 1, 0.1)',
    border: 'rgba(1, 1, 1, 0.3)',
    iconUrl: '/tech-icons/socketio.svg',
    svg: (
      <img
        src="/tech-icons/socketio.svg"
        alt="Socket.io"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  streamlit: {
    key: 'streamlit',
    name: 'Streamlit',
    color: '#FF4B4B',
    bg: 'rgba(255, 75, 75, 0.14)',
    border: 'rgba(255, 75, 75, 0.35)',
    iconUrl: '/tech-icons/streamlit.svg',
    svg: (
      <img
        src="/tech-icons/streamlit.svg"
        alt="Streamlit"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  tailwind: {
    key: 'tailwind',
    name: 'Tailwind CSS',
    color: '#38BDF8',
    bg: 'rgba(56, 189, 248, 0.14)',
    border: 'rgba(56, 189, 248, 0.35)',
    iconUrl: '/tech-icons/tailwind.svg',
    svg: (
      <img
        src="/tech-icons/tailwind.svg"
        alt="Tailwind CSS"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  git: {
    key: 'git',
    name: 'Git & GitHub',
    color: '#F05032',
    bg: 'rgba(240, 80, 50, 0.14)',
    border: 'rgba(240, 80, 50, 0.35)',
    iconUrl: '/tech-icons/git.svg',
    svg: (
      <img
        src="/tech-icons/git.svg"
        alt="Git"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  firebase: {
    key: 'firebase',
    name: 'Firebase',
    color: '#FFCA28',
    bg: 'rgba(255, 202, 40, 0.15)',
    border: 'rgba(255, 202, 40, 0.4)',
    iconUrl: '/tech-icons/firebase.svg',
    svg: (
      <img
        src="/tech-icons/firebase.svg"
        alt="Firebase"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  express: {
    key: 'express',
    name: 'Express',
    color: '#FFFFFF',
    bg: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.3)',
    iconUrl: '/tech-icons/express.svg',
    svg: (
      <img
        src="/tech-icons/express.svg"
        alt="Express"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  googlemaps: {
    key: 'googlemaps',
    name: 'Google Maps',
    color: '#4285F4',
    bg: 'rgba(66, 133, 244, 0.14)',
    border: 'rgba(66, 133, 244, 0.35)',
    iconUrl: '/tech-icons/google-maps.svg',
    svg: (
      <img
        src="/tech-icons/google-maps.svg"
        alt="Google Maps"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  cloudrun: {
    key: 'cloudrun',
    name: 'Google Cloud Run',
    color: '#AECBFA',
    bg: 'rgba(26, 115, 232, 0.14)',
    border: 'rgba(26, 115, 232, 0.35)',
    iconUrl: '/tech-icons/cloud-run.svg',
    svg: (
      <img
        src="/tech-icons/cloud-run.svg"
        alt="Google Cloud Run"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  gemini: {
    key: 'gemini',
    name: 'Gemini AI',
    color: '#AECBFA',
    bg: 'rgba(66, 133, 244, 0.14)',
    border: 'rgba(66, 133, 244, 0.35)',
    iconUrl: '/tech-icons/gemini.svg',
    svg: (
      <img
        src="/tech-icons/gemini.svg"
        alt="Gemini AI"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  pandas: {
    key: 'pandas',
    name: 'Pandas',
    color: '#E70488',
    bg: 'rgba(21, 4, 88, 0.2)',
    border: 'rgba(231, 4, 136, 0.4)',
    iconUrl: '/tech-icons/pandas.svg',
    svg: (
      <img
        src="/tech-icons/pandas.svg"
        alt="Pandas"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  numpy: {
    key: 'numpy',
    name: 'NumPy',
    color: '#4DABCF',
    bg: 'rgba(1, 50, 67, 0.25)',
    border: 'rgba(77, 171, 207, 0.4)',
    iconUrl: '/tech-icons/numpy.svg',
    svg: (
      <img
        src="/tech-icons/numpy.svg"
        alt="NumPy"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  scikitlearn: {
    key: 'scikitlearn',
    name: 'Scikit-Learn',
    color: '#F7931E',
    bg: 'rgba(247, 147, 30, 0.14)',
    border: 'rgba(247, 147, 30, 0.4)',
    iconUrl: '/tech-icons/scikit-learn.svg',
    svg: (
      <img
        src="/tech-icons/scikit-learn.svg"
        alt="Scikit-Learn"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  xgboost: {
    key: 'xgboost',
    name: 'XGBoost',
    color: '#FFD700',
    bg: 'rgba(0, 100, 0, 0.2)',
    border: 'rgba(0, 100, 0, 0.45)',
    iconUrl: '/tech-icons/xgboost.svg',
    svg: (
      <img
        src="/tech-icons/xgboost.svg"
        alt="XGBoost"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  plotly: {
    key: 'plotly',
    name: 'Plotly',
    color: '#00CC96',
    bg: 'rgba(63, 79, 117, 0.2)',
    border: 'rgba(0, 204, 150, 0.4)',
    iconUrl: '/tech-icons/plotly.svg',
    svg: (
      <img
        src="/tech-icons/plotly.svg"
        alt="Plotly"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  matplotlib: {
    key: 'matplotlib',
    name: 'Matplotlib',
    color: '#11557C',
    bg: 'rgba(17, 85, 124, 0.18)',
    border: 'rgba(17, 85, 124, 0.45)',
    iconUrl: '/tech-icons/matplotlib.svg',
    svg: (
      <img
        src="/tech-icons/matplotlib.svg"
        alt="Matplotlib"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  vite: {
    key: 'vite',
    name: 'Vite',
    color: '#646CFF',
    bg: 'rgba(100, 108, 255, 0.14)',
    border: 'rgba(100, 108, 255, 0.35)',
    iconUrl: '/tech-icons/vite.svg',
    svg: (
      <img
        src="/tech-icons/vite.svg"
        alt="Vite"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  linux: {
    key: 'linux',
    name: 'Linux',
    color: '#FCC624',
    bg: 'rgba(252, 198, 36, 0.15)',
    border: 'rgba(252, 198, 36, 0.4)',
    iconUrl: '/tech-icons/linux.svg',
    svg: (
      <img
        src="/tech-icons/linux.svg"
        alt="Linux"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  docker: {
    key: 'docker',
    name: 'Docker',
    color: '#2496ED',
    bg: 'rgba(36, 150, 237, 0.14)',
    border: 'rgba(36, 150, 237, 0.35)',
    iconUrl: '/tech-icons/docker.svg',
    svg: (
      <img
        src="/tech-icons/docker.svg"
        alt="Docker"
        className="w-full h-full object-contain pointer-events-none select-none"
        draggable={false}
      />
    ),
  },

  ml: {
    key: 'ml',
    name: 'Machine Learning',
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.14)',
    border: 'rgba(139, 92, 246, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#8B5CF6]" strokeWidth="1.8">
        <circle cx="6" cy="6" r="3" fill="#8B5CF6" fillOpacity="0.25" />
        <circle cx="6" cy="18" r="3" fill="#8B5CF6" fillOpacity="0.25" />
        <circle cx="18" cy="12" r="3" fill="#8B5CF6" fillOpacity="0.25" />
        <line x1="9" y1="6" x2="15" y2="12" />
        <line x1="9" y1="18" x2="15" y2="12" />
      </svg>
    ),
  },

  os: {
    key: 'os',
    name: 'OS Architecture',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.14)',
    border: 'rgba(16, 185, 129, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#10B981]" strokeWidth="1.8">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="#10B981" fillOpacity="0.2" />
        <rect x="9" y="9" width="6" height="6" fill="#10B981" />
        <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
      </svg>
    ),
  },

  realtime: {
    key: 'realtime',
    name: 'Real-Time Systems',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.14)',
    border: 'rgba(245, 158, 11, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#F59E0B]" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },

  signal: {
    key: 'signal',
    name: 'Signals & Telecom',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.14)',
    border: 'rgba(59, 130, 246, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#3B82F6]" strokeWidth="1.8">
        <path d="M2 12c4-8 8-8 10 0s6 8 10 0" />
        <circle cx="12" cy="12" r="2" fill="#3B82F6" />
      </svg>
    ),
  },

  geo: {
    key: 'geo',
    name: 'Geospatial Analytics',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.14)',
    border: 'rgba(6, 182, 212, 0.35)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#06B6D4]" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18" />
      </svg>
    ),
  },
};

// Filtered array of official brand logos for the Hero interactive cursor trail
export const TECH_LOGOS = [
  ALL_TECH_LOGOS.python,
  ALL_TECH_LOGOS.cpp,
  ALL_TECH_LOGOS.c,
  ALL_TECH_LOGOS.javascript,
  ALL_TECH_LOGOS.typescript,
  ALL_TECH_LOGOS.react,
  ALL_TECH_LOGOS.nodejs,
  ALL_TECH_LOGOS.socketio,
  ALL_TECH_LOGOS.streamlit,
  ALL_TECH_LOGOS.tailwind,
  ALL_TECH_LOGOS.git,
  ALL_TECH_LOGOS.firebase,
  ALL_TECH_LOGOS.express,
  ALL_TECH_LOGOS.googlemaps,
  ALL_TECH_LOGOS.cloudrun,
  ALL_TECH_LOGOS.gemini,
  ALL_TECH_LOGOS.pandas,
  ALL_TECH_LOGOS.numpy,
  ALL_TECH_LOGOS.scikitlearn,
  ALL_TECH_LOGOS.xgboost,
  ALL_TECH_LOGOS.plotly,
  ALL_TECH_LOGOS.matplotlib,
  ALL_TECH_LOGOS.vite,
  ALL_TECH_LOGOS.docker,
  ALL_TECH_LOGOS.linux,
];

// Lookup logo by key/name
export function getSkillLogo(nameOrKey) {
  if (!nameOrKey) return null;
  const rawLower = String(nameOrKey).toLowerCase().trim();

  // Handle direct aliases first
  if (rawLower === 'c++' || rawLower === 'cpp') return ALL_TECH_LOGOS.cpp;
  if (rawLower === 'c') return ALL_TECH_LOGOS.c;

  const key = rawLower.replace(/[^a-z0-9]/g, '');
  if (ALL_TECH_LOGOS[key]) return ALL_TECH_LOGOS[key];

  // Specific alias mappings
  const aliases = {
    'machinelearning': 'ml',
    'osarchitecture': 'os',
    'realtimesystems': 'realtime',
    'signalstelecom': 'signal',
    'geospatialanalytics': 'geo',
    'gitgithub': 'git',
    'github': 'git',
    'tailwindcss': 'tailwind',
    'googlemapsplatform': 'googlemaps',
    'googlecloudrun': 'cloudrun',
  };
  if (aliases[key] && ALL_TECH_LOGOS[aliases[key]]) {
    return ALL_TECH_LOGOS[aliases[key]];
  }

  // Exact name match or safe partial match (avoid single-letter keys like 'c' matching everything)
  const entries = Object.entries(ALL_TECH_LOGOS);
  for (const [k, val] of entries) {
    if (val.name.toLowerCase() === rawLower) {
      return val;
    }
  }

  for (const [k, val] of entries) {
    if (k.length > 2 && (val.name.toLowerCase().includes(rawLower) || rawLower.includes(val.name.toLowerCase()) || rawLower.includes(k))) {
      return val;
    }
  }

  return null;
}

export default function TechIcon({ name, className = 'w-5 h-5' }) {
  const logo = getSkillLogo(name);
  if (!logo) return null;

  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      {logo.svg}
    </span>
  );
}
