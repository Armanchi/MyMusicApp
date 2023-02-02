import React from "react";
import './sidebar.css'
import SidebarButton from "./sidebarButton";
import {MdFavorite} from "react-icons/md"
import {FaGripfire, FaPlay} from "react-icons/fa"
import {FaSignOutAlt} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
import {MdSpaceDashboard} from "react-icons/md"

const Sidebar = () => {
    return(
        <div className="sidebar-container">
            <img src="https://i.pinimg.com/564x/03/52/69/035269c9cdd1f497bf86ed1fa0c54811.jpg" className="profile-img" alt="profile" />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
                <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
                <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
        </div>
    )
}


export default Sidebar;