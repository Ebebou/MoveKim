

export default function DeliverySpeedIcon({ 
  size = 32, 
  color = '#C00E11', 
  strokeWidth = 2, 

}) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ display: 'block' }}
    >
      {/* Cadran du chronomètre */}
      <path d="M10 2h4" />
      <path d="M12 14l3-3" />
      <path d="M19 13a7 7 0 1 0-13 4" />
      
      {/* Traits de vitesse express */}
      <line x1="2" y1="9" x2="6" y2="9" />
      <line x1="1" y1="13" x2="4" y2="13" />
      <line x1="3" y1="17" x2="6" y2="17" />
    </svg>
  );
}