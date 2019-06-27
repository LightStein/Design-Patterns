import { iRequest } from "./interfaces/index";

export class Request implements iRequest {
    url: string
    method: string
    payload: object

    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}