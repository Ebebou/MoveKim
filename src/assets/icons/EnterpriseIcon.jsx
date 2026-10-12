export default function EnterpriseIcon({ 
size = 20, 
  color = '#C00E11', 
  strokeWidth = 2.5,  
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
{/* Immeuble principal / Tour de bureaux */}
      <rect x="4" y="2" width="16" height="20" rx="2" />
      
      {/* Fenêtres bureau */}
      <line x1="8" y1="6" x2="10" y2="6" />
      <line x1="14" y1="6" x2="16" y2="6" />
      
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
      
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="16" y2="14" />
      
      {/* Porte d'entrée de l'entreprise */}
      <path d="M10 22v-4h4v4" />

    </svg>
  );
}