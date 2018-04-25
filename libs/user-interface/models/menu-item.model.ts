export interface IMenuItem {
    label: string;
    icon: string;
    route: string;
    opened?: boolean;
    childs?: IMenuItem[];
}
