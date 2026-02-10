// import React, { useEffect, useState } from 'react';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);
//   const [isInteractive, setIsInteractive] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     const handleMouseOver = (e) => {
//       const target = e.target.closest('a, button, input, select, textarea, label, [role="button"], [tabindex]');
//       setIsInteractive(!!target);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);
//     window.addEventListener('mouseover', handleMouseOver);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       window.removeEventListener('mouseover', handleMouseOver);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed pointer-events-none z-[9999]"
//       style={{
//         left: position.x,
//         top: position.y,
//         transform: `translate(-50%, -50%)`,
//       }}
//     >
//       {isInteractive ? (
//         /* Standard hand pointer — matches OS/browser default */
//         <svg
//           width="22"
//           height="26"
//           viewBox="0 0 22 26"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             transform: `scale(${isClicking ? 0.9 : 1})`,
//             transition: 'transform 0.1s ease',
//             filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.45))',
//           }}
//         >
//           {/* Index finger */}
//           <path
//             d="M8 12V4a1.5 1.5 0 0 1 3 0v8"
//             fill="white" stroke="#1a1a1a" strokeWidth="1"
//           />
//           {/* Middle finger */}
//           <path
//             d="M11 12V5.5a1.5 1.5 0 0 1 3 0V12"
//             fill="white" stroke="#1a1a1a" strokeWidth="1"
//           />
//           {/* Ring finger */}
//           <path
//             d="M14 12V7a1.5 1.5 0 0 1 3 0v5"
//             fill="white" stroke="#1a1a1a" strokeWidth="1"
//           />
//           {/* Pinky */}
//           <path
//             d="M17 12V9a1.5 1.5 0 0 1 3 0v6c0 4-2 7-7 7s-7-3-7-7v-5a1.5 1.5 0 0 1 3 0v3"
//             fill="white" stroke="#1a1a1a" strokeWidth="1"
//           />
//           {/* Palm body fill */}
//           <path
//             d="M5 13v2c0 3.5 2 6 6 6s6-2.5 6-6v-5"
//             fill="white" stroke="none"
//           />
//           {/* Outline */}
//           <path
//             d="M6.5 10V4a1.5 1.5 0 0 1 3 0v8M9.5 12V5.5a1.5 1.5 0 0 1 3 0V12M12.5 12V7a1.5 1.5 0 0 1 3 0v5M15.5 12V9a1.5 1.5 0 0 1 3 0v6c0 4-2.5 7-7.5 7S4 19 4 15v-5a1.5 1.5 0 0 1 3 0v3"
//             fill="white" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
//           />
//         </svg>
//       ) : (
//         /* Standard arrow cursor */
//         <svg
//           width="18"
//           height="22"
//           viewBox="0 0 18 22"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{
//             transform: `scale(${isClicking ? 0.9 : 1})`,
//             transition: 'transform 0.1s ease',
//             filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.45))',
//           }}
//         >
//           <path
//             d="M1 1l6.5 16 2.5-5.5L16 9 1 1z"
//             fill="white"
//             stroke="#222"
//             strokeWidth="1.2"
//             strokeLinejoin="round"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default CustomCursor;