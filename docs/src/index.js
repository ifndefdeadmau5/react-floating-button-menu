import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { jssPreset, createGenerateClassName } from '@material-ui/core/styles';

import App from './App';
// AppContainer is a necessary wrapper component for HMR

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <CssBaseline>
          <Component />
        </CssBaseline>
      </JssProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
