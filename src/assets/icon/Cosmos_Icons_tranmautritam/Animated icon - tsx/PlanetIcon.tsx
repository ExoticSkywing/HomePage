export default function PlanetIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <style>{`
        @keyframes planetSpin {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes planetPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes ringOrbit {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes pStarTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes pStarTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes pStarTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .planet-group {
          animation: planetPulse 3s ease-in-out infinite;
          transform-origin: 10px 10px;
        }
        .planet-ring-group {
          animation: ringOrbit 4s ease-in-out infinite;
          transform-origin: 10px 10px;
        }
        .planet-surface-line {
          animation: planetSpin 6s linear infinite;
        }
        .p-star1 { animation: pStarTwinkle1 3.2s ease-in-out infinite 0.3s; }
        .p-star2 { animation: pStarTwinkle2 2.8s ease-in-out infinite 1s; }
        .p-star3 { animation: pStarTwinkle3 2.2s ease-in-out infinite 1.8s; }
        .planet-glow { animation: glowPulse 2.5s ease-in-out infinite; }
      `}</style>

      {/* Stars */}
      <circle className="p-star1" cx="2" cy="4" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="p-star2" cx="17.5" cy="3" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="p-star3" cx="3.5" cy="16" r="0.35" fill="#a5b4fc" opacity="0" />

      {/* Ring behind planet */}
      <g className="planet-ring-group">
        <ellipse
          cx="10"
          cy="10.8"
          rx="8.5"
          ry="2.8"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          clipPath="url(#ringClipBack)"
        />
      </g>

      {/* Planet body */}
      <g className="planet-group">
        {/* Planet sphere - primary stroke */}
        <circle
          cx="10"
          cy="10"
          r="5"
          stroke="#6366f1"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Duotone fill */}
        <circle
          cx="10"
          cy="10"
          r="5"
          fill="#c7d2fe"
          opacity="0.3"
        />

        {/* Surface details - secondary color, clipped to planet */}
        <g clipPath="url(#planetClip)">
          <path
            className="planet-surface-line"
            d="M5.5 8.2C6.5 7.8 8 8.5 10 8.2C12 7.9 13.2 7.2 14.5 7.8"
            stroke="#a5b4fc"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="2 2"
          />
          <path
            d="M6 11.5C7.5 12.2 9 11 10.5 11.3C12 11.6 13.5 12.5 14.2 12"
            stroke="#a5b4fc"
            strokeWidth="0.7"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          {/* Crater detail */}
          <circle
            cx="11.5"
            cy="9.5"
            r="1"
            stroke="#a5b4fc"
            strokeWidth="0.7"
            fill="none"
            opacity="0.4"
          />
          <circle
            cx="8"
            cy="11.2"
            r="0.6"
            stroke="#a5b4fc"
            strokeWidth="0.6"
            fill="none"
            opacity="0.35"
          />
        </g>

        {/* Highlight arc - subtle shine */}
        <path
          d="M7.5 6.8C8.3 6 9.2 5.5 10.2 5.2"
          stroke="#a5b4fc"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Warm sunlit atmosphere - matches rocket flame colors */}
        <g className="planet-glow" clipPath="url(#planetClip)">
          <path
            d="M14.8 7.5C15.2 8.8 15.2 10.2 14.8 11.5"
            stroke="#f97316"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M14.2 8.5C14.5 9.3 14.5 10.3 14.2 11"
            stroke="#facc15"
            strokeWidth="0.7"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </g>
      </g>

      {/* Atmospheric rim glow - warm edge on sunlit side */}
      <g className="planet-group">
        <path
          className="planet-glow"
          d="M14.5 6.5C15.8 8.2 15.8 11.8 14.5 13.5"
          stroke="#f97316"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
      </g>

      {/* Ring in front of planet */}
      <g className="planet-ring-group">
        <ellipse
          cx="10"
          cy="10.8"
          rx="8.5"
          ry="2.8"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          clipPath="url(#ringClipFront)"
        />
      </g>

      {/* Clip paths */}
      <defs>
        <clipPath id="planetClip">
          <circle cx="10" cy="10" r="5" />
        </clipPath>
        <clipPath id="ringClipFront">
          <rect x="0" y="12.5" width="20" height="8" />
        </clipPath>
        <clipPath id="ringClipBack">
          <rect x="0" y="0" width="20" height="12.5" />
        </clipPath>
      </defs>
    </svg>
  );
}