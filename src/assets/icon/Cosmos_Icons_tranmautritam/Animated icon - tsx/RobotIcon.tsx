export default function RobotIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes robotBob { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes robotBlink { 0%, 42%, 46%, 100% { ry: 1.2; } 44% { ry: 0.2; } }
        @keyframes robotAntenna { 0%, 100% { opacity: 0.4; r: 0.8; } 50% { opacity: 1; r: 1; } }
        @keyframes robotS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes robotS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes robotS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .robot-body { animation: robotBob 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .robot-eye { animation: robotBlink 4s ease-in-out infinite; }
        .robot-eye-r { animation: robotBlink 4s ease-in-out infinite 0.05s; }
        .robot-antenna { animation: robotAntenna 2s ease-in-out infinite; }
        .robot-s1 { animation: robotS1 3.1s ease-in-out infinite 0.4s; }
        .robot-s2 { animation: robotS2 2.7s ease-in-out infinite 1.1s; }
        .robot-s3 { animation: robotS3 2.3s ease-in-out infinite 1.7s; }
      `}</style>
      <circle className="robot-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="robot-s2" cx="17.5" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="robot-s3" cx="3.5" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="robot-body">
        <line x1="10" y1="2" x2="10" y2="4.5" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        <circle className="robot-antenna" cx="10" cy="2" r="0.8" stroke="#f97316" strokeWidth="0.8" fill="none" />
        <circle className="robot-antenna" cx="10" cy="2" r="0.8" fill="#facc15" opacity="0.3" />
        <rect x="4.5" y="4.5" width="11" height="8" rx="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="4.5" y="4.5" width="11" height="8" rx="2.5" fill="#c7d2fe" opacity="0.2" />
        <ellipse className="robot-eye" cx="7.5" cy="8.5" rx="1.2" ry="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <ellipse className="robot-eye" cx="7.5" cy="8.5" rx="1.2" ry="1.2" fill="#c7d2fe" opacity="0.3" />
        <circle cx="7.5" cy="8.5" r="0.4" fill="#f97316" opacity="0.6" />
        <ellipse className="robot-eye-r" cx="12.5" cy="8.5" rx="1.2" ry="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <ellipse className="robot-eye-r" cx="12.5" cy="8.5" rx="1.2" ry="1.2" fill="#c7d2fe" opacity="0.3" />
        <circle cx="12.5" cy="8.5" r="0.4" fill="#f97316" opacity="0.6" />
        <line x1="8" y1="11" x2="12" y2="11" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
        <rect x="5.5" y="13.5" width="9" height="4" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="5.5" y="13.5" width="9" height="4" rx="1.5" fill="#c7d2fe" opacity="0.15" />
        <line x1="4.5" y1="7" x2="3" y2="6" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="15.5" y1="7" x2="17" y2="6" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="15" x2="8" y2="16.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <line x1="10" y1="15" x2="10" y2="16.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <line x1="12" y1="15" x2="12" y2="16.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  );
}
