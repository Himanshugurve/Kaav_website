import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { technologies } from '../data/technologies';

const tabs = [
  { key: 'ai', label: 'AI' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'database', label: 'Database' },
];

const TechIcon = ({ icon, className = '' }) => {
  const getIcon = () => {
    switch (icon) {
      case 'react':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* React — cyan atom orbits */}
            <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
            {/* Orbit 1 */}
            <ellipse cx="32" cy="32" rx="22" ry="8.5" stroke="#61DAFB" strokeWidth="2.2" fill="none" />
            {/* Orbit 2 — rotated 60° */}
            <ellipse cx="32" cy="32" rx="22" ry="8.5" stroke="#61DAFB" strokeWidth="2.2" fill="none"
              transform="rotate(60 32 32)" />
            {/* Orbit 3 — rotated 120° */}
            <ellipse cx="32" cy="32" rx="22" ry="8.5" stroke="#61DAFB" strokeWidth="2.2" fill="none"
              transform="rotate(120 32 32)" />
          </svg>
        );

      case 'nextjs':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Next.js — black circle with white N wordmark */}
            <circle cx="32" cy="32" r="26" fill="#000000" />
            {/* N letterform */}
            <path d="M20 44V20l16.5 22V20" stroke="white" strokeWidth="3.5"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M36.5 20h7" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        );

      case 'tailwind':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Tailwind CSS — two wave marks */}
            <path
              d="M16 27c2.667-10.667 8-16 16-16 8 0 12 4 12 12s-4 12-12 12c-8 0-12 4-12 12s4 12 12 12c8 0 13.333-5.333 16-16"
              stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        );

      case 'vue':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Vue.js — V chevron logo */}
            {/* Outer V */}
            <path d="M8 10l24 42L56 10H44L32 33 20 10z" fill="#42B883" />
            {/* Inner V */}
            <path d="M20 10l12 21L44 10H35L32 16l-3-6z" fill="#35495E" />
          </svg>
        );

      case 'angular':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Angular — shield with A */}
            <path d="M32 6L10 14l3.5 30L32 58l18.5-14L54 14z" fill="#DD0031" />
            <path d="M32 6v52l18.5-14L54 14z" fill="#C3002F" />
            {/* A letterform inside */}
            <path d="M32 16l-10 26h4.5l2-5.5h7l2 5.5H42z" fill="white" />
            <path d="M26.5 32.5l5.5-13.5 5.5 13.5z" fill="#DD0031" />
          </svg>
        );

      case 'typescript':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* TypeScript — blue square with TS */}
            <rect x="8" y="8" width="48" height="48" rx="6" fill="#3178C6" />
            {/* T */}
            <path d="M16 25h14M23 25v14" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            {/* S */}
            <path d="M33 38c0 0 1.5 1.5 4.5 1.5s4.5-1.5 4.5-3.5-2-3-4.5-3.5-4.5-1.5-4.5-3.5 1.5-3.5 4.5-3.5 4 1.5 4 1.5"
              stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'nodejs':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Node.js — hexagon with N */}
            <path d="M32 6L56 19.5v27L32 60 8 46.5v-27z" fill="#339933" />
            {/* N letterform */}
            <path d="M22 42V22l12 16V22" stroke="white" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="34" y1="22" x2="42" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="22" x2="42" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'spring':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Spring Boot — leaf */}
            <circle cx="32" cy="32" r="26" fill="#6DB33F" />
            <path
              d="M44 18c-6-3-14-2-18 6-3 6-2 13 2 18-4-2-8-6-9-12C17 21 24 11 35 10c4-1 7 0 9 2z"
              fill="white" opacity="0.9" />
            <path
              d="M20 46c6 3 14 2 18-6 3-6 2-13-2-18 4 2 8 6 9 12 2 9-5 19-16 20-4 1-7 0-9-2z"
              fill="white" opacity="0.7" />
            <circle cx="46" cy="18" r="3" fill="white" />
          </svg>
        );

      case 'express':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Express — dark background, wordmark style */}
            <rect x="6" y="6" width="52" height="52" rx="10" fill="#1a1a1a" />
            {/* e */}
            <path d="M13 34a6 6 0 1 1 9.5-6.5" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <line x1="13" y1="31" x2="22" y2="31" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            {/* x */}
            <line x1="25" y1="27" x2="31" y2="35" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="31" y1="27" x2="25" y2="35" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            {/* simple bar for 'press' */}
            <text x="33" y="35.5" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">press</text>
          </svg>
        );

      case 'python':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Python — two snakes / official two-tone logo */}
            {/* Blue snake (top) */}
            <path
              d="M32 8c-7 0-13 2-13 8v6h13v2H16c-4 0-8 2.5-8 8s4 8 8 8h4v-6c0-4 3-6 12-6s12 2 12 6v6h-4c-7 0-12-2-12-6"
              fill="#3776AB" />
            {/* Yellow snake (bottom) */}
            <path
              d="M32 56c7 0 13-2 13-8v-6H32v-2h16c4 0 8-2.5 8-8s-4-8-8-8h-4v6c0 4-3 6-12 6s-12-2-12-6v-6h4c7 0 12 2 12 6"
              fill="#FFD43B" />
            {/* Dots */}
            <circle cx="27" cy="16" r="2" fill="white" />
            <circle cx="37" cy="48" r="2" fill="white" />
          </svg>
        );

      case 'django':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Django — dark green square with D letterform */}
            <rect x="8" y="8" width="48" height="48" rx="8" fill="#092E20" />
            {/* D letterform stylised */}
            <rect x="20" y="17" width="5" height="30" rx="2" fill="#44B78B" />
            <path d="M25 17h8c5.5 0 10 4.5 10 10v10c0 5.5-4.5 10-10 10h-8"
              stroke="#44B78B" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'flask':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Flask — minimalist flask beaker */}
            <rect x="6" y="6" width="52" height="52" rx="8" fill="#1a1a1a" />
            {/* Flask neck */}
            <rect x="26" y="12" width="12" height="14" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
            {/* Flask body */}
            <path d="M22 26l-8 20c-1 3 1 6 4 6h28c3 0 5-3 4-6L42 26z"
              stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            {/* Liquid */}
            <path d="M18 44h28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            {/* Bubbles */}
            <circle cx="28" cy="37" r="2" fill="white" opacity="0.6" />
            <circle cx="36" cy="33" r="1.5" fill="white" opacity="0.6" />
          </svg>
        );

      case 'aws':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* AWS — smile logo */}
            {/* AWS text */}
            <text x="11" y="33" fill="#FF9900" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">AWS</text>
            {/* Arrow / smile arc */}
            <path d="M10 42c12 8 32 8 44 0" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Arrowhead */}
            <path d="M50 39l4 3-2 4" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'docker':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Docker — whale with containers */}
            {/* Containers stacked */}
            <rect x="12" y="22" width="10" height="8" rx="1.5" stroke="#2496ED" strokeWidth="2" fill="none" />
            <rect x="24" y="22" width="10" height="8" rx="1.5" stroke="#2496ED" strokeWidth="2" fill="none" />
            <rect x="36" y="22" width="10" height="8" rx="1.5" stroke="#2496ED" strokeWidth="2" fill="none" />
            <rect x="24" y="14" width="10" height="8" rx="1.5" stroke="#2496ED" strokeWidth="2" fill="none" />
            <rect x="36" y="14" width="10" height="8" rx="1.5" stroke="#2496ED" strokeWidth="2" fill="none" />
            {/* Whale body */}
            <path d="M6 34c0 0 10 2 24 2s28-2 28-2c-2 8-10 14-28 14C12 48 6 42 6 34z"
              fill="#2496ED" opacity="0.9" />
            {/* Whale tail */}
            <path d="M52 34c2-4 4-8 6-7-1 5-3 7-6 7z" fill="#2496ED" />
            {/* Spout */}
            <path d="M16 34c0-2-1-4-3-5" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'kubernetes':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Kubernetes — helm wheel / 7-spoke */}
            <circle cx="32" cy="32" r="10" stroke="#326CE5" strokeWidth="3" fill="none" />
            <circle cx="32" cy="32" r="4" fill="#326CE5" />
            {/* 7 spokes */}
            {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 32 + 10 * Math.cos(rad);
              const y1 = 32 + 10 * Math.sin(rad);
              const x2 = 32 + 24 * Math.cos(rad);
              const y2 = 32 + 24 * Math.sin(rad);
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#326CE5" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx={x2} cy={y2} r="3" fill="#326CE5" />
                </g>
              );
            })}
            {/* Outer ring */}
            <circle cx="32" cy="32" r="26" stroke="#326CE5" strokeWidth="1.5" fill="none" opacity="0.3" />
          </svg>
        );

      case 'azure':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Microsoft Azure — A triangle logo */}
            <path d="M28 10L8 54h12l8-16 12 16h12L36 28z" fill="#0078D4" />
            <path d="M36 10l4 14-16 20h20" fill="#50B5FF" opacity="0.85" />
          </svg>
        );

      case 'gcp':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Google Cloud — multi-colored cloud */}
            {/* Cloud base shape */}
            <path d="M44 38c5 0 9-4 9-9s-4-9-9-9c-1 0-2 0-3 .5C40 16 36 13 31 13c-7 0-12 5-12 12 0 .5 0 1 .1 1.5C16 27 13 30 13 34c0 4.4 3.6 8 8 8h23z"
              fill="#4285F4" />
            {/* Color segments */}
            <path d="M13 34c0 4.4 3.6 8 8 8h8V26.5A12 12 0 0 0 19 26.6C16 27 13 30 13 34z" fill="#EA4335" opacity="0.9" />
            <path d="M29 42h15c5 0 9-4 9-9s-4-9-9-9c-1 0-2 0-3 .5C40 16 36 13 31 13c-1 0-2 .1-2 .2V42z" fill="#34A853" opacity="0.9" />
            <path d="M19.1 26.5C19 27 19 27.5 19 28c0 .5 0 1 .1 1.5L29 27V13.2A12 12 0 0 0 19 26.5z" fill="#FBBC05" opacity="0.9" />
          </svg>
        );

      case 'terraform':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Terraform — three parallelogram blocks */}
            {/* Top block */}
            <path d="M30 8l18 10v11L30 19z" fill="#7B42BC" />
            {/* Bottom left block */}
            <path d="M10 19l18 10v22L10 41z" fill="#7B42BC" opacity="0.7" />
            {/* Bottom right block */}
            <path d="M30 29l18 10v16L30 45z" fill="#7B42BC" opacity="0.9" />
          </svg>
        );

      case 'postgresql':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* PostgreSQL — elephant head */}
            {/* Head */}
            <ellipse cx="31" cy="30" rx="16" ry="18" fill="#336791" />
            {/* Ear */}
            <ellipse cx="47" cy="25" rx="6" ry="9" fill="#336791" stroke="#224d6e" strokeWidth="1" />
            {/* Eye */}
            <circle cx="36" cy="24" r="2.5" fill="white" />
            <circle cx="36.5" cy="24.5" r="1.2" fill="#1a2e3d" />
            {/* Tusk */}
            <path d="M26 42c-2 4-3 8-1 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* Trunk */}
            <path d="M17 36c-4 4-5 8-3 12 1 3 4 4 6 2" stroke="#224d6e" strokeWidth="3"
              strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'mongodb':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* MongoDB — leaf */}
            <path
              d="M32 6c0 0-16 18-16 32a16 16 0 0 0 14 15.8V46s-6-2-6-14c0-8 8-22 8-22z"
              fill="#47A841" />
            <path
              d="M32 6c0 0 16 18 16 32a16 16 0 0 1-14 15.8V46s6-2 6-14c0-8-8-22-8-22z"
              fill="#47A841" opacity="0.7" />
            {/* Stem */}
            <line x1="32" y1="53" x2="32" y2="60" stroke="#47A841" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'mysql':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* MySQL — dolphin */}
            {/* Body */}
            <path d="M16 38c0 0 4-16 20-22 12-4 18 2 18 10 0 10-12 16-20 14"
              stroke="#4479A1" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Tail */}
            <path d="M16 38l-6-4 2-8" stroke="#4479A1" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Fin */}
            <path d="M32 16c2-4 6-8 10-8-2 4-4 8-4 14" stroke="#4479A1" strokeWidth="2.5"
              strokeLinecap="round" fill="none" />
            {/* Eye */}
            <circle cx="46" cy="26" r="2.5" fill="#4479A1" />
            <circle cx="46" cy="26" r="1" fill="white" />
            {/* MY text */}
            <text x="12" y="56" fill="#4479A1" fontSize="10" fontWeight="bold" fontFamily="Arial">MySQL</text>
          </svg>
        );

      case 'redis':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Redis — stacked discs / cube */}
            {/* Top ellipse */}
            <ellipse cx="32" cy="20" rx="22" ry="8" fill="#DC382D" />
            {/* Middle band */}
            <rect x="10" y="20" width="44" height="14" fill="#A52222" />
            {/* Bottom ellipse */}
            <ellipse cx="32" cy="34" rx="22" ry="8" fill="#DC382D" />
            {/* Second disc */}
            <ellipse cx="32" cy="42" rx="22" ry="8" fill="#A52222" />
            <rect x="10" y="42" width="44" height="8" fill="#8B1A1A" />
            <ellipse cx="32" cy="50" rx="22" ry="8" fill="#DC382D" opacity="0.85" />
            {/* Shine */}
            <ellipse cx="26" cy="19" rx="8" ry="3" fill="white" opacity="0.15" />
          </svg>
        );

      case 'elasticsearch':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Elasticsearch — magnifying glass + E */}
            <circle cx="28" cy="28" r="16" stroke="#005571" strokeWidth="3.5" fill="none" />
            <circle cx="28" cy="28" r="10" fill="#FEC514" opacity="0.9" />
            {/* E lines */}
            <line x1="22" y1="24" x2="34" y2="24" stroke="#005571" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="28" x2="32" y2="28" stroke="#005571" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="32" x2="34" y2="32" stroke="#005571" strokeWidth="2.5" strokeLinecap="round" />
            {/* Handle */}
            <line x1="40" y1="40" x2="54" y2="54" stroke="#005571" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );

      case 'firebase':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Firebase — flame logo */}
            {/* Left flame */}
            <path d="M18 52L12 24l10 8z" fill="#FFA000" />
            {/* Middle flame */}
            <path d="M18 52L28 10l8 18z" fill="#F57C00" />
            {/* Right flame */}
            <path d="M18 52l18-14 12-24-8 14z" fill="#FFCA28" />
            {/* Base */}
            <path d="M12 24l6 28h24l4-28-16 14z" fill="#FFA000" opacity="0.85" />
            {/* Bright center */}
            <path d="M28 10l8 18-10 8 6 16h12l4-28z" fill="#FFCA28" opacity="0.9" />
          </svg>
        );

      case 'llm':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Neural network nodes */}
            <circle cx="12" cy="20" r="5" fill="#A78BFA" />
            <circle cx="12" cy="44" r="5" fill="#A78BFA" />
            <circle cx="32" cy="12" r="5" fill="#818CF8" />
            <circle cx="32" cy="32" r="6" fill="#6366F1" />
            <circle cx="32" cy="52" r="5" fill="#818CF8" />
            <circle cx="52" cy="20" r="5" fill="#A78BFA" />
            <circle cx="52" cy="44" r="5" fill="#A78BFA" />
            {/* Connections */}
            <line x1="17" y1="20" x2="27" y2="14" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="17" y1="20" x2="26" y2="32" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="17" y1="44" x2="26" y2="32" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="17" y1="44" x2="27" y2="50" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="38" y1="14" x2="47" y2="20" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="38" y1="32" x2="47" y2="20" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="38" y1="32" x2="47" y2="44" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            <line x1="38" y1="50" x2="47" y2="44" stroke="#818CF8" strokeWidth="1.5" opacity="0.7" />
            {/* Pulse ring */}
            <circle cx="32" cy="32" r="12" stroke="#6366F1" strokeWidth="1" opacity="0.3" fill="none" />
          </svg>
        );

      case 'agentic':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Agent head */}
            <rect x="18" y="10" width="28" height="24" rx="8" fill="#6366F1" />
            {/* Eyes */}
            <circle cx="26" cy="22" r="3.5" fill="white" />
            <circle cx="38" cy="22" r="3.5" fill="white" />
            <circle cx="27" cy="22" r="1.5" fill="#1e1b4b" />
            <circle cx="39" cy="22" r="1.5" fill="#1e1b4b" />
            {/* Antenna */}
            <line x1="32" y1="10" x2="32" y2="4" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="3" r="2" fill="#A78BFA" />
            {/* Body */}
            <rect x="22" y="36" width="20" height="16" rx="4" fill="#4F46E5" />
            {/* Arms */}
            <rect x="10" y="37" width="10" height="6" rx="3" fill="#6366F1" />
            <rect x="44" y="37" width="10" height="6" rx="3" fill="#6366F1" />
            {/* Chest light */}
            <circle cx="32" cy="44" r="3" fill="#818CF8" opacity="0.8" />
          </svg>
        );

      case 'aiworkflow':
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            {/* Pipeline nodes */}
            <rect x="4" y="26" width="14" height="12" rx="4" fill="#6366F1" />
            <rect x="25" y="26" width="14" height="12" rx="4" fill="#8B5CF6" />
            <rect x="46" y="26" width="14" height="12" rx="4" fill="#A78BFA" />
            {/* Connecting arrows */}
            <path d="M18 32h7" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
            <path d="M23 29l2 3-2 3" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39 32h7" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 29l2 3-2 3" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Top branch */}
            <rect x="25" y="8" width="14" height="10" rx="3" fill="#4F46E5" opacity="0.85" />
            <line x1="32" y1="18" x2="32" y2="26" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
            {/* Bottom branch */}
            <rect x="25" y="46" width="14" height="10" rx="3" fill="#4F46E5" opacity="0.85" />
            <line x1="32" y1="38" x2="32" y2="46" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
            {/* Spark / AI indicator */}
            <circle cx="11" cy="32" r="2" fill="white" opacity="0.8" />
            <circle cx="32" cy="32" r="2" fill="white" opacity="0.8" />
            <circle cx="53" cy="32" r="2" fill="white" opacity="0.8" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 64 64" className={`w-full h-full ${className}`} fill="none">
            <circle cx="32" cy="32" r="24" fill="#64748B" opacity="0.8" />
            <text x="32" y="36" textAnchor="middle" fill="white" fontSize="16"
              fontWeight="bold" fontFamily="Arial, sans-serif">?</text>
          </svg>
        );
    }
  };

  return <div className="flex items-center justify-center">{getIcon()}</div>;
};

