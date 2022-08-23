import React, { useState } from "react";
import DatePicker from "./DatePicker";

export default {
  title: "Composite/DatePicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

const HOCDatePicker = (props) => {
  const { initialValue, children } = props;
  const [value, setValue] = useState(initialValue);

  const onDateChange = (_value) => {
    setValue(_value);
  };
  return children(value, onDateChange);
};

export const SimpleDatePicker = () => {
  return (
    <HOCDatePicker initialValue={new Date()}>
      {(value, onDateChange) => {
        return <DatePicker value={value} onDateChange={onDateChange} />;
      }}
    </HOCDatePicker>
  );
};

export const DateRangePicker = () => {
  return (
    <HOCDatePicker
      initialValue={[new Date(2021, 11, 1), new Date(2021, 11, 5)]}
    >
      {(value, onDateChange) => (
        <DatePicker value={value} isRange onDateChange={onDateChange} />
      )}
    </HOCDatePicker>
  );
};

export const withDisabledState = () => {
  return (
    <HOCDatePicker initialValue={new Date()}>
      {(value, onDateChange) => {
        return (
          <DatePicker value={value} isDisabled onDateChange={onDateChange} />
        );
      }}
    </HOCDatePicker>
  );
};

export const withChangedLables = () => {
  return (
    <>
      <h2 className="">with header label and placeholder text</h2>
      <HOCDatePicker>
        {(value, onDateChange) => {
          return (
            <DatePicker
              value={value}
              label="Datepicker label"
              placeholder="If no date is selected then use this.."
              onDateChange={onDateChange}
            />
          );
        }}
      </HOCDatePicker>
      <h2 className="">For error message</h2>
      <HOCDatePicker>
        {(value, onDateChange) => {
          return (
            <DatePicker
              value={value}
              isDisabled
              errorMessage="If something happens, show this error"
              onDateChange={onDateChange}
            />
          );
        }}
      </HOCDatePicker>
    </>
  );
};
