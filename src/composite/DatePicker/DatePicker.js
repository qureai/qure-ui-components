import React, {useState} from 'react';
import {DateRangePicker, DatePicker} from '@mantine/dates';
import classNames from "classnames";

function DatePicker(props) {
  const {
    onDateChange, label, placeholder, datePickerContainerClass, className,
    isDisabled,
    errorMessage,
    minDate, maxDate, dateFormat, isRange
  } = props
  const [value, setValue] = useState([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  const onDateChange1 = (dates) => {
    setValue(dates)
    onDateChange(dates)
  }

  if(isRange) {
    return (
      <div className={classNames('date-wrapper', {[datePickerContainerClass]: datePickerContainerClass})}>
        <DateRangePicker
          label={label}
          placeholder={placeholder}
          value={value}
          inputFormat={dateFormat}
          minDate={minDate}
          maxDate={maxDate}
          disabled={isDisabled}
          error={errorMessage}
          onChange={onDateChange1}
        />
      </div>
    )
  }

  return (
      <DatePicker
        classNames={{
          wrapper: datePickerContainerClass
        }}
        label={label}
        placeholder={placeholder}
        value={value}
        inputFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
        disabled={isDisabled}
        error={errorMessage}
        onChange={onDateChange1}
      />
    )
}

export default DatePicker
