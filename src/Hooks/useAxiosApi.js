import { useState,useEffect } from "react";
import axios from "axios";

const useAxiosApi = (dataUrl) => {
    const [data,setData] = useState([]);
    const [fetchError,setFetchError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        //the code below needs axios reference
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try{
                const response = await axios.get(url,{
                    cancelToken:source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null)
                }
            }catch(err){
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            }finally{
                isMounted && setTimeout(()=> setIsLoading(false),2000);
            }
        }
        fetchData(dataUrl);
        //clean up function

        const cleanUp = () => {
            console.log("clean up function");
            isMounted = false;
            source.cancel();

        }
        return cleanUp;

    },[dataUrl]);

    return{data,fetchError,isLoading};
}

export default useAxiosApi;