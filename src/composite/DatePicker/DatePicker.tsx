import React, { useState } from "react";
import {
  DateRangePicker,
  DatePicker as MantineDatePicker,
} from "@mantine/dates";
import classNames from "classnames";

interface IDateProps {
  handleDateChange: (arg: Date | [Date, Date]) => void;
  label: string;
  placeholder: string;
  datePickerContainerClass: string;
  className: string;
  isDisabled: boolean;
  errorMessage: string;
  minDate: Date;
  maxDate: Date;
  dateFormat: string;
  isRange: boolean;
}

function DatePicker(props: IDateProps) {
  const {
    handleDateChange,
    label,
    placeholder,
    datePickerContainerClass,
    className,
    isDisabled,
    errorMessage,
    minDate,
    maxDate,
    dateFormat,
    isRange,
  } = props;
  const [date, setDate] = useState(new Date());

  const [dates, setDates] = useState([new Date(), new Date()] as [Date, Date]);

  const onDateRangeChange = (dates: [Date, Date]) => {
    setDates(dates);
    handleDateChange(dates);
  };

  const onDateChange = (date: Date) => {
    setDate(date);
    handleDateChange(date);
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
          value={dates}
          inputFormat={dateFormat}
          minDate={minDate}
          maxDate={maxDate}
          disabled={isDisabled}
          error={errorMessage}
          onChange={onDateRangeChange}
        />
      </div>
    );
  }

  return (
    <MantineDatePicker
      classNames={{
        wrapper: datePickerContainerClass,
      }}
      value={date}
      label={label}
      minDate={minDate}
      maxDate={maxDate}
      error={errorMessage}
      disabled={isDisabled}
      inputFormat={dateFormat}
      placeholder={placeholder}
      closeCalendarOnChange={true}
      onChange={onDateChange}
    />
  );
}

export default DatePicker;
