/** Controlled checkbox; honey fill with ink check when on. */
export interface CheckboxProps {
  checked?: boolean;
  /** Receives the next boolean */
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
