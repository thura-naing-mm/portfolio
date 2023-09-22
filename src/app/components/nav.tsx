'use client'
import React from 'react';
import { ThemeButton } from './theme-button';

interface PropTypes { }

const styles = {
  nav: `w-full flex justify-end`,
  ul: `font-medium flex items-center p-4`,
  li: `flex pl-7`,
  a: `block pl-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-blue-700 dark:hover:text-blue-700 hover:bg-transparent dark:hover:bg-transparent`
}

export const Nav: React.FC<PropTypes> = ({ }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href='#' className={styles.a}>About</a>
        </li>
        <li className={styles.li}>
          <a href='#' className={styles.a}>Education</a>
        </li>
        <li className={styles.li}>
          <a href='#' className={styles.a}>Skill</a>
        </li>
        <li className={styles.li}>
          <a href='#' className={styles.a}>Experience</a>
        </li>
        <li className={styles.li}>
          <a href='#' className={styles.a}>Projects</a>
        </li>
        <li className={styles.li}>
          <a href='#' className={styles.a}>Contact</a>
        </li>
        <li className={styles.li}>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  )
}
