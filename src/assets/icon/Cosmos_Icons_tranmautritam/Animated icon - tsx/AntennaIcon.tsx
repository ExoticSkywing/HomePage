export default function AntennaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes antWave { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.06); } }
        @keyframes antGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes antS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes antS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes antS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ant-wave1 { animation: antWave 2s ease-in-out infinite; transform-origin: 8px 7px; }
        .ant-wave2 { animation: antWave 2s ease-in-out infinite 0.5s; transform-origin: 8px 7px; }
        .ant-wave3 { animation: antWave 2s ease-in-out infinite 1s; transform-origin: 8px 7px; }
        .ant-glow { animation: antGlow 2.5s ease-in-out infinite; }
        .ant-s1 { animation: antS1 3.2s ease-in-out infinite 0.3s; }
        .ant-s2 { animation: antS2 2.8s ease-in-out infinite 1s; }
        .ant-s3 { animation: antS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ant-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ant-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ant-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Signal waves */}
      <path className="ant-wave1" d="M12 4C13.5 4.5 15 6 15 8" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.3" />
      <path className="ant-wave2" d="M13.5 2.5C15.5 3.5 17 5.5 17 8" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.25" />
      <path className="ant-wave3" d="M15 1C17.5 2.5 19 5 19 8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.2" />
      {/* Dish */}
      <path d="M3 10C3 6 5 3.5 8 3.5C10.5 3.5 12 5.5 11 8" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M3 10C3 6 5 3.5 8 3.5C10.5 3.5 12 5.5 11 8" fill="#c7d2fe" opacity="0.1" />
      {/* Feed horn */}
      <line x1="8" y1="7" x2="11" y2="8" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
      <circle className="ant-glow" cx="11" cy="8" r="0.5" fill="#f97316" opacity="0.6" />
      {/* Support structure */}
      <line x1="8" y1="10" x2="8" y2="17.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
      {/* Dish connection */}
      <line x1="6" y1="8" x2="8" y2="10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Base */}
      <path d="M5 17.5L8 15L11 17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="4.5" y1="17.5" x2="11.5" y2="17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
      {/* Cross brace */}
      <line x1="6.5" y1="16" x2="9.5" y2="14" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
      {/* Highlight */}
      <path d="M4.5 6C5.5 4.5 6.5 3.8 8 3.6" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
