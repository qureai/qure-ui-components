export interface ITextBox {
  noLabel: boolean;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}
