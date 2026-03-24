export default function CircuitIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes circFlow { 0% { stroke-dashoffset: 12; } 100% { stroke-dashoffset: 0; } }
        @keyframes circPulse { 0%, 100% { opacity: 0.3; r: 1.2; } 50% { opacity: 0.8; r: 1.5; } }
        @keyframes circNodeGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes circS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes circS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes circS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .circ-flow { animation: circFlow 3s linear infinite; stroke-dasharray: 3 3; }
        .circ-flow2 { animation: circFlow 3s linear infinite 1.5s; stroke-dasharray: 3 3; }
        .circ-pulse { animation: circPulse 2.5s ease-in-out infinite; }
        .circ-node { animation: circNodeGlow 2.5s ease-in-out infinite; }
        .circ-node2 { animation: circNodeGlow 2.5s ease-in-out infinite 0.8s; }
        .circ-s1 { animation: circS1 3.2s ease-in-out infinite 0.3s; }
        .circ-s2 { animation: circS2 2.8s ease-in-out infinite 1s; }
        .circ-s3 { animation: circS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="circ-s1" cx="1.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="circ-s2" cx="18.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="circ-s3" cx="2" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Traces - horizontal */}
      <path className="circ-flow" d="M3 5H8L8 10H12L12 5H17" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path className="circ-flow2" d="M3 15H6L6 10H10" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path className="circ-flow" d="M10 10H14L14 15H17" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Accent trace */}
      <path className="circ-flow2" d="M8 10L8 15" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="circ-flow" d="M12 5L12 2" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Central processor */}
      <rect x="8.5" y="8.5" width="3" height="3" rx="0.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <rect x="8.5" y="8.5" width="3" height="3" rx="0.5" fill="#c7d2fe" opacity="0.3" />
      <circle className="circ-node" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />
      {/* Nodes */}
      <circle className="circ-node" cx="3" cy="5" r="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="3" cy="5" r="1.2" fill="#c7d2fe" opacity="0.2" />
      <circle className="circ-node2" cx="17" cy="5" r="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="17" cy="5" r="1.2" fill="#c7d2fe" opacity="0.2" />
      <circle className="circ-node2" cx="3" cy="15" r="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="3" cy="15" r="1.2" fill="#c7d2fe" opacity="0.2" />
      <circle className="circ-node" cx="17" cy="15" r="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="17" cy="15" r="1.2" fill="#c7d2fe" opacity="0.2" />
      {/* Node accents */}
      <circle className="circ-node" cx="3" cy="5" r="0.4" fill="#facc15" opacity="0.5" />
      <circle className="circ-node2" cx="17" cy="5" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="circ-node2" cx="3" cy="15" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="circ-node" cx="17" cy="15" r="0.4" fill="#facc15" opacity="0.5" />
    </svg>
  );
}
