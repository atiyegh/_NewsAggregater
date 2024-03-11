import React, {useEffect} from 'react';
import {Form} from "antd";
import {getSources} from "../../utils";
import {formItemTypes} from "../../types";
import {categories} from "../../data";

function useLogicPersonalization() {
    //Hooks ------------------------------------------------------------------------------------------------------------
    const [form]=Form.useForm();

    //Variables & States -----------------------------------------------------------------------------------------------
    const formData=[
        {
            type:formItemTypes.input,
            colProps:{
                xs:20,
                sm:8,
                md:5,
                lg:4,
                xl:3
            },
            itemProps:{
                name:"author",
                label:"Author"
            },
            propsSource:{}
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
                label:"Source"
            },
            propsSource:{
                options:localStorage.getItem("sourceOptions") ? JSON.parse(localStorage.getItem("sourceOptions")) : [],
                showSearch:true,
                allowClear:true,
                mode:'multiple'
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
                label:"Category"
            },
            propsSource:{
                options:categories,
                showSearch:true,
                allowClear:true,
                mode:'multiple'
            }
        }
    ]

    //UseEffects -------------------------------------------------------------------------------------------------------
    useEffect(() => {
        //If a user enter the url manually and not redirected from the homePage, then we may not have sources in local storage
        // and we should call api to get sources
        !localStorage.getItem("sourceOptions") && getSources()
    }, []);

    //Functions --------------------------------------------------------------------------------------------------------
    const handleFinish=()=>{
        //Probably there should be an API call to make the user's feeds customized
        console.log("submitted")
    }


    return {
        handleFinish,
        formProps:{
            formData,
            form:form,
            style:{width:"100%"},
            onFinish:handleFinish,
            submitBtnProps:{
                type:"default",
                size:"middle",
                onClick:handleFinish,
                style:{marginTop:"35px", marginLeft:"35px", width: "150px"},
                label:"submit"
            }
        }
    }
}

export default useLogicPersonalization;