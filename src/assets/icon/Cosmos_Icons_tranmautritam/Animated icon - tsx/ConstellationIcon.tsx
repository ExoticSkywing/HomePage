export default function ConstellationIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes constPulse1 { 0%, 100% { opacity: 0.6; r: 1; } 50% { opacity: 1; r: 1.3; } }
        @keyframes constPulse2 { 0%, 100% { opacity: 0.6; r: 0.9; } 50% { opacity: 1; r: 1.2; } }
        @keyframes constPulse3 { 0%, 100% { opacity: 0.7; r: 0.8; } 50% { opacity: 1; r: 1.1; } }
        @keyframes constLineFlow { 0% { stroke-dashoffset: 8; } 100% { stroke-dashoffset: 0; } }
        @keyframes constGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes constS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes constS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes constS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .const-node1 { animation: constPulse1 2.5s ease-in-out infinite; }
        .const-node2 { animation: constPulse2 2.8s ease-in-out infinite 0.5s; }
        .const-node3 { animation: constPulse3 2.3s ease-in-out infinite 1s; }
        .const-node4 { animation: constPulse1 2.6s ease-in-out infinite 1.5s; }
        .const-node5 { animation: constPulse2 2.4s ease-in-out infinite 0.8s; }
        .const-line { animation: constLineFlow 4s linear infinite; stroke-dasharray: 2 2; }
        .const-glow { animation: constGlow 2.5s ease-in-out infinite; }
        .const-s1 { animation: constS1 3s ease-in-out infinite 0.2s; }
        .const-s2 { animation: constS2 2.6s ease-in-out infinite 0.9s; }
        .const-s3 { animation: constS3 2.1s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="const-s1" cx="1.5" cy="10" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="const-s2" cx="18.5" cy="5" r="0.35" fill="#6366f1" opacity="0" />
      <circle className="const-s3" cx="15" cy="18" r="0.35" fill="#a5b4fc" opacity="0" />
      <line className="const-line" x1="4" y1="4" x2="10" y2="6" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <line className="const-line" x1="10" y1="6" x2="16" y2="4" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <line className="const-line" x1="10" y1="6" x2="7" y2="12" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <line className="const-line" x1="10" y1="6" x2="14" y2="11" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <line className="const-line" x1="7" y1="12" x2="10" y2="17" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <line className="const-line" x1="14" y1="11" x2="10" y2="17" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" />
      <circle className="const-node1" cx="4" cy="4" r="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="4" cy="4" r="1" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-glow" cx="4" cy="4" r="0.4" fill="#f97316" opacity="0.6" />
      <circle className="const-node2" cx="10" cy="6" r="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="6" r="1" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-glow" cx="10" cy="6" r="0.4" fill="#facc15" opacity="0.5" />
      <circle className="const-node3" cx="16" cy="4" r="0.9" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="16" cy="4" r="0.9" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-glow" cx="16" cy="4" r="0.35" fill="#f97316" opacity="0.5" />
      <circle className="const-node4" cx="7" cy="12" r="0.9" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="7" cy="12" r="0.9" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-node5" cx="14" cy="11" r="0.8" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="11" r="0.8" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-glow" cx="14" cy="11" r="0.35" fill="#facc15" opacity="0.5" />
      <circle className="const-node1" cx="10" cy="17" r="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="17" r="1" fill="#c7d2fe" opacity="0.3" />
      <circle className="const-glow" cx="10" cy="17" r="0.4" fill="#f97316" opacity="0.6" />
    </svg>
  );
}
