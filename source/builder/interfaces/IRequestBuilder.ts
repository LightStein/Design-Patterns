export interface iRequestBuilder<T, R> {
    request: R
    forUrl: (url: string) => T
    useMethod: (method: string) => T
    payload: (payload: object) => T
    build: () => R
}