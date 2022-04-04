import axios from 'axios';
import { ApiMethod } from './interfaces';

const BASE_URL = ""

export class Api {

    constructor() {}

    instance = axios.create({
        baseURL: BASE_URL,
    });

    public async getData<T>(method: ApiMethod, url: string) {
        const params = {
            method: method,
            url: `${url}`,
        }

        const { data }: { data : T } = await this.instance(params); // TODO adjust to our api
        return data;
    }
}