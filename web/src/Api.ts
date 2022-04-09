import axios from 'axios';
import { ApiMethod } from './interfaces';

export class Api {
    private readonly BASE_URL = process.env.REACT_APP_API_URL?.trim() === 'local' ? 'http://localhost:3002/api/' : '';

    constructor() {}

    instance = axios.create({
        baseURL: this.BASE_URL,
    });

    public async getData<T>(method: ApiMethod, url: string) {
        const params = {
            method: method,
            url: `${url}`,
        }

        try {
            const { data }: { data : T } = await this.instance(params); // TODO adjust to our api
            return data;
        } catch(error: any) {
            throw new Error(error.message)
        }
    }
}