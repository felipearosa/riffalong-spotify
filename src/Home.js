import Login from './Login'
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import { authActions } from './store/auth';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const code = useSelector(state => state.auth.code)
  const dispatch = useDispatch();

  useEffect(() => {
    const receivedCode = new URLSearchParams(window.location.search).get('code');
    dispatch(authActions.setCode({ code:receivedCode }));
  }, [])

  return (
    code ? <Dashboard /> : <Login />
  )
}

export default Home;
