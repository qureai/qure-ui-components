export default interface ISelect {
  name: string;
  noLabel: boolean;
  defaultValue: string | number;
  options: { label: string; value: string | number }[];
  handleChange: (value: string | number) => void;
}
