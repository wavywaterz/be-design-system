/** Single radio; group by `name`, `onChange` receives this radio's `value`. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: any) => void;
  label?: React.ReactNode;
  name?: string;
  value?: any;
  disabled?: boolean;
  style?: React.CSSProperties;
}
