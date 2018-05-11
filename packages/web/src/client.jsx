import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import App from './pages/App';

const MOUNT_NODE = 'react-root';

(async () => {
  const render = async () => {
    // setup react root components
    const rootComponent = (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );

    // mount to DOM
    if (rootComponent) {
      const mountNode = document.getElementById(MOUNT_NODE);

      if (__DISABLE_SSR__) {
        ReactDOM.render(rootComponent, mountNode);
      } else {
        ReactDOM.hydrate(rootComponent, mountNode);
      }
    } else {
      //todo: Logger.error('No root element found!');
    }
  };

  await render();

  // if (module.hot) {
  //   module.hot.accept();
  // }
})();
