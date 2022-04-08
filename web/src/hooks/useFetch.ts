import { useEffect, useState } from "react";
import { Api } from '../api';
import { ApiMethod } from "../interfaces";


interface useFetchProps {
    url: string
    method?: ApiMethod,
    requestBody?: any
}
export const useFetch = ({ method = ApiMethod.GET, url, requestBody }: useFetchProps) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);


    const getData = async () => {
        const api = new Api();

        setIsLoading(true);
        try {
            const data = await api.getData<any[]>(ApiMethod.GET, url);
            setData(data);
        } catch(err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        switch(method) {
            case ApiMethod.GET: 
                getData();
                break;
        }
    }, [])

    return { isLoading, data, error }
}

