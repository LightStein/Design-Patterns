import { iRequestBuilder, iRequest } from "./interfaces/index";
import { Request } from "./request"

class RequestBuilder implements iRequestBuilder<RequestBuilder, Request>{
    request: Request

    constructor() {
        this.request = new Request();
    }

    forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    payload(payload: object) {
        this.request.payload = payload;
        return this;
    }

    build()  {
        return this.request;
    }

}

export default RequestBuilder;
