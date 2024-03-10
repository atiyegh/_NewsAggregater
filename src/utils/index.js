import {getSourcesForApiNews} from "../Api";

export const arraysIntersection = (...arrays) => {
    console.log(...arrays)
    return arrays.reduce((accumulator, currentArray) => {
        return accumulator.filter(value => currentArray.includes(value));
    });
};

export  async function getSources(){
    try{
        const apiNewsSourcesResponse=await getSourcesForApiNews();
        console.log({
            apiNewsSourcesResponse
        })
        if(apiNewsSourcesResponse?.status==="ok"){
            const sourceOptions=apiNewsSourcesResponse?.sources?.map((src)=>{
                return {
                    label:src?.name,
                    value:src?.name,
                }
            })
            sourceOptions.push({
                label:'theguardian',
                value:'theguardian'
            })
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