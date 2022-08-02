import * as React from "react";
import { ISelect } from "./Select.model";

const Select = (props: ISelect) => {
  const { noLabel, name, defaultValue, options, handleChange } = props;

  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
    handleChange(value);
  };

  const SelectBody = () => (
    <div>
      <select
        id={`select-{name}`}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map(({ label, value }, index) => (
          <option key={index} label={label}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );

  if (noLabel) {
    return <SelectBody />;
  }

  return (
    <label>
      <SelectBody />
    </label>
  );
};

export default Select;
