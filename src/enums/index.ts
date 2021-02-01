export enum Status {
    Ok = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    Partial = 206,
    NotFound = 404,
};
export enum StatusDescription {
    Ok = 'Ok',
    Created = 'Created',
    Accepted = 'Accepted',
    NoContent = 'No Content',
    Partial = 'Partial',
    NotFound = 'Not Found',
};

export enum Description {
    Add = 'The value was successfully added',
    Get = 'Get value',
    GetByKey = 'Get value by key',
    DeleteByKey = 'Delete value by key',
    ValueByKeyNotExist = 'Value by key not exist'
};
