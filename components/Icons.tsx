

import React from 'react';

const iconProps = {
  className: "w-8 h-8 sm:w-10 sm:h-10",
  strokeWidth: 2,
  fill: "none",
};

const smallIconProps = {
    className: "w-5 h-5 sm:w-6 sm:h-6",
    strokeWidth: 2
};

// --- Topic Icons (3D Style) ---
const shadowTranslate = "translate(0.5, 0.5)";

// Fix: Define a type for icon props to allow className to be passed.
type IconProps = React.SVGProps<SVGSVGElement>;

export const PercentageIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#6d28d9" strokeLinecap="round" strokeLinejoin="round" d="M8 7a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0zM5 19L19 5" />
    <path stroke="#8b5cf6" strokeLinecap="round" strokeLinejoin="round" d="M8 7a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0zM5 19L19 5" />
  </svg>
);
export const RatioIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#0891b2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 12a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6z" />
    <path stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 12a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);
export const InterestIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <g transform={shadowTranslate} stroke="#9333ea">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </g>
    <g stroke="#a855f7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </g>
  </svg>
);
export const ProfitLossIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#0f766e" strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    <path stroke="#14b8a6" strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
export const TimeWorkIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#c026d3" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path stroke="#d946ef" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
export const SpeedIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#db2777" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path stroke="#ec4899" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
export const AverageIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#475569" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h18M3 14h18M3 18h18" />
    <path stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h18M3 14h18M3 18h18" />
  </svg>
);
export const AreaVolumeIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#0e7490" strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l9-5.25" />
    <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l9-5.25" />
  </svg>
);
export const PerimeterIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#5b21b6" strokeLinecap="round" strokeLinejoin="round" d="M3 7l0 10c0 1.1.9 2 2 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
    <path stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" d="M3 7l0 10c0 1.1.9 2 2 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
  </svg>
);
export const AlgebraIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#be185d" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    <path stroke="#ec4899" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
export const APIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#047857" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    <path stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
export const ExponentIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#475569" strokeLinecap="round" strokeLinejoin="round" d="M4 12h2l3-8 3 14h10" />
    <path stroke="#94a3b8" strokeLinecap="round" strokeLinejoin="round" d="M4 12h2l3-8 3 14h10" />
  </svg>
);
export const GPIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#0e7490" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);
export const NumberSystemIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6m-8 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    <path stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6m-8 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
export const LcmHcfIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#a21caf" strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    <path stroke="#d946ef" strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);
export const ProbabilityIcon = (props: IconProps) => (
  <svg {...iconProps} {...props} viewBox="0 0 24 24">
    <path transform={shadowTranslate} stroke="#059669" strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.879l-2.828-2.828M12 21a9 9 0 110-18 9 9 0 010 18z" />
    <path stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" d="M14.121 15.879l-2.828-2.828M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

export const IncreaseDecreaseIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
      <path transform={shadowTranslate} stroke="#0f766e" strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5M7 13l5 5 5-5" />
      <path stroke="#14b8a6" strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5M7 13l5 5 5-5" />
    </svg>
);

export const DiscountIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
      <path transform={shadowTranslate} stroke="#be123c" strokeLinecap="round" strokeLinejoin="round" d="M12.25 2.25l8.5 8.5a3.5 3.5 0 010 4.95l-8.5 8.5a1.5 1.5 0 01-2.12 0l-8.5-8.5a3.5 3.5 0 010-4.95l8.5-8.5a1.5 1.5 0 012.12 0zM8.25 8.25h.01" />
      <path stroke="#f43f5e" strokeLinecap="round" strokeLinejoin="round" d="M12.25 2.25l8.5 8.5a3.5 3.5 0 010 4.95l-8.5 8.5a1.5 1.5 0 01-2.12 0l-8.5-8.5a3.5 3.5 0 010-4.95l8.5-8.5a1.5 1.5 0 012.12 0zM8.25 8.25h.01" />
    </svg>
);

