import express from 'express';
import { Storage } from '../models/storageModel';
const router: express.Router = express.Router();
const storage: Storage = new Storage();

router.get('/', function (req, res, next) {
    res.render('storage/index', { title: 'Storage' });
});

router.get('/add', function (req, res, next) {
    res.render('storage/add', { title: 'Add to storage' });
});

router.post('/add', function (req, res, next) {
    const key: string = req?.body?.key;
    const value: string = req?.body?.value;
    const ttl: number = req?.body?.ttl;
    if (key && value) {
       storage.addToStorage(key, value, ttl);
    }
    res.render('storage/add', { title: 'Add to storage', key, value });
});

router.get('/get', function (req, res, next) {
    res.render('storage/get', { title: 'Get from storage', numberOfItems: storage.numberOfItems() });
});

router.post('/get', function (req, res, next) {
    const key: string = req?.body?.key;
    const value = storage.getFromStorage(key); 
    const isKeyExists: Boolean = storage.checkKeyInStorage(key);
    res.render('storage/get', { title: 'Get from storage', key, value, isKeyExists, numberOfItems: storage.numberOfItems() });
});

router.get('/remove', function (req, res, next) {
    res.render('storage/remove', { title: 'Remove from storage by key', numberOfItems: storage.numberOfItems() });
});

router.post('/remove', function (req, res, next) {
    const key: string = req?.body?.key;
    const isKeyExists: Boolean = storage.checkKeyInStorage(key);
    if (isKeyExists) {
        storage.removeFromStorage(key);
    }
    res.render('storage/remove', { title: 'Remove from storage by key', isKeyExists, key, numberOfItems: storage.numberOfItems() });
});

export default router;
