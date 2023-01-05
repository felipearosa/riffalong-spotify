import Login from './components/Login/Login'
import LogUserIn from './components/Login/LogUserIn';

const Home = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    code ? <LogUserIn code={code} /> : <Login />
  )
}

export default Home;
