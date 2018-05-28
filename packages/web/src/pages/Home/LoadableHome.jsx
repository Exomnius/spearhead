import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>Loading...</div>
);

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home').then(module => module.default),
  loading: Loading
});


export default LoadableHome;
