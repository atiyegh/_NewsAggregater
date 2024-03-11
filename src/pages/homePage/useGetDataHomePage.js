import React from 'react';
import {formItemTypes} from "../../types";
import {SearchOutlined} from "@ant-design/icons";
import {categories} from "../../data";

function useGetDataHomePage(props) {
    const formData=[
        {
            type:formItemTypes.input,
            colProps:{
                span:22,
            },
            itemProps:{
                name:"keyword",
            },
            propsSource:{
                placeholder:'Enter a keyword...',
                addonBefore:<SearchOutlined />
            }
        },
        {
            type:formItemTypes.select,
            colProps:{
                xs:20,
                sm:10,
                md:6,
                lg:5,
                xl:4
            },
            itemProps:{
                name:"source",
                label:"Sources"
            },
            propsSource:{
                options:localStorage.getItem("sourceOptions") ? JSON.parse(localStorage.getItem("sourceOptions")) : [],
                showSearch:true,
                allowClear:true,
                mode:"multiple"
            }
        },
        {
            type:formItemTypes.select,
            colProps:{
                xs:20,
                sm:10,
                md:6,
                lg:5,
                xl:4
            },
            itemProps:{
                name:"category",
                label:"Categories"
            },
            propsSource:{
                options:categories,
                showSearch:true,
                allowClear:true,
                mode:"multiple"
            }
        },
        {
            type:formItemTypes.dateRange,
            colProps:{
                xs:20,
                sm:10,
                md:10,
                lg:8,
                xl:7
            },
            itemProps:{
                name:"publishDate",
                label:"Publish Date"
            },
            propsSource:{
                format:"YYYY-MM-DD",
                needConfirm:false,
            }
        }
    ]

    return {formData}
}

export default useGetDataHomePage;