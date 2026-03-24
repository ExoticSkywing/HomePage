export default function HapticIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes hapRing1 { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.05); } }
        @keyframes hapRing2 { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(1.08); } }
        @keyframes hapPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes hapGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes hapS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes hapS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes hapS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .hap-body { animation: hapPulse 3s ease-in-out infinite; transform-origin: 10px 12px; }
        .hap-r1 { animation: hapRing1 2s ease-in-out infinite; transform-origin: 10px 7px; }
        .hap-r2 { animation: hapRing2 2s ease-in-out infinite 0.3s; transform-origin: 10px 7px; }
        .hap-glow { animation: hapGlow 2.5s ease-in-out infinite; }
        .hap-s1 { animation: hapS1 3.2s ease-in-out infinite 0.3s; }
        .hap-s2 { animation: hapS2 2.8s ease-in-out infinite 1s; }
        .hap-s3 { animation: hapS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="hap-s1" cx="1.5" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="hap-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="hap-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Pulse rings */}
      <path className="hap-r2" d="M3 4C4.5 1.5 7.5 0 10 0C12.5 0 15.5 1.5 17 4" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.2" />
      <path className="hap-r1" d="M5 5.5C6 3.5 8 2 10 2C12 2 14 3.5 15 5.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" />
      <path className="hap-r1" d="M7 7C7.5 5.5 8.5 4.5 10 4.5C11.5 4.5 12.5 5.5 13 7" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Center point */}
      <circle className="hap-glow" cx="10" cy="7" r="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle className="hap-glow" cx="10" cy="7" r="0.4" fill="#f97316" opacity="0.7" />
      <g className="hap-body">
        {/* Hand base - simplified palm */}
        <path d="M6 18V13C6 12.2 6.8 11.5 7.5 11.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M14 18V13C14 12.2 13.2 11.5 12.5 11.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Finger - index pointing up */}
        <path d="M10 7.5V11.5C10 11.5 9 12 8 12" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M10 11.5C10 11.5 11 12 12 12" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Finger detail */}
        <path d="M8 12C7.5 12.5 7 13 7 14" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M12 12C12.5 12.5 13 13 13 14" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Palm fill */}
        <path d="M7 14C7 14 8 13 10 13C12 13 13 14 13 14V17H7Z" fill="#c7d2fe" opacity="0.12" />
        {/* Warm touch glow */}
        <circle className="hap-glow" cx="10" cy="8.5" r="0.3" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
