/** Modal dialog; serif title, 28px radius, warm dim + blur overlay. Esc and backdrop close. Focus moves into the dialog on open, is trapped inside (Tab wraps), and returns to the opener on close. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  /** Right-aligned action row */
  footer?: React.ReactNode;
  /** Max width in px (default 480) */
  width?: number;
  style?: React.CSSProperties;
}
