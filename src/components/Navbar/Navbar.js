import React from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
const NavBar = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between pr-10 gap-4 p-5 bg-black">
        <NavLink to={"/"}>
          <img className="header-icon ml-20" src="https://istyle.rs/media/logo/stores/9/iSTYLE-logo-white-red.svg" alt="iStyle" width={130} height={54} />
        </NavLink>
        <div className="flex justify-end gap-6 font-bold pr-4 text-2xl">
          <NavLink to={"/"}>
            <h2>Products</h2>
          </NavLink>
          <NavLink to={"/about"}>
            <h2> About us</h2>
          </NavLink>
          <NavLink to={"/cart"}>
       
            <h2>Cart <Badge className="ml-1 mb-6 " overlap="circular" badgeContent={1} color="secondary"></Badge></h2>
            
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
