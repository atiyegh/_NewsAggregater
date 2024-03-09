import React from 'react';
import {Input, Select} from "antd";

function CustomFormItem({formItem}) {
    switch (formItem.type){
        case "input": return <Input {...formItem?.propsSource}/>
        case "select": return <Select {...formItem?.propsSource}/>
        default : return <Input {...formItem?.propsSource}/>
    }
}

export default CustomFormItem;