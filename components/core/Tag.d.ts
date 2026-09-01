/** Removable chip for filters and user-added labels. */
export interface TagProps {
  /** When set, renders the remove (×) affordance */
  onRemove?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