export const ExamIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
      <path transform={shadowTranslate} stroke="#0d9488" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      <path stroke="#2dd4bf" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const MixtureIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#0891b2" strokeLinecap="round" strokeLinejoin="round" d="M7 3h10l-4 8v6h-2v-6L7 3z" />
        <path transform={shadowTranslate} stroke="#0891b2" strokeLinecap="round" strokeLinejoin="round" d="M7 13h10" />
        <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M7 3h10l-4 8v6h-2v-6L7 3z" />
        <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M7 13h10" />
    </svg>
);

export const ComparisonIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
      <path transform={shadowTranslate} stroke="#5b21b6" strokeLinecap="round" strokeLinejoin="round" d="M16 8v11m-4-4v4m-4-8v8M4 21h16" />
      <path stroke="#7c3aed" strokeLinecap="round" strokeLinejoin="round" d="M16 8v11m-4-4v4m-4-8v8M4 21h16" />
    </svg>
);

export const WagesIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#047857" strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-6 4h6m-6-8v12m4-8H7" />
        <path stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-6 4h6m-6-8v12m4-8H7" />
    </svg>
);

export const PipeIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#0e7490" strokeLinecap="round" strokeLinejoin="round" d="M4 4v6a2 2 0 002 2h12a2 2 0 002-2V4m-8 12v4m0-4a2 2 0 100-4 2 2 0 000 4z" />
        <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M4 4v6a2 2 0 002 2h12a2 2 0 002-2V4m-8 12v4m0-4a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

export const TrainIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="12" rx="2" transform={shadowTranslate} stroke="#475569" />
        <path transform={shadowTranslate} stroke="#475569" strokeLinecap="round" d="M5 17h14m-12 4h10m-8-12h6" />
        <rect x="5" y="5" width="14" height="12" rx="2" stroke="#64748b" />
        <path stroke="#64748b" strokeLinecap="round" d="M5 17h14m-12 4h10m-8-12h6" />
    </svg>
);

export const BoatIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#0891b2" strokeLinecap="round" strokeLinejoin="round" d="M3 15l2 4h14l2-4H3zm3-3l6-8 6 8H6z" />
        <path transform={shadowTranslate} stroke="#0891b2" d="M4 19h16" />
        <path stroke="#22d3ee" strokeLinecap="round" strokeLinejoin="round" d="M3 15l2 4h14l2-4H3zm3-3l6-8 6 8H6z" />
        <path stroke="#22d3ee" d="M4 19h16" />
    </svg>
);

export const ConversionIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#4f46e5" strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        <path stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);

export const TriangleIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#c026d3" strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 21h20L12 2z" />
        <path stroke="#d946ef" strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 21h20L12 2z" />
    </svg>
);

export const SphereIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <circle cx="12.5" cy="12.5" r="9" transform={shadowTranslate} stroke="#0e7490"/>
        <path d="M16 7 A 10 10 0 0 0 9 18" transform={shadowTranslate} stroke="#0e7490"/>
        <circle cx="12" cy="12" r="9" stroke="#06b6d4"/>
        <path d="M15.5 6.5 A 10 10 0 0 0 8.5 17.5" stroke="#06b6d4"/>
    </svg>
);

export const CylinderConeIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <path transform={shadowTranslate} stroke="#0e7490" strokeLinecap="round" strokeLinejoin="round" d="M8 10v10m0-10c0-2.21 1.79-4 4-4s4 1.79-4 4v10c0-2.21-1.79-4-4-4s-4 1.79-4 4z M16 20a4 2 0 10-8 0 4 2 0 008 0z" />
        <path transform={shadowTranslate} stroke="#0e7490" strokeLinecap="round" strokeLinejoin="round" d="M18 10L12 2l-6 8" />
        <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M8 10v10m0-10c0-2.21 1.79-4 4-4s4 1.79-4 4v10c0-2.21-1.79-4-4-4s-4 1.79-4 4z M16 20a4 2 0 10-8 0 4 2 0 008 0z" />
        <path stroke="#06b6d4" strokeLinecap="round" strokeLinejoin="round" d="M18 10L12 2l-6 8" />
    </svg>
);

