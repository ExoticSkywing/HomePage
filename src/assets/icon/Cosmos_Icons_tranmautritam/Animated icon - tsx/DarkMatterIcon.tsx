export default function DarkMatterIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes dmPulse { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.08); opacity: 0.35; } }
        @keyframes dmCore { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.85; } }
        @keyframes dmFlicker { 0%, 20%, 100% { opacity: 0.15; } 10% { opacity: 0.5; } }
        @keyframes dmS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes dmS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes dmS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .dm-ring1 { animation: dmPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .dm-ring2 { animation: dmPulse 3s ease-in-out infinite 1s; transform-origin: 10px 10px; }
        .dm-ring3 { animation: dmPulse 3s ease-in-out infinite 2s; transform-origin: 10px 10px; }
        .dm-core { animation: dmCore 2s ease-in-out infinite; }
        .dm-flicker { animation: dmFlicker 4s ease-in-out infinite; }
        .dm-s1 { animation: dmS1 3.2s ease-in-out infinite 0.3s; }
        .dm-s2 { animation: dmS2 2.8s ease-in-out infinite 1s; }
        .dm-s3 { animation: dmS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="dm-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="dm-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="dm-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Ripple rings */}
      <circle className="dm-ring1" cx="10" cy="10" r="8.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.15" strokeDasharray="2 3" />
      <circle className="dm-ring2" cx="10" cy="10" r="6.5" stroke="#6366f1" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="2 2" />
      <circle className="dm-ring3" cx="10" cy="10" r="4.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.25" />
      {/* Core shape - irregular */}
      <path d="M10 5.5C12 5.5 14 7 14 10C14 13 12 14.5 10 14.5C8 14.5 6 13 6 10C6 7 8 5.5 10 5.5Z" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <path d="M10 5.5C12 5.5 14 7 14 10C14 13 12 14.5 10 14.5C8 14.5 6 13 6 10C6 7 8 5.5 10 5.5Z" fill="#6366f1" opacity="0.1" />
      {/* Inner void */}
      <circle cx="10" cy="10" r="2" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" strokeDasharray="1.5 1.5" />
      {/* Core */}
      <circle className="dm-core" cx="10" cy="10" r="0.8" fill="#6366f1" opacity="0.6" />
      {/* Particle traces */}
      <circle className="dm-flicker" cx="7.5" cy="7" r="0.3" fill="#f97316" opacity="0.3" />
      <circle className="dm-flicker" cx="13" cy="8.5" r="0.3" fill="#f97316" opacity="0.3" />
      <circle className="dm-flicker" cx="8" cy="13" r="0.25" fill="#facc15" opacity="0.3" />
      <circle className="dm-flicker" cx="12.5" cy="12" r="0.25" fill="#f97316" opacity="0.3" />
      {/* Highlight */}
      <path d="M8 7C8.5 6.3 9 6 10 5.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
