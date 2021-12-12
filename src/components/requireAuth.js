import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const { authenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/');
    }
  }, [authenticated, navigate]);

  return authenticated;
};

export default useAuth;
