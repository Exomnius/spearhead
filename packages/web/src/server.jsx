import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import http from 'http';
import Html from './components/Html/Html';
import App from "./pages/App";

const app = express();
const server = new http.Server(app);

app.use(async (req, res) => {
    const hydrate = () => {
        res.write('<!doctype html>');
        ReactDOMServer.renderToNodeStream(<Html />).pipe(res);
    };

    if (__DISABLE_SSR__) {
        return hydrate();
    }

    const context = {};
    const content = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );
    const response = <Html content={content}/>;

    // todo: check context redirects?


    res.status(200).send(`<!doctype html>${ReactDOMServer.renderToString(response)}`);
});

// todo: make port env
(async () => {
    server.listen(3000, err => {
        if (err) {
            console.error(err);
        }
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', 3000);
    });
})();