import React from 'react';

const ServiceIcons = ({ icon, className = '' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'custom-software':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* 3D Cube with code patterns */}
            <defs>
              <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="cubeShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Top face */}
            <polygon points="32,8 56,20 32,32 8,20" fill="url(#cubeGradient)" stroke="#1e3a8a" strokeWidth="1" opacity="0.9" />
            
            {/* Right face */}
            <polygon points="56,20 56,44 32,56 32,32" fill="url(#cubeShadow)" stroke="#1e3a8a" strokeWidth="1" opacity="0.8" />
            
            {/* Left face */}
            <polygon points="8,20 32,32 32,56 8,44" fill="url(#cubeGradient)" stroke="#1e3a8a" strokeWidth="1" opacity="0.7" />
            
            {/* Code patterns on faces */}
            <g opacity="0.6">
              <rect x="20" y="16" width="8" height="2" fill="#ffffff" rx="1" />
              <rect x="20" y="20" width="12" height="2" fill="#ffffff" rx="1" />
              <rect x="20" y="24" width="6" height="2" fill="#ffffff" rx="1" />
              
              <rect x="36" y="28" width="8" height="2" fill="#ffffff" rx="1" transform="rotate(45 40 30)" />
              <rect x="36" y="32" width="10" height="2" fill="#ffffff" rx="1" transform="rotate(45 41 34)" />
              <rect x="36" y="36" width="6" height="2" fill="#ffffff" rx="1" transform="rotate(45 39 38)" />
            </g>
            
            {/* 3D highlights */}
            <path d="M32,8 L56,20 L32,32 L8,20 Z" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          </svg>
        );

      case 'web-app':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="browserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="browserShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Browser window frame */}
            <rect x="8" y="16" width="48" height="32" rx="6" fill="url(#browserGradient)" stroke="#1e3a8a" strokeWidth="2" opacity="0.9" />
            
            {/* Browser tabs */}
            <path d="M12,16 L24,12 L36,16 L48,12 L60,16" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
            
            {/* Window content - 3D grid */}
            <g opacity="0.8">
              {/* Grid lines */}
              <g stroke="#ffffff" strokeWidth="1" opacity="0.6">
                <line x1="16" y1="24" x2="48" y2="24" />
                <line x1="16" y1="32" x2="48" y2="32" />
                <line x1="16" y1="40" x2="48" y2="40" />
                <line x1="24" y1="20" x2="24" y2="48" />
                <line x1="32" y1="20" x2="32" y2="48" />
                <line x1="40" y1="20" x2="40" y2="48" />
              </g>
              
              {/* 3D blocks in grid */}
              <g fill="#ffffff" opacity="0.8">
                <rect x="20" y="22" width="4" height="4" rx="1" />
                <rect x="36" y="22" width="4" height="4" rx="1" />
                <rect x="28" y="30" width="4" height="4" rx="1" />
                <rect x="20" y="38" width="4" height="4" rx="1" />
                <rect x="44" y="38" width="4" height="4" rx="1" />
              </g>
            </g>
            
            {/* 3D perspective lines */}
            <path d="M8,16 L8,48 L60,48 L60,16" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          </svg>
        );

      case 'mobile-app':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="phoneShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Phone frame */}
            <rect x="16" y="8" width="32" height="48" rx="8" fill="url(#phoneGradient)" stroke="#1e3a8a" strokeWidth="2" opacity="0.9" />
            
            {/* Screen content - 3D app icons */}
            <g opacity="0.8">
              {/* App grid */}
              <g fill="#ffffff" opacity="0.9">
                {/* Row 1 */}
                <rect x="20" y="16" width="8" height="8" rx="2" />
                <rect x="32" y="16" width="8" height="8" rx="2" />
                
                {/* Row 2 */}
                <rect x="20" y="28" width="8" height="8" rx="2" />
                <rect x="32" y="28" width="8" height="8" rx="2" />
                
                {/* Row 3 */}
                <rect x="20" y="40" width="8" height="8" rx="2" />
                <rect x="32" y="40" width="8" height="8" rx="2" />
              </g>
              
              {/* 3D effect on icons */}
              <g stroke="#ffffff" strokeWidth="1" opacity="0.6">
                <path d="M20,16 L28,16 L28,24 L20,24 Z" fill="none" />
                <path d="M32,16 L40,16 L40,24 L32,24 Z" fill="none" />
                <path d="M20,28 L28,28 L28,36 L20,36 Z" fill="none" />
                <path d="M32,28 L40,28 L40,36 L32,36 Z" fill="none" />
                <path d="M20,40 L28,40 L28,48 L20,48 Z" fill="none" />
                <path d="M32,40 L40,40 L40,48 L32,48 Z" fill="none" />
              </g>
            </g>
            
            {/* Phone details */}
            <circle cx="32" cy="12" r="2" fill="#1e3a8a" />
            <rect x="24" y="58" width="16" height="2" rx="1" fill="#1e3a8a" />
            
            {/* 3D shadow */}
            <ellipse cx="32" cy="56" rx="16" ry="4" fill="#000000" opacity="0.3" />
          </svg>
        );

      case 'cloud':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="cloudShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Main cloud body */}
            <path d="M16,32 C16,24 24,18 32,18 C40,18 48,24 48,32 C52,32 56,36 56,40 C56,46 48,50 40,50 C32,50 24,46 24,40 C20,40 16,36 16,32 Z" 
                  fill="url(#cloudGradient)" stroke="#1e3a8a" strokeWidth="2" opacity="0.9" />
            
            {/* 3D layers within cloud */}
            <g opacity="0.7">
              <path d="M24,32 C24,28 28,26 32,26 C36,26 40,28 40,32 C42,32 44,34 44,36 C44,38 42,40 40,40 C36,40 32,38 32,36 C32,38 28,40 24,40 C22,40 20,38 20,36 C20,34 22,32 24,32 Z" 
                    fill="#ffffff" opacity="0.6" />
              
              <path d="M32,28 C32,26 34,24 36,24 C38,24 40,26 40,28 C41,28 42,29 42,30 C42,31 41,32 40,32 C38,32 36,31 36,30 C36,31 34,32 32,32 C31,32 30,31 30,30 C30,29 31,28 32,28 Z" 
                    fill="#ffffff" opacity="0.8" />
            </g>
            
            {/* Server nodes within cloud */}
            <g fill="#ffffff" opacity="0.9">
              <rect x="28" y="30" width="6" height="4" rx="1" />
              <rect x="38" y="36" width="6" height="4" rx="1" />
              <rect x="32" y="40" width="6" height="4" rx="1" />
            </g>
            
            {/* Connection lines */}
            <g stroke="#ffffff" strokeWidth="1" opacity="0.5">
              <line x1="31" y1="32" x2="37" y2="38" />
              <line x1="35" y1="34" x2="35" y2="42" />
              <line x1="39" y1="38" x2="33" y2="42" />
            </g>
            
            {/* 3D perspective lines */}
            <path d="M16,32 L24,40 L40,40 L48,32" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          </svg>
        );

      case 'security':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="shieldShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Shield shape */}
            <path d="M32,8 C44,8 54,16 54,28 C54,36 48,44 40,48 C36,50 34,52 32,52 C30,52 28,50 24,48 C16,44 10,36 10,28 C10,16 20,8 32,8 Z" 
                  fill="url(#shieldGradient)" stroke="#1e3a8a" strokeWidth="2" opacity="0.9" />
            
            {/* 3D layers within shield */}
            <g opacity="0.7">
              <path d="M32,14 C40,14 46,20 46,28 C46,34 40,40 32,40 C24,40 18,34 18,28 C18,20 24,14 32,14 Z" 
                    fill="#ffffff" opacity="0.6" />
              
              <path d="M32,20 C36,20 40,24 40,28 C40,32 36,36 32,36 C28,36 24,32 24,28 C24,24 28,20 32,20 Z" 
                    fill="#ffffff" opacity="0.8" />
            </g>
            
            {/* Lock mechanism */}
            <g fill="#ffffff" opacity="0.9">
              <rect x="28" y="24" width="8" height="8" rx="2" />
              <circle cx="32" cy="28" r="2" fill="#1e3a8a" />
              <rect x="30" y="32" width="4" height="6" rx="1" fill="#1e3a8a" />
            </g>
            
            {/* Security patterns */}
            <g stroke="#ffffff" strokeWidth="1" opacity="0.5">
              <path d="M22,22 L42,22" />
              <path d="M22,34 L42,34" />
              <path d="M26,28 L38,28" />
            </g>
            
            {/* 3D highlights */}
            <path d="M32,8 C44,8 54,16 54,28 C54,36 48,44 40,48 C36,50 34,52 32,52" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
          </svg>
        );

      case 'consulting':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="chartShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            
            {/* Chart frame */}
            <rect x="12" y="20" width="40" height="28" rx="4" fill="url(#chartGradient)" stroke="#1e3a8a" strokeWidth="2" opacity="0.9" />
            
            {/* 3D chart bars */}
            <g fill="#ffffff" opacity="0.9">
              <rect x="16" y="36" width="4" height="12" rx="1" />
              <rect x="24" y="28" width="4" height="20" rx="1" />
              <rect x="32" y="32" width="4" height="16" rx="1" />
              <rect x="40" y="24" width="4" height="24" rx="1" />
            </g>
            
            {/* Chart grid lines */}
            <g stroke="#ffffff" strokeWidth="1" opacity="0.5">
              <line x1="12" y1="24" x2="52" y2="24" />
              <line x1="12" y1="32" x2="52" y2="32" />
              <line x1="12" y1="40" x2="52" y2="40" />
              <line x1="20" y1="20" x2="20" y2="48" />
              <line x1="28" y1="20" x2="28" y2="48" />
              <line x1="36" y1="20" x2="36" y2="48" />
              <line x1="44" y1="20" x2="44" y2="48" />
            </g>
            
            {/* 3D perspective lines */}
            <path d="M12,20 L12,48 L52,48 L52,20" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            
            {/* Consulting symbols */}
            <g fill="#ffffff" opacity="0.8">
              <circle cx="20" cy="44" r="2" />
              <circle cx="28" cy="44" r="2" />
              <circle cx="36" cy="44" r="2" />
              <circle cx="44" cy="44" r="2" />
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  return <div className="flex items-center justify-center">{getIcon()}</div>;
};

export default ServiceIcons;