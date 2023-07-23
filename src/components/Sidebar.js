import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Sidebar = () => {
    return (
        <div className="sidebar__last">
        <span className="sidebar__last-section">
          <HomeIcon />
        </span>
        <span className="sidebar__last-section">
          <AddBoxIcon/>
        </span>
        <span className="sidebar__last-section">
          <DateRangeIcon/>
        </span>
            
        </div>
    );
};

export default Sidebar;


