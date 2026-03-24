export default function RocketIcon({ size = 24 }: { size?: number }) {
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
        @keyframes rocketFloat {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-0.4px, -0.6px); }
        }
        @keyframes flameFlicker {
          0%, 100% { opacity: 0.85; transform: scaleY(1); }
          25% { opacity: 1; transform: scaleY(1.15); }
          50% { opacity: 0.7; transform: scaleY(0.9); }
          75% { opacity: 0.95; transform: scaleY(1.1); }
        }
        @keyframes starTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes starTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes starTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        .rocket-body {
          animation: rocketFloat 2.5s ease-in-out infinite;
          transform-origin: center center;
        }
        .flame {
          animation: flameFlicker 0.4s ease-in-out infinite;
          transform-origin: 10px 17px;
        }
        .star1 { animation: starTwinkle1 3s ease-in-out infinite; }
        .star2 { animation: starTwinkle2 2.5s ease-in-out infinite 0.8s; }
        .star3 { animation: starTwinkle3 2s ease-in-out infinite 1.5s; }
      `}</style>

      {/* Stars */}
      <circle className="star1" cx="2.5" cy="3" r="0.5" fill="#6366f1" opacity="0" />
      <circle className="star2" cx="17" cy="5.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="star3" cx="4" cy="14" r="0.35" fill="#a5b4fc" opacity="0" />

      {/* Flame - duotone fill (secondary color) */}
      <g className="flame">
        <path
          d="M8.5 15.5C8.5 15.5 9.2 18.2 10 18.8C10.8 18.2 11.5 15.5 11.5 15.5"
          stroke="#f97316"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.2 15.8C9.2 15.8 9.6 17.4 10 17.7C10.4 17.4 10.8 15.8 10.8 15.8"
          stroke="#facc15"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* Rocket group with float animation */}
      <g className="rocket-body">
        {/* Fins - duotone fill (secondary/accent color) */}
        <path
          d="M6.5 13.5L5 15.5L7 14.5"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.5 13.5L15 15.5L13 14.5"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Rocket body - primary stroke */}
        <path
          d="M10 2C10 2 6 6.5 6 11.5C6 13.5 7 15 10 15.5C13 15 14 13.5 14 11.5C14 6.5 10 2 10 2Z"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Nose cone accent - duotone fill */}
        <path
          d="M10 2C10 2 8.2 5.5 7.5 8"
          stroke="#a5b4fc"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />

        {/* Window - primary stroke with duotone fill */}
        <circle
          cx="10"
          cy="9"
          r="1.8"
          stroke="#6366f1"
          strokeWidth="1.2"
          fill="none"
        />
        <circle
          cx="10"
          cy="9"
          r="1.8"
          fill="#c7d2fe"
          opacity="0.3"
        />

        {/* Body stripe - secondary color */}
        <line
          x1="7.2"
          y1="13"
          x2="12.8"
          y2="13"
          stroke="#a5b4fc"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}