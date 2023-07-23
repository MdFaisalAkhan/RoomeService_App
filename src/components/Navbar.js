import React, { } from 'react'
import './Navbar.css';

import { Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import SideBar from './SideBar';
// import Posts from './Posts';
// import ChatBar from './ChatBar';
// import ChatRoom from './ChatRoom';

const Navbar = () => {
// const [state, setState] = useState(false);
// const [current, setCurrent]= useState({});
// const openChat = (user) =>{
//     setState(true);
//     setCurrent(user);
// };
// const closeChat = ()=>{
//     setState(false);
// };
    return (
        
        <div className="navbar">
        <div className="navbar__first">
        <div className="navbar__first-logo">
        <MenuIcon className="navbar__logo"/>
        </div>
        <div className="navbar__first-search">
            <input type="text" className="navbar__first-searchbar"
            placeholder="Search Hotel Name..." />
            <SearchIcon className="navbar__searchIcon" />
        </div>
        </div>
        <div className="navbar__last">
        <span className="navbar__last-section">
          <EmailIcon />
          <span className="navbar__notify">3</span>
        </span>
        <span className="navbar__last-section">
          < NotificationsIcon/>
          <span className="navbar__notify">17</span>
        </span>
        <span className="navbar__last-section">
          <Avatar />
        </span>
        </div>
    </div>
    
    
        
    );
};

export default Navbar;