import React,{useState,useEffect} from "react";
import {axiosCreate} from '../axios'

const useMovieFetch = ({url}) => {
    const [data, setData] = useState([])

    async function fetchData() {
        const result = await axiosCreate.get(`${url}`,{
            params:{
                api_key: '9d38b17f3deabed19968463267264754'

            }
        })
        setData(result.data.results || result.data)
    }

    useEffect(()=>{
        fetchData()
    },[url])
    return {data}

}

export default useMovieFetch