export const SetTheoryIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <circle cx="10" cy="12.5" r="5.5" transform={shadowTranslate} stroke="#1e3a8a"/>
        <circle cx="15" cy="12.5" r="5.5" transform={shadowTranslate} stroke="#1e3a8a"/>
        <circle cx="9.5" cy="12" r="5.5" stroke="#3b82f6"/>
        <circle cx="14.5" cy="12" r="5.5" stroke="#3b82f6"/>
    </svg>
);

export const CoinIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <circle cx="12.5" cy="12.5" r="8" transform={shadowTranslate} stroke="#a16207"/>
        <path transform={shadowTranslate} stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" d="M12.5 7.5v10m-3-7l6 4m-6-1l6-4" />
        <circle cx="12" cy="12" r="8" stroke="#ca8a04"/>
        <path stroke="#ca8a04" strokeLinecap="round" strokeLinejoin="round" d="M12 7v10m-3-7l6 4m-6-1l6-4" />
    </svg>
);

export const DiceIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <rect x="4.5" y="4.5" width="16" height="16" rx="2" transform={shadowTranslate} stroke="#059669"/>
        <circle cx="9.5" cy="9.5" r="1.5" transform={shadowTranslate} fill="#059669" stroke="none"/>
        <circle cx="15.5" cy="15.5" r="1.5" transform={shadowTranslate} fill="#059669" stroke="none"/>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#10b981"/>
        <circle cx="9" cy="9" r="1.5" fill="#10b981" stroke="none"/>
        <circle cx="15" cy="15" r="1.5" fill="#10b981" stroke="none"/>
    </svg>
);

export const CardsIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <rect x="4.5" y="6.5" width="12" height="14" rx="2" transform={shadowTranslate} stroke="#059669"/>
        <path transform={shadowTranslate} stroke="#059669" d="M8.5 4.5h10a2 2 0 012 2v12a2 2 0 01-2 2h-1" />
        <rect x="4" y="6" width="12" height="14" rx="2" stroke="#10b981"/>
        <path stroke="#10b981" d="M8 4h10a2 2 0 012 2v12a2 2 0 01-2 2h-1" />
    </svg>
);

export const BallsIcon = (props: IconProps) => (
    <svg {...iconProps} {...props} viewBox="0 0 24 24">
        <circle cx="8.5" cy="16.5" r="4" transform={shadowTranslate} stroke="#1d4ed8"/>
        <circle cx="16.5" cy="16.5" r="4" transform={shadowTranslate} stroke="#0891b2"/>
        <circle cx="12.5" cy="8.5" r="4" transform={shadowTranslate} stroke="#be185d"/>
        <circle cx="8" cy="16" r="4" stroke="#3b82f6"/>
        <circle cx="16" cy="16" r="4" stroke="#22d3ee"/>
        <circle cx="12" cy="8" r="4" stroke="#ec4899"/>
    </svg>
);