const ParticleBackground = ({ isActive }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !isAutoScrolling) return;

    const techCount = technologies[activeTab].length;

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % techCount;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [activeTab, isAutoScrolling, isMobile]);

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / technologies[activeTab].length;
    const scrollPosition = cardWidth * index;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    const techCount = technologies[activeTab].length;
    const newIndex = currentIndex === 0 ? techCount - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    const techCount = technologies[activeTab].length;
    const newIndex = (currentIndex + 1) % techCount;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentIndex(0);
    setIsAutoScrolling(true);
  };

  return (
    <section
      id="technologies"
      className="w-full scroll-mt-24 border-y border-white/5 bg-slate-950/40 py-12 sm:py-16 md:py-20 backdrop-blur-md"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Technologies
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            Cutting-Edge Tech Stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg px-4">
            Explore the technologies we use to build scalable, secure, and
            future-ready digital products.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-3 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`rounded-full px-3 sm:px-4 md:px-5 py-1.5 md:py-2 text-xs font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all duration-300
                ${activeTab === tab.key
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 scale-105'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400/50 hover:bg-white/10'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative mt-8 md:mt-12">
          {/* Mobile Navigation Arrows */}
          {isMobile && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-500/90 hover:bg-indigo-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-indigo-500/90 hover:bg-indigo-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Mobile: Horizontal Scroll */}
              <div
                ref={scrollContainerRef}
                className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onTouchStart={() => setIsAutoScrolling(false)}
                onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 5000)}
              >
                {technologies[activeTab].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
                    whileHover={{ y: -6 }}
                  >
                    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-6 shadow-lg shadow-black/20 transition h-full">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <ParticleBackground isActive={true} />
                      </div>
                      <div className="relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-all duration-500 group-hover:scale-110 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
                          <TechIcon icon={tech.icon} className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                          {tech.name}
                        </h3>
                        <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-3">
                          {tech.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <span className="text-xs text-indigo-300 opacity-0 transition group-hover:opacity-100">
                            Documentation →
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop/Tablet: Grid Layout */}
              <div className="hidden lg:grid gap-4 xl:gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {technologies[activeTab].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20 transition"
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <ParticleBackground isActive={true} />
                    </div>
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-all duration-500 group-hover:scale-110 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
                        <TechIcon icon={tech.icon} className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {tech.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs text-indigo-300 opacity-0 transition group-hover:opacity-100">
                          Documentation →
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Scroll Indicators */}
              {isMobile && (
                <div className="flex justify-center gap-2 mt-6">
                  {technologies[activeTab].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        scrollToIndex(index);
                        setIsAutoScrolling(false);
                        setTimeout(() => setIsAutoScrolling(true), 5000);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'w-8 bg-indigo-500'
                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Technologies;