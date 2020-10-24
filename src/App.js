import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import Auth from './components/auth/auth';
import AuthProvider from './components/auth/context';


export default class App extends React.Component {
  render() {
    return (
      <div data-testid="app">

        <AuthProvider>
          <Auth>

          <ToDo />

          </Auth>
        </AuthProvider>

      </div>
    );
  }
}
