import Login from './Login'
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

const Home = () => {
  return (
    code ? <Dashboard code={code} /> : <Login />
  )
}

export default Home;
