import DatePicker from "../composite/DatePicker";
import CustomTemplate from "./customTemplate";

export default {
  title: "Composite/DatePicker",
  component: DatePicker,
};

const Template = CustomTemplate(DatePicker);

export const SimpleDatePicker = Template.bind({});
SimpleDatePicker.args = {
  isRange: false,
  handleDateChange: () => {
    console.log();
  },
};
