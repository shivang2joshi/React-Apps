const express = require('express');
const next = require('next');
const apiRouter = require('./routers/apiRouter')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });          //run next's app instead of conventional express's
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.use('/api', apiRouter);
        server.get('*', (req, res) => handle(req, res));

        server.listen(5000,(err)=>{
            if(err) console.log(err);
            else console.log('running express server on https://localhost:3000');
        });

    })

