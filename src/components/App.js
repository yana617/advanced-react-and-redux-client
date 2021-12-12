import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Welcome from './Welcome';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import Feature from './Feature';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </div>
  );
};

export default App;
