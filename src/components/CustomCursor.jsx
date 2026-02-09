import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check if element is interactive (links, buttons, inputs, etc.)
    const handleMouseOver = (e) => {
      const interactiveElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'LABEL'];
      const target = e.target.closest(interactiveElements.join(', '));
      setIsInteractive(!!target);
    };

    // Hide default cursor
    document.body.style.cursor = 'none';
    // Also hide cursor on all interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      *, *:hover, a, button, input, select, textarea, label {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'default';
      document.head.removeChild(style);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
      }}
    >
      {/* Finger cursor SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-200 ${isInteractive ? 'scale-110' : ''}`}
      >
        {/* Glow effect for interactive elements */}
        {isInteractive && (
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="url(#glowGradient)"
            opacity="0.4"
            className="animate-pulse"
          />
        )}

        {/* Hand/Finger shape */}
        <g transform="translate(6, 4)">
          {/* Thumb */}
          <path
            d="M4 12 L4 8 C4 7 4.5 6 5.5 6 C6.5 6 7 7 7 8 L7 11"
            stroke={isInteractive ? '#60a5fa' : '#cbd5e1'}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Index finger (pointing) */}
          <path
            d="M7 11 L7 3 C7 2 7.5 1 8.5 1 C9.5 1 10 2 10 3 L10 11"
            stroke={isInteractive ? '#60a5fa' : '#cbd5e1'}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill={isInteractive ? '#3b82f6' : '#94a3b8'}
          />

          {/* Middle finger */}
          <path
            d="M10 11 L10 4 C10 3 10.5 2 11.5 2 C12.5 2 13 3 13 4 L13 12"
            stroke={isInteractive ? '#60a5fa' : '#cbd5e1'}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Ring finger */}
          <path
            d="M13 12 L13 5 C13 4 13.5 3 14.5 3 C15.5 3 16 4 16 5 L16 13"
            stroke={isInteractive ? '#60a5fa' : '#cbd5e1'}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Palm */}
          <path
            d="M4 12 C4 12 4 16 5 17 C6 18 7 19 9 19 C11 19 15 19 16 18 C17 17 17 13 17 13"
            stroke={isInteractive ? '#60a5fa' : '#cbd5e1'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isInteractive ? '#3b82f6' : '#94a3b8'}
            opacity="0.9"
          />
        </g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Click ripple effect */}
      {isClicking && (
        <div
          className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"
          style={{
            width: '48px',
            height: '48px',
            left: '-8px',
            top: '-8px',
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;