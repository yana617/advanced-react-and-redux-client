import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/reducers/auth';

const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  return (
    <div>Sorry to see you go</div>
  );
};

export default SignOut;