export const AppLogoIcon = (props: IconProps) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      {/* Gradients for spheres */}
      <radialGradient id="grad-plus" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#ff9a8b" />
        <stop offset="100%" stopColor="#ff5252" />
      </radialGradient>
      <radialGradient id="grad-multiply" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#84ffff" />
        <stop offset="100%" stopColor="#00e5ff" />
      </radialGradient>
      <radialGradient id="grad-divide" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#ffab91" />
        <stop offset="100%" stopColor="#f4511e" />
      </radialGradient>
      <radialGradient id="grad-equals" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#ffff8d" />
        <stop offset="100%" stopColor="#ffc400" />
      </radialGradient>
      <radialGradient id="grad-percent" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#80d8ff" />
        <stop offset="100%" stopColor="#0091ea" />
      </radialGradient>
      <radialGradient id="grad-minus" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#82f7ff" />
        <stop offset="100%" stopColor="#00b0ff" />
      </radialGradient>
      
      {/* Gradient for pipes */}
      <linearGradient id="pipe-grad" gradientTransform="rotate(45)">
        <stop offset="0%" stopColor="#80D8FF" opacity="0.7" />
        <stop offset="100%" stopColor="#E040FB" opacity="0.7" />
      </linearGradient>

      {/* Filter for symbols */}
      <filter id="symbol-shadow">
        <feDropShadow dx="0.3" dy="0.3" stdDeviation="0.3" floodColor="#000" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Connecting Pipes */}
    <g stroke="url(#pipe-grad)" strokeWidth="6" strokeLinecap="round">
      <line x1="60" y1="18" x2="25" y2="38" />
      <line x1="60" y1="18" x2="50" y2="50" />
      <line x1="60" y1="18" x2="85" y2="52" />
      <line x1="25" y1="38" x2="50" y2="50" />
      <line x1="25" y1="38" x2="30" y2="78" />
      <line x1="50" y1="50" x2="85" y2="52" />
      <line x1="50" y1="50" x2="30" y2="78" />
      <line x1="50" y1="50" x2="60" y2="85" />
      <line x1="85" y1="52" x2="60" y2="85" />
      <line x1="30" y1="78" x2="60" y2="85" />
    </g>

    <g style={{filter: 'drop-shadow(2px 3px 2px rgb(0 0 0 / 0.25))'}}>
      {/* Plus */}
      <circle cx="60" cy="18" r="13" fill="url(#grad-plus)" />
      <circle cx="60" cy="18" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <text x="60" y="22" fontFamily="Verdana, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" filter="url(#symbol-shadow)">+</text>

      {/* Multiply */}
      <circle cx="25" cy="38" r="13" fill="url(#grad-multiply)" />
      <circle cx="25" cy="38" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <text x="25" y="43" fontFamily="Verdana, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle" filter="url(#symbol-shadow)">×</text>

      {/* Divide */}
      <circle cx="50" cy="50" r="13" fill="url(#grad-divide)" />
      <circle cx="50" cy="50" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <g fill="white" filter="url(#symbol-shadow)">
        <circle cx="50" cy="46" r="1.8" />
        <rect x="44" y="49" width="12" height="2.5" rx="1"/>
        <circle cx="50" cy="54" r="1.8" />
      </g>

      {/* Equals */}
      <circle cx="85" cy="52" r="13" fill="url(#grad-equals)" />
      <circle cx="85" cy="52" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <g fill="white" filter="url(#symbol-shadow)">
        <rect x="79" y="48.5" width="12" height="2.5" rx="1"/>
        <rect x="79" y="53.5" width="12" height="2.5" rx="1"/>
      </g>

      {/* Percent */}
      <circle cx="30" cy="78" r="13" fill="url(#grad-percent)" />
      <circle cx="30" cy="78" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <g fill="white" filter="url(#symbol-shadow)">
        <circle cx="27" cy="75" r="2" />
        <circle cx="33" cy="81" r="2" />
        <line x1="26" y1="82" x2="34" y2="74" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      
      {/* Minus */}
      <circle cx="60" cy="85" r="13" fill="url(#grad-minus)" />
      <circle cx="60" cy="85" r="12.5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <g fill="white" filter="url(#symbol-shadow)">
        <rect x="54" y="84" width="12" height="2.5" rx="1"/>
      </g>
    </g>
  </svg>
);


// --- UI Icons (Standard) ---
export const SunIcon = () => <svg {...smallIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
export const MoonIcon = () => <svg {...smallIconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
export const BackArrowIcon = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
export const HomeIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
export const CameraIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const HistoryIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const ShareIcon = (props: IconProps) => (
  <svg {...smallIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);
export const TrashIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
export const ChevronDownIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;
export const FireIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /></svg>;
export const TrophyIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-4l-3-3-3 3zM9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" /></svg>;
export const CalendarIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
export const ClockIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const CheckIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
export const CrossIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
export const UploadIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
export const SearchIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
export const MicrophoneIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
export const VideoIcon = (props: IconProps) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-4.5-3v6L15 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>;
export const BrainIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"></path><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"></path><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-1.5"></path><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h1.5"></path><path d="M16 5.5a3.5 3.5 0 0 0 -3.5 3.5v2.5h4a3.5 3.5 0 0 0 0 -7h-1.5"></path><path d="M8 5.5a3.5 3.5 0 0 1 3.5 3.5v2.5h-4a3.5 3.5 0 0 1 0 -7h1.5"></path></svg>;
export const LightbulbIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
export const ChartBarIcon = (props: IconProps) => <svg {...smallIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
