export default function LanderIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes lndFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-0.4px); } }
        @keyframes lndGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes lndBlink { 0%, 90%, 100% { opacity: 0.3; } 95% { opacity: 1; } }
        @keyframes lndS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes lndS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes lndS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .lnd-body { animation: lndFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .lnd-glow { animation: lndGlow 2.5s ease-in-out infinite; }
        .lnd-blink { animation: lndBlink 3s ease-in-out infinite; }
        .lnd-s1 { animation: lndS1 3.2s ease-in-out infinite 0.3s; }
        .lnd-s2 { animation: lndS2 2.8s ease-in-out infinite 1s; }
        .lnd-s3 { animation: lndS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="lnd-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="lnd-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="lnd-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Ground */}
      <line x1="1.5" y1="17.5" x2="18.5" y2="17.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <g className="lnd-body">
        {/* Main body - hexagonal capsule */}
        <path d="M6 8L8 5H12L14 8L14 12L12 14H8L6 12Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M6 8L8 5H12L14 8L14 12L12 14H8L6 12Z" fill="#c7d2fe" opacity="0.15" />
        {/* Window */}
        <circle cx="10" cy="9" r="1.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" />
        <circle cx="10" cy="9" r="1.5" fill="#c7d2fe" opacity="0.2" />
        <circle className="lnd-glow" cx="10" cy="8.5" r="0.4" fill="#f97316" opacity="0.5" />
        {/* Landing legs */}
        <path d="M7 14L4.5 17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        <path d="M13 14L15.5 17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        {/* Foot pads */}
        <line x1="3.5" y1="17.5" x2="5.5" y2="17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        <line x1="14.5" y1="17.5" x2="16.5" y2="17.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        {/* Antenna */}
        <line x1="10" y1="5" x2="10" y2="2.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <circle className="lnd-blink" cx="10" cy="2.5" r="0.4" fill="#f97316" opacity="0.5" />
        {/* Side details */}
        <line x1="6.5" y1="10" x2="8" y2="10" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        <line x1="12" y1="10" x2="13.5" y2="10" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        {/* Highlight */}
        <path d="M7.5 6C8 5.5 9 5.2 10 5.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
