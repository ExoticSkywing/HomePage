export default function GyroscopeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes gyroRing1 { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(6deg); } }
        @keyframes gyroRing2 { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-5deg); } }
        @keyframes gyroPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes gyroS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes gyroS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes gyroS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .gyro-ring1 { animation: gyroRing1 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .gyro-ring2 { animation: gyroRing2 2.5s ease-in-out infinite 0.5s; transform-origin: 10px 10px; }
        .gyro-glow { animation: gyroPulse 2.5s ease-in-out infinite; }
        .gyro-s1 { animation: gyroS1 3.2s ease-in-out infinite 0.3s; }
        .gyro-s2 { animation: gyroS2 2.8s ease-in-out infinite 1s; }
        .gyro-s3 { animation: gyroS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="gyro-s1" cx="1.5" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="gyro-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="gyro-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Outer ring - horizontal ellipse */}
      <g className="gyro-ring1">
        <ellipse cx="10" cy="10" rx="8" ry="4" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <ellipse cx="10" cy="10" rx="8" ry="4" fill="#c7d2fe" opacity="0.08" />
        {/* Warm accent on ring */}
        <path className="gyro-glow" d="M16 8C17 8.5 17.8 9.2 18 10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.6" />
      </g>
      {/* Middle ring - vertical ellipse */}
      <g className="gyro-ring2">
        <ellipse cx="10" cy="10" rx="4" ry="7.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
        {/* Warm accent */}
        <path className="gyro-glow" d="M11.5 3C12 3.5 12.8 4.5 13 5.5" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
      {/* Tilted ring */}
      <ellipse cx="10" cy="10" rx="6" ry="6.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" transform="rotate(30 10 10)" />
      {/* Core sphere */}
      <circle cx="10" cy="10" r="2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="10" r="2" fill="#c7d2fe" opacity="0.25" />
      <circle className="gyro-glow" cx="10" cy="10" r="0.7" fill="#f97316" opacity="0.5" />
      {/* Highlight */}
      <path d="M9 8.5C9.3 8.2 9.7 8.1 10.2 8.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}
