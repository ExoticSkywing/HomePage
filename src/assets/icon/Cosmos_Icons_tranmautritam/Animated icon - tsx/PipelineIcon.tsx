export default function PipelineIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes pipFlow { 0% { stroke-dashoffset: 8; } 100% { stroke-dashoffset: 0; } }
        @keyframes pipPulse1 { 0%, 100% { opacity: 0.4; } 30% { opacity: 1; } 60% { opacity: 0.3; } }
        @keyframes pipPulse2 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 70% { opacity: 0.3; } }
        @keyframes pipGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes pipS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes pipS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes pipS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .pip-body { transform-origin: 10px 10px; }
        .pip-flow { animation: pipFlow 2s linear infinite; stroke-dasharray: 2 6; }
        .pip-p1 { animation: pipPulse1 2.5s ease-in-out infinite; }
        .pip-p2 { animation: pipPulse2 2.8s ease-in-out infinite 0.4s; }
        .pip-glow { animation: pipGlow 2.5s ease-in-out infinite; }
        .pip-s1 { animation: pipS1 3.2s ease-in-out infinite 0.3s; }
        .pip-s2 { animation: pipS2 2.8s ease-in-out infinite 1s; }
        .pip-s3 { animation: pipS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="pip-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="pip-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="pip-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="pip-body">
        {/* Connection lines */}
        <line className="pip-flow" x1="5.5" y1="4" x2="10" y2="7.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line className="pip-flow" x1="14.5" y1="4" x2="10" y2="7.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line className="pip-flow" x1="10" y1="12.5" x2="5.5" y2="16" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line className="pip-flow" x1="10" y1="12.5" x2="14.5" y2="16" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        {/* Accent signal paths */}
        <path className="pip-flow" d="M5.5 4L10 10L14.5 16" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        <path className="pip-flow" d="M14.5 4L10 10L5.5 16" stroke="#facc15" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Top nodes - input */}
        <circle className="pip-p1" cx="5.5" cy="4" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="5.5" cy="4" r="1.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="pip-p2" cx="14.5" cy="4" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="14.5" cy="4" r="1.5" fill="#c7d2fe" opacity="0.3" />
        {/* Center node - processing */}
        <circle cx="10" cy="10" r="2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="2" fill="#c7d2fe" opacity="0.25" />
        <circle className="pip-glow" cx="10" cy="10" r="0.7" fill="#f97316" opacity="0.6" />
        {/* Inner ring */}
        <circle cx="10" cy="10" r="1.2" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
        {/* Bottom nodes - output */}
        <circle className="pip-p2" cx="5.5" cy="16" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="5.5" cy="16" r="1.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="pip-glow" cx="5.5" cy="16" r="0.4" fill="#facc15" opacity="0.5" />
        <circle className="pip-p1" cx="14.5" cy="16" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="14.5" cy="16" r="1.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="pip-glow" cx="14.5" cy="16" r="0.4" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
