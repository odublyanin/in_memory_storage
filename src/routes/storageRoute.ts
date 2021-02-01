import express from 'express';
import { Status, Description, StatusDescription } from '../enums';
import { IResponse } from '../interfaces';
import { Storage } from '../models/storageModel';
import { checkValuesInRequestBody } from '../validation/validation';
const router: express.Router = express.Router();
const storage: Storage = new Storage();

router.post('/add', function (req, res, next) {
    let response: IResponse = checkValuesInRequestBody(req.body, [ 'key', 'value' ]);
    if (response.status === Status.Accepted) {
        const { key, value, ttl } = req?.body;
        storage.addToStorage(key, value, ttl);
        response = {
            status: Status.Created,
            statusDescription: StatusDescription.Created,
            description: Description.Add,
            value,
            key
        };
    }
    res.json(response);
});

router.post('/get', function (req, res, next) {
    let response: IResponse = checkValuesInRequestBody(req.body, [ 'key' ]);
    if (response.status === Status.Accepted) {
        const key: string = req?.body?.key;
        const value = storage.getFromStorage(key);
        response = {
            status: Status.Ok,
            statusDescription: StatusDescription.Ok,
            description: Description.GetByKey,
            value,
            key
        };
    }
    res.json(response);
});

router.delete('/delete', function (req, res, next) {
    const response: IResponse = checkValuesInRequestBody(req.body, [ 'key' ]);
    if (response.status === Status.Accepted) {
        const { key } = req.body;
        const isKeyExists: Boolean = storage.checkKeyInStorage(key);
        if (isKeyExists) {
            storage.removeFromStorage(key);
            response.status = Status.Ok;
            response.statusDescription = StatusDescription.Ok;
            response.description = Description.DeleteByKey;
        } else {
            response.status = Status.NotFound;
            response.statusDescription = StatusDescription.NotFound;
            response.description = Description.ValueByKeyNotExist;
        }
        response.key = key;
    }

    res.json(response);
});

export default router;
