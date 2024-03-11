import {getSourcesForApiNews} from "../Api";

//This function get multiple arrays and returns intersection of those arrays
export const arraysIntersection = (...arrays) => {
    return arrays.reduce((accumulator, currentArray) => {
        return accumulator.filter(value => currentArray.includes(value));
    });
};


//This is a function to get sources of apiNews. As it may be called in different pages, I consider it as a generic function and its results
//is stored in local storage to be accessible in different pages. It is better to use redux and persist the data but I did not have enought time for that.
export  async function getSources(){
    try{
        const apiNewsSourcesResponse=await getSourcesForApiNews();
        if(apiNewsSourcesResponse?.status==="ok"){
            const sourceOptions=apiNewsSourcesResponse?.sources?.map((src)=>{
                return {
                    label:src?.name,
                    value:src?.name,
                }
            })
            // All of the results of theguardian api are from theguardian.com
            sourceOptions.push({
                label:'theguardian',
                value:'theguardian'
            })

            // All of the results of the NYtimes api are from nytimes.com
            sourceOptions.push({
                label:'The New York Times',
                value:'The New York Times'
            })

            localStorage.setItem("sourceOptions", JSON.stringify(sourceOptions))
        }
    }catch (error){
        console.log({error})
    }
}