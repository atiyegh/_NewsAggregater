import React from 'react';
import {DatePicker, Input, Select} from "antd";
import {formItemTypes} from "../../../../types";
const { RangePicker } = DatePicker;
function CustomFormItem({formItem}) {
    switch (formItem.type){
        case formItemTypes.input: return <Input {...formItem?.propsSource}/>
        case formItemTypes.select: return <Select {...formItem?.propsSource}/>
        case formItemTypes.date: return <DatePicker {...formItem.propsSource}/>
        case formItemTypes.dateRange:return <RangePicker {...formItem.propsSource}/>
        default : return <Input {...formItem?.propsSource}/>
    }
}

export default CustomFormItem;