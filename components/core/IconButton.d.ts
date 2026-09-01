/** Circular icon-only button; always pass `label` for accessibility. */
export interface IconButtonProps {
  variant?: 'solid' | 'soft' | 'ghost' | 'outline';
  /** Diameter: 28 / 36 / 44 */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Accessible name (required) */
  label: string;
  /** The icon node, 16–20px, currentColor */
  children: React.ReactNode;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}
