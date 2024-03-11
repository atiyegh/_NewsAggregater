import axios from 'axios'

//These functions are to getting data from newsApi, theGuardian and NYTimes. If we had a unified endpoints and base url,
// we could have just one get function and sending the queries and endpoints as a parameter. Also
// we could set more configuration with axios, baseurl, interceptors , etc...

export async function getNewsFromGuardian(queries=""){
    const res=axios.get(`https://content.guardianapis.com/search?${queries}api-key=988cb98c-06f6-4ab3-8bcd-77757a9b7ad6`)
        .then((response)=>{
            return response.data
        })
    return res
}

export async function getNewsFromNewsApi(queries="q=tesla"){
    const res=axios.get(`https://newsapi.org/v2/everything?${queries}&apiKey=c32f46432a214da98b703daa33b33d72`)
        .then((response)=>{
            return response.data
        })
    return res
}

export async function getNewsFromNYTimes(queries=""){
    const res=axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${queries}api-key=5QjXqz7umgY8CeIx8OJJqTJr5lBPsnpI`)
        .then((response)=>{
            return response.data
        })
    return res

}
export async function getSourcesForApiNews(){
    const res=axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=c32f46432a214da98b703daa33b33d72")
        .then((response)=>{
            return response.data
        })
    return res
}