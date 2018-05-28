import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>Loading...</div>
);

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ './Contact').then(module => module.default),
  loading: Loading
});


export default LoadableContact;
