/** Single-line text field with label, hint, and error states. */
export interface InputProps {
  label?: string;
  /** Helper line under the field */
  hint?: string;
  /** Error message; replaces hint and turns the border clay */
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
