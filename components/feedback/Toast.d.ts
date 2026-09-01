/** Ink snackbar with tone dot; app controls placement/timing. */
export interface ToastProps {
  tone?: 'honey' | 'success' | 'danger' | 'info';
  title?: string;
  children?: React.ReactNode;
  /** Shows the × when provided */
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
