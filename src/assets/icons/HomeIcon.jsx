
export default function HomeIcon({ size = 30, color = '#C00E11' }) {
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
      {/* Structure de la maison */}
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      {/* Porte d'entrée */}
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}