import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../store/reducers/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.errorMessage);
  const authenticated = useSelector(state => state.auth.authenticated);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(signIn(data));
  };

  useEffect(() => {
    if (authenticated) {
      navigate('/feature');
    }
  }, [authenticated, navigate]);

  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }} onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      <input {...register('password', { required: true })} />
      <span>{error}</span>
      <input type="submit" value="Sign in!" />
    </form>
  );
};

export default SignIn;
