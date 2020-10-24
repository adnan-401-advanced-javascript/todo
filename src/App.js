import React from 'react';

import ToDo from './components/todo/todo-connected.js';
// import Auth from './components/auth/auth';
// import AuthProvider from './components/auth/context';

import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div data-testid="app">
      {/*
        <AuthProvider>
          <Auth>
          */ }
          <ToDo />
          {/*
          </Auth>
        </AuthProvider>
          */}
      </div>
    );
  }
}
