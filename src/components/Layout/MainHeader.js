import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Login/Logout';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/products'>
              Products
            </NavLink>
          </li>
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
