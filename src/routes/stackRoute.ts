import express from 'express';
import { IResponse } from '../interfaces';
import { Description, Status, StatusDescription } from '../enums';
import { Stack } from '../models/stackModel';
import { checkValuesInRequestBody } from '../validation/validation';
const router: express.Router = express.Router();
const stack: Stack = new Stack();

router.post('/add', function (req, res, next) {
    const response: IResponse = checkValuesInRequestBody(req.body, [ 'value' ]);
    if (response.status === Status.Accepted) {
        const value: string = req.body.value;
        stack.addValueToStack(value);
        response.status = Status.Created;
        response.statusDescription = StatusDescription.Created;
        response.description = Description.Add;
        response.value = value;
    }
    res.json(response);
});

router.get('/get', function (req, res, next) {
    const response: IResponse = {
        status: Status.Ok,
        statusDescription: StatusDescription.Ok,
        value: stack.getValueFromStack(),
        description: Description.Get
    };
    res.json(response);
});

export default router;
