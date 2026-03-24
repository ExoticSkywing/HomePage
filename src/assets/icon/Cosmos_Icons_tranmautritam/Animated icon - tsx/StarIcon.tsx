export default function StarIcon({ size = 24 }: { size?: number }) {
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
        @keyframes starRotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes starGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes sStarTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes sStarTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes sStarTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        .star-body {
          animation: starRotate 4s ease-in-out infinite;
          transform-origin: 10px 10.5px;
        }
        .star-warm-glow {
          animation: starGlow 2s ease-in-out infinite;
        }
        .s-star1 { animation: sStarTwinkle1 3s ease-in-out infinite 0.2s; }
        .s-star2 { animation: sStarTwinkle2 2.6s ease-in-out infinite 0.9s; }
        .s-star3 { animation: sStarTwinkle3 2.1s ease-in-out infinite 1.6s; }
      `}</style>

      {/* Tiny stars */}
      <circle className="s-star1" cx="2.5" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="s-star2" cx="17" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="s-star3" cx="3" cy="16.5" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="star-body">
        {/* Star shape - primary stroke */}
        <path
          d="M10 2L12.1 7.3L17.8 7.8L13.5 11.5L14.8 17.1L10 14.2L5.2 17.1L6.5 11.5L2.2 7.8L7.9 7.3L10 2Z"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Duotone fill */}
        <path
          d="M10 2L12.1 7.3L17.8 7.8L13.5 11.5L14.8 17.1L10 14.2L5.2 17.1L6.5 11.5L2.2 7.8L7.9 7.3L10 2Z"
          fill="#c7d2fe"
          opacity="0.3"
        />

        {/* Inner star detail - secondary */}
        <path
          d="M10 5.5L11.2 8.3L14.2 8.6L12 10.5L12.6 13.5L10 11.9L7.4 13.5L8 10.5L5.8 8.6L8.8 8.3L10 5.5Z"
          stroke="#a5b4fc"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* Warm center glow */}
        <circle
          className="star-warm-glow"
          cx="10"
          cy="10"
          r="1.5"
          stroke="#f97316"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <circle
          className="star-warm-glow"
          cx="10"
          cy="10"
          r="0.8"
          stroke="#facc15"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />

        {/* Highlight on top point */}
        <path
          d="M9 4L10 2L10.5 3.5"
          stroke="#a5b4fc"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
