import classNames from "classnames";
import * as React from "react";
import { ISelect } from "./";

const Select = (props: ISelect) => {
  const { name, defaultValue, options, handleChange, label, className } = props;

  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLInputElement;
    setSelectedValue(value);

    if (handleChange) {
      handleChange(e);
    }
  };

  const SelectBody = () => (
    <div>
      <select
        id={`select-{name}`}
        name={name}
        className={classNames(
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
          className
        )}
        defaultValue={selectedValue}
        onChange={onChange}
      >
        <option key="stock-empty-option" label="---" value="">
          -Select-
        </option>
        {options &&
          options.map(({ label, value }, index) => (
            <option key={index} label={label} value={value}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );

  if (!label) {
    return <SelectBody />;
  }

  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
      <SelectBody />
    </label>
  );
};

export default Select;
