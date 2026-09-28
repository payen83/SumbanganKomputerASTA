import React from 'react';

export const AstaLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="56" fill="white" stroke="#CBD5E1" strokeWidth="2" />
        {/* Intertwined ribbons representing ASTA Tradition */}
        <path
          d="M60 22 C75 22, 92 34, 94 52 C96 70, 78 86, 60 96 C42 86, 24 70, 26 52 C28 34, 45 22, 60 22 Z"
          fill="none"
          stroke="#002B66"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M40 38 C55 24, 82 28, 92 48 C100 66, 84 88, 66 94 C48 98, 30 80, 32 60 C34 46, 44 42, 54 44"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M74 42 C64 30, 40 36, 32 54 C24 72, 42 92, 60 94 C76 96, 92 78, 86 58 C82 48, 72 46, 64 50"
          fill="none"
          stroke="#0284C7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Core star / seed */}
        <circle cx="60" cy="58" r="6" fill="#002B66" />
        {/* Text ribbon */}
        <rect x="20" y="94" width="80" height="18" rx="4" fill="#002B66" />
        <text x="60" y="106" fill="#FFFFFF" fontSize="9" fontWeight="800" textAnchor="middle" letterSpacing="0.8">
          ASTA TRADITION
        </text>
      </svg>
    </div>
  );
};

export const SemestaCrest: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 135" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield Outer */}
        <path
          d="M10 20 C10 10, 25 6, 60 6 C95 6, 110 10, 110 20 L110 75 C110 105, 75 125, 60 130 C45 125, 10 105, 10 75 Z"
          fill="#FFFFFF"
          stroke="#002B66"
          strokeWidth="3.5"
        />
        {/* Inner header band */}
        <path
          d="M14 20 C25 12, 50 10, 60 10 C70 10, 95 12, 106 20 L106 42 C85 36, 35 36, 14 42 Z"
          fill="#002B66"
        />
        <text x="60" y="24" fill="#F8FAFC" fontSize="6.5" fontWeight="700" textAnchor="middle">
          SEK. MEN. SAINS
        </text>
        <text x="60" y="32" fill="#F8FAFC" fontSize="6.2" fontWeight="700" textAnchor="middle">
          TENGKU ABDULLAH
        </text>
        <text x="60" y="39" fill="#FDE047" fontSize="5.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
          RAUB
        </text>

        {/* Central emblem */}
        <path d="M22 46 L98 46 L98 84 C98 100, 70 114, 60 118 C50 114, 22 100, 22 84 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />
        
        {/* Color stripes - Red, Yellow, Blue */}
        <path d="M35 52 L48 52 L48 88 C44 86, 39 82, 35 78 Z" fill="#DC2626" />
        <path d="M53 52 L67 52 L67 92 L53 92 Z" fill="#F59E0B" />
        <path d="M72 52 L85 52 L85 78 C81 82, 76 86, 72 88 Z" fill="#0284C7" />

        {/* Torch & Book motif */}
        <circle cx="60" cy="62" r="7" fill="#FEF08A" stroke="#002B66" strokeWidth="1.5" />
        <path d="M57 65 L63 65 L61 74 L59 74 Z" fill="#EA580C" />
        <path d="M60 52 C58 56, 62 56, 60 59" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />

        {/* Motto Banner */}
        <rect x="18" y="100" width="84" height="15" rx="3" fill="#002B66" stroke="#FDE047" strokeWidth="1" />
        <text x="60" y="111" fill="#FFFFFF" fontSize="6.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
          ILMU AMAL BUDI
        </text>
      </svg>
    </div>
  );
};
