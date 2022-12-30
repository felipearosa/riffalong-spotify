import Login from './Login'
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import { authActions } from './store/auth';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from './hooks/useAuth';
import LogUserIn from './LogUserIn';

const Home = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    code ? <LogUserIn code={code} /> : <Login />
  )
}

export default Home;
