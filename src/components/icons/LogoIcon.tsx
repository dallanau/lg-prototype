import React from 'react';
import { colors } from '../../styles/theme';

const LogoIcon: React.FC = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base circle for modern look */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="white"
        stroke={colors.primary}
        strokeWidth="2"
      />

      {/* Meridian arc for global reach */}
      <path
        d="M16 6C20.4183 6 24 9.58172 24 14C24 18.4183 20.4183 22 16 22"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letters L and G */}
      <path
        d="M12 11V18H15"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14.5C19 13.1193 17.8807 12 16.5 12C15.1193 12 14 13.1193 14 14.5V15.5C14 16.8807 15.1193 18 16.5 18H17"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Wing element for logistics */}
      <path
        d="M8 16L16 13L24 16"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* Star element for excellence */}
      <path
        d="M16 4L16.4755 5.19577L17.6574 5.09549L16.9389 6.05423L17.4577 7.19577L16.3106 6.65423L15.1634 7.19577L15.6823 6.05423L14.9637 5.09549L16.1456 5.19577L16 4Z"
        fill={colors.primary}
      />

      {/* Dynamic arrow for forward movement */}
      <path
        d="M26 16L24 14M26 16L24 18M26 16H22"
        stroke={colors.primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon; 