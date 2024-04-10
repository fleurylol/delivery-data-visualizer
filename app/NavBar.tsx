import React from 'react';
import { LayoutDashboard, Map, Upload, Building2 } from 'lucide-react';

const NavBar = () => {
  const navLinks = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/',
    },
    {
      name: 'Map',
      icon: Map,
      path: '/map',
    },
    {
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      name: 'Businesses',
      icon: Building2,
      path: '/businesses',
    },
  ];

  return (
    <nav className="bg-red-500 text-white w-fit h-screen">
      <ul className="text-center">
        {navLinks.map((link) => (
          <li key={link.name} className="flex gap-x-2 p-3 hover:bg-red-600">
            <link.icon />
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
