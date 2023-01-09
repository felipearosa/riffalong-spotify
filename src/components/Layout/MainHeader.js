import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import SearchBar from '../UI/SearchBar';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const searchBar = (
    <li>
      <SearchBar />
    </li>
  )

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              The RiffAlong
            </NavLink>
          </li>
          {isLoggedIn && searchBar}
          <li>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <Logout />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
