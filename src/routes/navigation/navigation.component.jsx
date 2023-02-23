import './navigation.styles.scss';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assests/logo2.png';

const Navigation = () => 
   <Fragment>
      <header className="navigation">
            <Link className="logo-container" to ='/'>
               <img src={logo} alt='logo' />
            </Link>
            <nav>
               <ul>
                  <li>
                     <Link to='/'>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link to='about'>
                        About
                     </Link>
                  </li>
                  <li>
                     <Link to='joinUs'>
                        Join Us
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
         <Outlet />
   </Fragment>

export default Navigation;