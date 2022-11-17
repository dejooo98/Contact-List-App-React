import React from "react";
//ICONS
import SortIcon from "@mui/icons-material/Sort";
import PeopleIcon from "@mui/icons-material/People";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Link } from "react-router-dom";

//STYLE FILES
import "./SideBar.scss";

const SideBar = () => {
    return (
        <div className="sidebar_wrapper d-none d-md-block">
            <div className="sidebar d-flex flex-column flex-shrink-0">
                <div className="sidebar__header-logo">
                    <SortIcon className=" sidebar__icon" />
                </div>
                <ul className="nav flex-column mb-auto text-center mt-5">
                    <li>
                        <a href="./" className="nav-link active py-3 px-1  ">
                            <PeopleIcon className=" sidebar__icon" />
                        </a>
                    </li>
                    <li>
                        <a href="./" className="nav-link  py-3 px-1  ">
                            <FavoriteIcon className="sidebar__icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
