/** Styled native select with label / hint / error; pass <option> children. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
}
