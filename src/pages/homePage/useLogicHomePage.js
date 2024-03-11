import React, {useEffect, useState} from 'react';
import {Form} from "antd";
import { convertedDta} from "../../data";
import {arraysIntersection, getSources} from "../../utils";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes} from "../../Api";
import styles from "./homePageStyle.module.scss";
import useGetDataHomePage from "./useGetDataHomePage";

function useLogicHomePage() {
    //Hooks ------------------------------------------------------------------------------------------------------------
    const [form]=Form.useForm();
    const {formData}=useGetDataHomePage()

    //States & Variables -----------------------------------------------------------------------------------------------
    const [convertedData, setConvertedData] = useState(convertedDta);
    const [filteredData, setFilteredData] = useState(null);

    //UseEffects -------------------------------------------------------------------------------------------------------
    useEffect(() => {
        // getNews()
        !localStorage.getItem("sourceOptions") && getSources()
    }, []);


    //Functions --------------------------------------------------------------------------------------------------------

    //This function is to calling api to get news from three apis of theguardian, newsapi and nytimes. The results of these apis will
    // be converted to a unified data structure that can be used for search, sort and render data. User search is handled by front end.
    // It is better to handle search by api specifically when the dataset is heavy. But as in this example the dataset is small and we have
    //three apis with different data structures it would be challenging to sort, search and render. So, in this example I prefer to
    // first convert data to a unfied data structure and then use it anywhere or do any further operation on the data.
    async function getNews(){
        try{
            const getNewsGuardianResponse=await getNewsFromGuardian()
            if(getNewsGuardianResponse?.response?.status==="ok"){
                theGuardianConvertData(getNewsGuardianResponse?.response?.results)
                const getNewsApiResponse=await getNewsFromNewsApi();
                if(getNewsApiResponse?.status==="ok"){
                    apiNewsConvertData(getNewsApiResponse?.articles)
                    const getNewsNYTimesResponse=await getNewsFromNYTimes()
                    if(getNewsNYTimesResponse.status==="OK"){
                        nYTimesCovertData(getNewsNYTimesResponse?.response?.docs)
                    }
                }
            }
        }catch(error){
            console.log({error})
        }
    }

    //This function is to convert results of thequardian api to a unified data structure
    function theGuardianConvertData(theGuardianData){
        const theGuardianconvertedData=theGuardianData.length>0 ? theGuardianData?.map((newsItems)=>{
            return {
                author:null,
                description:null,
                source:"theguardian",
                url:newsItems?.webUrl,
                title:newsItems?.webTitle,
                category:newsItems?.sectionName,
                imgSrc:`${newsItems?.webUrl}#img-1`,
                publishDate:newsItems?.webPublicationDate?.split("T")[0]
            }
        }):[]

        setConvertedData([...theGuardianconvertedData])
    }

    //This function is to convert results of NYTimes api to a unified data structure
    function nYTimesCovertData(nYTimesData){
        const nYTimesConvertedData=nYTimesData?.length>0 ? nYTimesData?.map((newsItems)=>{
            return {
                author:newsItems?.byline?.original,
                description:newsItems?.headline?.main,
                source:newsItems?.source,
                url:newsItems?.web_url,
                title:newsItems?.snippet,
                category:newsItems?.section_name,
                imgSrc:`https://www.nytimes.com/${(newsItems?.multimedia && newsItems?.multimedia?.length>0)? newsItems?.multimedia[0]?.url: ""}`,
                publishDate:newsItems?.pub_date?.split("T")[0]
            }
        }):[]
        setConvertedData(prevState => {
            return [...prevState,...nYTimesConvertedData ]
        })
    }

    //This function is to convert results of apiNews api to a unified data structure
    function apiNewsConvertData(apiNewsData){
        const apiNwsConvertedData=apiNewsData?.length>0 ? apiNewsData?.map((newsItems)=>{
            return {
                author:newsItems?.author,
                description:newsItems?.description,
                source:newsItems?.source?.name,
                url:newsItems?.url,
                title:newsItems?.title,
                category:"Tesla",
                imgSrc:newsItems?.urlToImage,
                publishDate:newsItems?.publishedAt?.split("T")[0]
            }
        }):[]

        setConvertedData(prevState => {
            return [...prevState,...apiNwsConvertedData ]
        })
    }

    //This function is to handle search by user. It also could be implemented in handelSubmit of form. But, as it will bring a better UX for user
    // to see the search results immediately after filtering, I prefer to implement it in handleChange.
    function handleChangeFilters(_,values){

        let filterArray=[];

        if(values?.category){
            values?.category?.length>0 && filterArray.push(convertedData?.filter((newsItem)=>{
                return values?.category?.includes(newsItem.category)
            }))
        }
        if(values?.keyword){
            filterArray.push(convertedData?.filter((newsItem)=>{
                return newsItem?.title?.toLowerCase()?.includes(values?.keyword?.toLowerCase()) || newsItem?.description?.toLowerCase()?.includes(values?.keyword?.toLowerCase())
            }))
        }
        if(values?.source){
            values?.source?.length>0 &&  filterArray.push(convertedData?.filter((newsItem)=>{
                return values?.source?.includes(newsItem.source)}))
        }
        if(Array.isArray(values?.publishDate)){
            const fromPublishedDate=(values?.publishDate?.length>0 && values?.publishDate[0]?.toISOString().split("T")[0]) || undefined;
            const toPublishedDate=(values?.publishDate?.length>0 && values?.publishDate[1]?.toISOString().split("T")[0]) || undefined;
            filterArray.push(convertedData.filter((newsItem)=>{
                return newsItem.publishDate>= fromPublishedDate && newsItem.publishDate<=toPublishedDate
            }))
        }

        //Getting intersection of all filters done by user
        const filteredDataByUser=filterArray?.length>0 && arraysIntersection(...filterArray)

        setFilteredData(filteredDataByUser ? filteredDataByUser :null )
    }

    return {
        formPropsHomePage:{
            form:form,
            formData:formData,
            onValuesChange:handleChangeFilters,
            formClassName:styles["form-container"]
        },
        filteredData,
        convertedData,
    }
}

export default useLogicHomePage;