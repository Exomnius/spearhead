import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../components/ui/Loader/Loader';

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ './Contact').then(module => module.default),
  loading: Loader
});


export default LoadableContact;
