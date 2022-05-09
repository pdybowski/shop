import axios from 'axios';
import { ApiMethod } from './models';

export class Api {
    private readonly BASE_URL =
        process.env.REACT_APP_API_URL?.trim() === 'local'
            ? 'http://localhost:3001/api/'
            : 'https://shop-coders-camp.herokuapp.com/api/';

    constructor() {}

    instance = axios.create({
        baseURL: this.BASE_URL,
    });

    public async get<T>(url: string) {
        const params = {
            method: ApiMethod.GET,
            url: `${url}`,
        };

        try {
            const { data }: { data: T } = await this.instance(params);
            return data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async put(url: string, body: any) {
        const params = {
            method: ApiMethod.PUT,
            url: `${url}`,
            data: body
        };

        try {
            const { data } = await this.instance(params);
            return data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
