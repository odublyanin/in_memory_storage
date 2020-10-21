import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import hbs from 'hbs';

import indexRoute from './routes/indexRoute';
import stackRoute from './routes/stackRoute';
import storageRoute from './routes/storageRoute';

const app = express();
const port: number = 3000;

// view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));
hbs.registerHelper('ifAND', function (v1, v2, options) {
    return (v1 && v2) ? options.fn(this) : options.inverse(this);
});
app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/stack', stackRoute);
app.use('/storage', storageRoute);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (e, req, res, next) {
    res.locals.message = e.message;
    res.locals.error = req.app.get('env') === 'development' ? e : {};

    res.status(e.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('Server Started at Port, 3000');
});

export default app;
