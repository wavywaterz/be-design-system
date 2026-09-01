/** Hover/focus label on an ink chip; wrap exactly one trigger. */
export interface TooltipProps {
  /** The tooltip text */
  label: string;
  side?: 'top' | 'bottom';
  children: React.ReactNode;
  style?: React.CSSProperties;
}
