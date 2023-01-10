import { Fragment } from 'react';
import Header from '../components/Layout/Header';
import Login from '../components/Login/Login'
import LogUserIn from '../components/Login/LogUserIn';
import WebsiteSummary from '../components/UI/WebsiteSummary';

const Home = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    // code ? <LogUserIn code={code} /> : <Header />
    <Fragment>
      <Header />
      <WebsiteSummary />
    </Fragment>
  )
}

export default Home;
