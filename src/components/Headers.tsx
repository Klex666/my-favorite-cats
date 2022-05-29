import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[64px] bg-[#2196F3]">
      <div className="pl-72 pt-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-white mr-10 h-full' : 'text-white mr-10 h-full opacity-50'
          }>
          Все котики
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'text-white' : 'text-white opacity-50')}>
          Любимые котики
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
