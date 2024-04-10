'use client';
import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { LayoutDashboard, Map, Upload, Building2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentPath = usePathname();

  const navLinks = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/',
    },
    {
      name: 'Map',
      icon: Map,
      href: '/map',
    },
    {
      name: 'Upload',
      icon: Upload,
      href: '/upload',
    },
    {
      name: 'Businesses',
      icon: Building2,
      href: '/businesses',
    },
  ];

  return (
    <nav className="bg-red-500 text-white w-fit h-screen">
      <ul className="text-center">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={classnames({
              'flex gap-x-2 p-3 hover:bg-red-600': true,
              'border-r-4': link.href === currentPath,
              'text-stone-300': link.href !== currentPath,
            })}
          >
            <link.icon />
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
