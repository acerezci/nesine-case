import React from 'react';
import Home from '../container/home';
import { AppContextProvider } from '../context/app';

const App = () => (
  <AppContextProvider data={[]}>
    <Home />
  </AppContextProvider>
);

export default App;
