import React from 'react';

import useAuth from './requireAuth';

const Feature = () => {
  useAuth();

  return (
    <div>
      You are awesome, if you could come here
    </div>
  );
};

export default Feature;
