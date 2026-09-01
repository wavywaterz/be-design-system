/** Surface container, 20px radius. */
export interface CardProps {
  variant?: 'default' | 'tint' | 'inverse' | 'outline';
  /** CSS padding value (default 24) */
  padding?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
