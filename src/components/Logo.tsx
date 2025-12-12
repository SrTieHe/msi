export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagonal Frame */}
      <path
        d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
        fill="url(#gradient1)"
        stroke="#06B6D4"
        strokeWidth="2"
      />
      
      {/* Inner Hexagon */}
      <path
        d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="1.5"
        opacity="0.5"
      />
      
      {/* Letter M - Modern Angular Design */}
      <path
        d="M35 60 L35 40 L50 55 L65 40 L65 60"
        stroke="#06B6D4"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Digital Nodes at M peaks */}
      <circle cx="35" cy="40" r="3" fill="#06B6D4">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="55" r="3" fill="#0EA5E9">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="40" r="3" fill="#06B6D4">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      
      {/* Corner Tech Elements */}
      <path d="M50 8 L50 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <path d="M82 27.5 L78 27.5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <path d="M82 72.5 L78 72.5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 92 L50 88" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 72.5 L22 72.5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 27.5 L22 27.5" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
      
      {/* Circuit Lines connecting corners */}
      <line x1="50" y1="15" x2="50" y2="25" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      <line x1="75" y1="30" x2="70" y2="35" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      <line x1="75" y1="70" x2="70" y2="65" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      <line x1="50" y1="85" x2="50" y2="75" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      <line x1="25" y1="70" x2="30" y2="65" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      <line x1="25" y1="30" x2="30" y2="35" stroke="#0EA5E9" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}