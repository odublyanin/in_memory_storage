import { Status, StatusDescription } from '../enums';

export interface IResponse {
    status: Status;
    statusDescription: StatusDescription;
    description?: String;
    value?: String;
    key?: String;
    ttl?: Number;
}
