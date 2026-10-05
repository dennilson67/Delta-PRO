import React from 'react';

interface DeltaProLogoProps {
  variant?: 'stacked' | 'horizontal' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const DeltaProLogo: React.FC<DeltaProLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Sizing maps
  const markSizeMap = {
    sm: 36,
    md: 46,
    lg: 72,
    xl: 110,
  };

  const markSize = markSizeMap[size];

  // Official Emblem matching the uploaded logo exactly:
  // - Dynamic swirling circular water splash in electric blue / cyan
  // - 5 water droplets splashing from the crest
  // - Centered car front silhouette inside the wave
  const Emblem = (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="deltaWaveGradient" x1="20" y1="180" x2="180" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0077D4" />
          <stop offset="40%" stopColor="#009EFF" />
          <stop offset="85%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        <linearGradient id="deltaDropGrad1" x1="100" y1="40" x2="140" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#009EFF" />
        </linearGradient>

        <linearGradient id="deltaCarGrad" x1="60" y1="80" x2="140" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Subtle outer circular framing ring */}
      <circle
        cx="100"
        cy="100"
        r="78"
        stroke="#E2E8F0"
        strokeWidth="1.5"
        strokeOpacity="0.2"
        strokeDasharray="180 30"
      />

      {/* Main Dynamic Circular Water Splash Wave */}
      <path
        d="M 68 152 
           C 52 142, 38 122, 38 98 
           C 38 64, 66 36, 102 36 
           C 126 36, 146 48, 154 66 
           C 158 76, 154 84, 142 84 
           C 130 84, 122 72, 110 64 
           C 98 56, 82 58, 70 70 
           C 56 84, 56 108, 68 126 
           C 76 138, 88 148, 102 152 
           C 114 156, 126 154, 134 148 
           C 126 160, 108 166, 92 164 
           C 82 162, 74 158, 68 152 Z"
        fill="url(#deltaWaveGradient)"
      />

      {/* Secondary accent wave curl */}
      <path
        d="M 66 92
           C 68 76, 82 62, 102 60
           C 116 58, 128 66, 132 76
           C 128 72, 118 68, 106 70
           C 92 72, 80 82, 74 94
           C 70 102, 68 112, 70 120
           C 66 112, 64 102, 66 92 Z"
        fill="#38BDF8"
        opacity="0.85"
      />

      {/* Droplet 1 (Top right large droplet) */}
      <path
        d="M 148 64 C 158 66, 168 76, 164 88 C 160 98, 148 98, 142 90 C 136 82, 140 68, 148 64 Z"
        fill="url(#deltaDropGrad1)"
      />

      {/* Droplet 2 (Middle splash droplet) */}
      <path
        d="M 132 82 C 140 88, 142 98, 136 104 C 130 110, 122 108, 118 100 C 114 92, 124 82, 132 82 Z"
        fill="#009EFF"
      />

      {/* Droplet 3 (Center upper teardrop) */}
      <path
        d="M 116 72 C 122 76, 124 84, 118 90 C 112 96, 106 94, 104 86 C 102 78, 110 72, 116 72 Z"
        fill="#38BDF8"
      />

      {/* Droplet 4 (Far right outer splash droplet) */}
      <path
        d="M 166 74 C 174 78, 176 86, 172 92 C 168 98, 160 96, 158 90 C 156 84, 162 76, 166 74 Z"
        fill="#009EFF"
      />

      {/* Droplet 5 (Small spray droplet) */}
      <circle cx="106" cy="62" r="3.5" fill="#38BDF8" />
      <circle cx="128" cy="64" r="4" fill="#38BDF8" />

      {/* Car Silhouette (Front View in crisp detail) */}
      <g transform="translate(62, 92) scale(0.38)">
        {/* Car body silhouette */}
        <path
          d="M 40 40 
             C 48 30, 70 20, 100 20 
             C 130 20, 152 30, 160 40 
             L 174 46 
             C 186 48, 196 58, 196 70 
             L 194 88 
             C 194 94, 190 98, 184 98 
             L 182 106 
             C 182 110, 178 114, 172 114 
             L 164 114 
             C 158 114, 154 110, 154 106 
             L 154 100 
             L 46 100 
             L 46 106 
             C 46 110, 42 114, 36 114 
             L 28 114 
             C 22 114, 18 110, 18 106 
             L 16 98 
             C 10 98, 6 94, 6 88 
             L 4 70 
             C 4 58, 14 48, 26 46 
             Z"
          fill="url(#deltaCarGrad)"
          opacity="0.9"
        />

        {/* Windshield */}
        <path
          d="M 48 44 
             C 56 34, 76 28, 100 28 
             C 124 28, 144 34, 152 44 
             L 162 58 
             C 160 60, 140 64, 100 64 
             C 60 64, 40 60, 38 58 
             Z"
          fill="#06080D"
          opacity="0.85"
        />

        {/* Headlights (Left & Right Modern Slanted LEDs) */}
        <path
          d="M 22 68 C 30 68, 42 72, 46 76 C 42 80, 26 80, 20 76 C 18 73, 19 70, 22 68 Z"
          fill="#38BDF8"
          opacity="0.95"
        />
        <path
          d="M 178 68 C 170 68, 158 72, 154 76 C 158 80, 174 80, 180 76 C 182 73, 181 70, 178 68 Z"
          fill="#38BDF8"
          opacity="0.95"
        />

        {/* Front Grille & License plate outline */}
        <rect x="65" y="80" width="70" height="12" rx="4" fill="#06080D" opacity="0.8" />
        <rect x="82" y="84" width="36" height="5" rx="2" fill="#E2E8F0" opacity="0.9" />

        {/* Aerodynamic Mirrors */}
        <path d="M 26 48 L 12 44 C 10 44, 8 48, 12 52 L 24 53 Z" fill="url(#deltaCarGrad)" opacity="0.85" />
        <path d="M 174 48 L 188 44 C 190 44, 192 48, 188 52 L 176 53 Z" fill="url(#deltaCarGrad)" opacity="0.85" />
      </g>
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {Emblem}
        <div className="mt-3">
          <div className="font-extrabold tracking-tight leading-none text-2xl sm:text-3xl md:text-4xl">
            <span className="text-white drop-shadow-sm">DELTA</span>
            <span className="text-[#009EFF] drop-shadow-[0_0_12px_rgba(0,158,255,0.4)]">PRO</span>
          </div>
          {showTagline && (
            <p className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.38em] text-slate-400 uppercase text-center pl-1">
              Estética Automotiva
            </p>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {Emblem}
      <div className="flex flex-col justify-center">
        <div className="font-extrabold tracking-tight leading-none text-xl sm:text-2xl">
          <span className="text-white">DELTA</span>
          <span className="text-[#009EFF]">PRO</span>
        </div>
        {showTagline && (
          <p className="mt-1 text-[8px] sm:text-[9.5px] font-semibold tracking-[0.32em] text-slate-400 uppercase whitespace-nowrap pl-0.5">
            Estética Automotiva
          </p>
        )}
      </div>
    </div>
  );
};
