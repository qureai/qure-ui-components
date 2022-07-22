import React  from 'react';
import DatePicker from "./DatePicker";

export default {
    title: 'Composite/DatePicker',
    component: DatePicker,
};

const Template = (args) => <DatePicker />;

export const SimpleDatePicker = Template.bind({})


//     Template.bind({})
// DatePicker.args = {new: 'a'}
