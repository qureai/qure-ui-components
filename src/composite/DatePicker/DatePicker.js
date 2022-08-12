import React, { useState } from "react";
import {
  DateRangePicker,
  DatePicker as ManTineDatePicker,
} from "@mantine/dates";
import classNames from "classnames";

function DatePicker(props) {
  const {
    onDateChange,
    value,
    label,
    placeholder,
    datePickerContainerClass,
    isDisabled,
    errorMessage,
    minDate,
    maxDate,
    dateFormat,
    isRange,
  } = props;

  const _onDateChange = (dates) => {
    onDateChange(dates);
  };

  if (isRange) {
    return (
      <div
        className={classNames("date-wrapper", {
          [datePickerContainerClass]: datePickerContainerClass,
        })}
      >
        <DateRangePicker
          label={label}
          placeholder={placeholder}
          value={value}
          inputFormat={dateFormat}
          minDate={minDate}
          maxDate={maxDate}
          disabled={isDisabled}
          error={errorMessage}
          onChange={_onDateChange}
        />
      </div>
    );
  }

  return (
    <ManTineDatePicker
      classNames={{
        wrapper: datePickerContainerClass,
      }}
      label={label}
      placeholder={placeholder}
      value={value}
      inputFormat={dateFormat}
      minDate={minDate}
      maxDate={maxDate}
      disabled={isDisabled}
      error={errorMessage}
      onChange={_onDateChange}
    />
  );
}

export default DatePicker;
