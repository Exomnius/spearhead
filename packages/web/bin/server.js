#!/usr/bin/env node

require('./server.babel');

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

// HMR
if (__DEVELOPMENT__) {
    if (!require('piping')({
            hook: true,
            ignore: /(\/\.|~$|\.json|\.scss$)/i
        })
    ) {
        return;
    }
}

require('../src/server');