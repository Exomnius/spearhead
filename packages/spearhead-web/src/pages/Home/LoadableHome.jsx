import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../components/ui/Loader/Loader';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home').then(module => module.default),
  loading: Loader
});


export default LoadableHome;
