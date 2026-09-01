/** Pill-shaped action button. Primary (honey) for the one main action per view. */
export interface ButtonProps {
  /** Visual weight */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'inverse';
  /** Height: 32 / 40 / 48 */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Optional leading icon node (16–20px, currentColor) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}
