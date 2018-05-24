export interface IBaseResponse<T> {
    succeeded: boolean;
    description: string;
    data: T;
}
