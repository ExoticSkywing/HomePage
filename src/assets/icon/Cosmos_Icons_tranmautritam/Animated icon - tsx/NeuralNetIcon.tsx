export default function NeuralNetIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes nnSignal { 0% { stroke-dashoffset: 8; } 100% { stroke-dashoffset: 0; } }
        @keyframes nnPulse1 { 0%, 100% { opacity: 0.4; } 30% { opacity: 1; } 60% { opacity: 0.3; } }
        @keyframes nnPulse2 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 70% { opacity: 0.3; } }
        @keyframes nnPulse3 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes nnGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes nnS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes nnS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes nnS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .nn-signal { animation: nnSignal 3s linear infinite; stroke-dasharray: 2 6; }
        .nn-signal2 { animation: nnSignal 3s linear infinite 1s; stroke-dasharray: 2 6; }
        .nn-p1 { animation: nnPulse1 2.5s ease-in-out infinite; }
        .nn-p2 { animation: nnPulse2 2.8s ease-in-out infinite 0.4s; }
        .nn-p3 { animation: nnPulse3 2.3s ease-in-out infinite 0.8s; }
        .nn-glow { animation: nnGlow 2.5s ease-in-out infinite; }
        .nn-s1 { animation: nnS1 3s ease-in-out infinite 0.2s; }
        .nn-s2 { animation: nnS2 2.6s ease-in-out infinite 0.9s; }
        .nn-s3 { animation: nnS3 2.1s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="nn-s1" cx="1" cy="3" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="nn-s2" cx="19" cy="5" r="0.35" fill="#6366f1" opacity="0" />
      <circle className="nn-s3" cx="2" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Connections layer 1->2 */}
      <line className="nn-signal" x1="4" y1="5" x2="10" y2="4" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal" x1="4" y1="5" x2="10" y2="10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal" x1="4" y1="5" x2="10" y2="16" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line className="nn-signal" x1="4" y1="15" x2="10" y2="4" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line className="nn-signal" x1="4" y1="15" x2="10" y2="10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal" x1="4" y1="15" x2="10" y2="16" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Connections layer 2->3 */}
      <line className="nn-signal2" x1="10" y1="4" x2="16" y2="5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal2" x1="10" y1="4" x2="16" y2="15" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line className="nn-signal2" x1="10" y1="10" x2="16" y2="5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal2" x1="10" y1="10" x2="16" y2="15" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <line className="nn-signal2" x1="10" y1="16" x2="16" y2="5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <line className="nn-signal2" x1="10" y1="16" x2="16" y2="15" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Accent signal paths */}
      <path className="nn-signal" d="M4 5L10 10L16 5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="nn-signal2" d="M4 15L10 10L16 15" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Layer 1 nodes */}
      <circle className="nn-p1" cx="4" cy="5" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="4" cy="5" r="1.5" fill="#c7d2fe" opacity="0.3" />
      <circle className="nn-p2" cx="4" cy="15" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="4" cy="15" r="1.5" fill="#c7d2fe" opacity="0.3" />
      {/* Layer 2 nodes */}
      <circle className="nn-p3" cx="10" cy="4" r="1.3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="4" r="1.3" fill="#c7d2fe" opacity="0.3" />
      <circle className="nn-glow" cx="10" cy="4" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="nn-p1" cx="10" cy="10" r="1.3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="10" r="1.3" fill="#c7d2fe" opacity="0.3" />
      <circle className="nn-glow" cx="10" cy="10" r="0.4" fill="#f97316" opacity="0.6" />
      <circle className="nn-p2" cx="10" cy="16" r="1.3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="16" r="1.3" fill="#c7d2fe" opacity="0.3" />
      <circle className="nn-glow" cx="10" cy="16" r="0.4" fill="#facc15" opacity="0.5" />
      {/* Layer 3 nodes */}
      <circle className="nn-p3" cx="16" cy="5" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="5" r="1.5" fill="#c7d2fe" opacity="0.3" />
      <circle className="nn-p1" cx="16" cy="15" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="15" r="1.5" fill="#c7d2fe" opacity="0.3" />
    </svg>
  );
}
