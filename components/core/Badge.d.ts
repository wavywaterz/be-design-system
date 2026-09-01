/** Small tinted status pill; not clickable. */
export interface BadgeProps {
  tone?: 'honey' | 'meadow' | 'clay' | 'pond' | 'neutral' | 'ink';
  children: React.ReactNode;
  style?: React.CSSProperties;
}
