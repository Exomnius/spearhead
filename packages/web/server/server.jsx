import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devWebpackConfig from './../webpack/webpack.dev';
import Html from '../src/components/Html/Html';
import App from "../src/pages/App";

const app = express();

if (__DEV__) {
  const compiler = webpack(devWebpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      publicPath: 'http://localhost:3000/',
      progress: true,
      stats: {
        colors: true,
        assets: true,
        chunks: false,
        modules: false,
        hash: false
      }
    })
  );

  app.use(
    webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 4000
    })
  );
}

app.get('/', async (req, res) => {
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

    if (context.url) {
      res.redirect(context.url);
    } else {
      const response = <Html content={content}/>;
      res.status(200).send(`<!doctype html>${ReactDOMServer.renderToString(response)}`);
    }
});

// todo: make port env
(async () => {
  app.listen(3000, err => {
        if (err) {
            console.error(err);
        }

        if (__DEV__) {
          console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', 3000);
        }
    });
})();
