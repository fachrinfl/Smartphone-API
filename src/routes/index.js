import express from 'express';
import config from '../config';
import initializeDb from '../db';
import middleware from '../middleware';
import smartphone from '../controller/smartphone';

let router = express();

// connect to db
initializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));

    // api routes v1 (/v1)
    router.use('/smartphone', smartphone({ config, db }));

});

export default router;