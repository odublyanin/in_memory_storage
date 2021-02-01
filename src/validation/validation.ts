import { Status, StatusDescription } from '../enums';
import { IResponse } from '../interfaces';

export function checkRequestBody(body: object): IResponse {
    return { status: body ? Status.Accepted : Status.NoContent, statusDescription: body ? StatusDescription.Ok : StatusDescription.NoContent };
}

export function checkValuesInRequestBody(body: object, keys: Array<string>): IResponse {
    const response: IResponse = checkRequestBody(body);
    let count = 0;
    if (response.status === Status.Accepted && keys.length) {
        keys.forEach((key) => {
            if (body[ key ]) {
                count++;
            }
        });
        if (count > 0) {
            if (Object.keys(body).length === count) {
                response.status = Status.Accepted;
                response.statusDescription = StatusDescription.Accepted;
            } else {
                response.status = Status.Partial;
                response.statusDescription = StatusDescription.Partial;
            }
        } else {
            response.status = Status.NoContent;
            response.statusDescription = StatusDescription.NoContent;
        }
    }
    return response;
}
