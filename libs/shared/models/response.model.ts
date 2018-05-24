export interface IResponse<T> {
    Succeeded: boolean;
    Description: string;
    Data: T;
}
