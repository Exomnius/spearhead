import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './../../pages/global.css';
import 'spearhead-ui/dist/styles.css';

const App = ({children}) => (
  <div>
    <Header/>

    {children}

    <Footer/>
  </div>
);

export default App;
