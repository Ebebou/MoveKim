

export default function TruckIcon({ size = 30, color = '#C00E11' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ display: 'block' }}
    >
      {/* Remorque / Cabine */}
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      
      {/* Roues */}
      <circle cx="5.5" cy="18.5" r="2.5" fill="#111111" />
      <circle cx="18.5" cy="18.5" r="2.5" fill="#111111" />
    </svg>
  );
}