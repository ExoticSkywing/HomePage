export default function SynapseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes synPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes synArc { 0%, 100% { opacity: 0.3; stroke-dashoffset: 8; } 50% { opacity: 0.8; stroke-dashoffset: 0; } }
        @keyframes synSignal { 0% { cx: 8; opacity: 0; } 20% { opacity: 0.9; } 80% { opacity: 0.9; } 100% { cx: 12; opacity: 0; } }
        @keyframes synGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes synS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes synS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes synS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .syn-body { animation: synPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .syn-arc { animation: synArc 2s ease-in-out infinite; stroke-dasharray: 2 6; }
        .syn-signal { animation: synSignal 2s ease-in-out infinite; }
        .syn-glow { animation: synGlow 2.5s ease-in-out infinite; }
        .syn-s1 { animation: synS1 3.2s ease-in-out infinite 0.3s; }
        .syn-s2 { animation: synS2 2.8s ease-in-out infinite 1s; }
        .syn-s3 { animation: synS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="syn-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="syn-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="syn-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="syn-body">
        {/* Left neuron body */}
        <circle cx="4.5" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="4.5" cy="10" r="3" fill="#c7d2fe" opacity="0.25" />
        <circle cx="4.5" cy="10" r="1.3" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="syn-glow" cx="4.5" cy="10" r="0.5" fill="#f97316" opacity="0.6" />

        {/* Right neuron body */}
        <circle cx="15.5" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="15.5" cy="10" r="3" fill="#c7d2fe" opacity="0.25" />
        <circle cx="15.5" cy="10" r="1.3" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="syn-glow" cx="15.5" cy="10" r="0.5" fill="#f97316" opacity="0.6" />

        {/* Synapse gap - connection arcs */}
        <path className="syn-arc" d="M7.5 8.5C9 7 11 7 12.5 8.5" stroke="#f97316" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        <path className="syn-arc" d="M7.5 10C9 9 11 9 12.5 10" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path className="syn-arc" d="M7.5 11.5C9 13 11 13 12.5 11.5" stroke="#f97316" strokeWidth="0.9" strokeLinecap="round" fill="none" />

        {/* Signal dot traveling */}
        <circle className="syn-signal" cx="10" cy="8" r="0.5" fill="#facc15" opacity="0" />
        <circle className="syn-signal" cx="10" cy="10" r="0.4" fill="#f97316" opacity="0" style={{ animationDelay: "0.7s" }} />

        {/* Dendrite branches - left */}
        <line x1="2" y1="6" x2="3" y2="7.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="1.5" y1="10" x2="1.5" y2="10" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="2" y1="14" x2="3" y2="12.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Dendrite branches - right */}
        <line x1="18" y1="6" x2="17" y2="7.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="18" y1="14" x2="17" y2="12.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Highlights */}
        <path d="M3 8C3.3 7.3 3.8 7 4.5 7" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M14" y1="8" d="M14 8C14.3 7.3 14.8 7 15.5 7" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
