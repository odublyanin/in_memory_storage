import express from 'express';
import { Stack } from '../models/stackModel';
const router: express.Router = express.Router();
const stack: Stack = new Stack();

router.get('/', function (req, res, next) {
    res.render('stack/index', { title: 'Stack' });
});

router.get('/add', function (req, res, next) {
    res.render('stack/add', { title: 'Add to stack' });
});

router.post('/add', function (req, res, next) {
    const item: string = req?.body?.item;
    if (item) {
        stack.addItemToStack(req.body.item);
    }
    res.render('stack/add', { title: 'Add to stack', item });
});

router.get('/get', function (req, res, next) {
    res.render('stack/get', { title: 'Get from stack', item: stack.getItemFromStack(), numberOfItems: stack.numberOfItems() });
});

export default router;
