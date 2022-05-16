import { useEffect, useState } from 'react';
import { Api } from '../Api';
import { ApiMethod } from '../models';

interface useLoginProps {
    url: string;
    method?: ApiMethod;
    body?: any;
}
export const useLogin = <T>({ method = ApiMethod.POST, url, body }: useLoginProps) => {
    const [info, setInfo] = useState<T>();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const api = new Api();

        try {
            const data = await api.post(url, body);
            setInfo(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        switch (method) {
            case ApiMethod.POST:
                getData();
                break;
        }
    }, []);

    return { isLoading, body, error };
};
