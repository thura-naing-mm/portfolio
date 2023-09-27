'use client'
import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { ThemeButton } from './theme-button';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
interface PropTypes { }

const styles = {
  navbar: `mx-auto mx-full py-2 px-4 lg:px-8 lg:py-4 bg-white/[.6] dark:bg-gray-800/[.6] dark:border-gray-700`,
  navbarConatiner: `mx-full flex items-center justify-between`,
  menuIcon: `h-6 w-6 text-gray-700 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-white lg:hidden`,
  svg: `h-6 w-6`,
  navContainer: `hidden lg:block`,
  navContainerSp: `container mx-auto'`,
  ul: `mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mr-6`,
  li: `p-1 font-normal`,
  a: `flex items-center pl-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-700 hover:text-blue-700 dark:hover:text-blue-700 hover:bg-transparent dark:hover:bg-transparent`
}

export const Nav: React.FC<PropTypes> = ({ }) => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const menuList = [
    {
      link: '#about',
      text: 'About'
    },
    {
      link: '#education',
      text: 'Education'
    },
    {
      link: '#skill',
      text: 'Skill'
    },
    {
      link: '#experience',
      text: 'Experience'
    },
    {
      link: '#project',
      text: 'Project'
    },
    {
      link: '#contact',
      text: 'Contact'
    },
  ];

  const navList = (
    <ul className={styles.ul}>
      {menuList.map((menu) => (
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className={styles.li}
          key={menu.link}
        >
          <a href={menu.link} className={styles.a}>{menu.text} </a>
        </Typography>
      ))}
    </ul>
  );
  return (
    <>
      <Navbar className={styles.navbar}>
        <div className={styles.navbarConatiner}>
          <IconButton
            variant='text'
            className={styles.menuIcon}
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <XMarkIcon className={styles.svg} /> : <Bars3Icon className={styles.svg} />}
          </IconButton>
          <div className={styles.navContainer}>{navList}</div>
          <ThemeButton />

        </div>
        <Collapse open={openNav}>
          <div className={styles.navContainerSp}>
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </>
  )
}
