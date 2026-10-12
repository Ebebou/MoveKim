
export default function PackageIcon({ size = 30, color = '#C00E11' }) {
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
      {/* Perspective 3D du carton */}
      <path d="M16.5 9.4L7.55 4.24a2 2 0 0 0-1.9 0l-3.25 1.87a2 2 0 0 0-1 1.73v7.32a2 2 0 0 0 1 1.73l9 5.2a2 2 0 0 0 1.9 0l9-5.2a2 2 0 0 0 1-1.73V7.84a2 2 0 0 0-1-1.73l-3.25-1.87a2 2 0 0 0-1.9 0z" />
      
      {/* Lignes de fermeture du colis */}
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}