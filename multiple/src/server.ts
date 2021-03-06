import * as Path from 'path';

import * as express from 'express';
import { handlebars } from 'consolidate';

import { Router } from 'vio';

let app = express();

app.engine('hbs', handlebars);

let apiRouter = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes/api'),
    prefix: '/api'
});

let pageRouter = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes/page'),
    viewsRoot: Path.join(__dirname, '../views'),
    defaultSubsite: 'desktop',
    viewsExtension: '.hbs'
});

let port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
