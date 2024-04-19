//import React from 'react';

interface Props{
    cartItemsCount: number
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div className="navbar">NavBar: {cartItemsCount}</div>;
};

export default NavBar;