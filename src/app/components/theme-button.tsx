'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import {
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/solid';

interface PropTypes { }

const styles = {
  button: `flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
  svg: `w-5 h-5`,
};

export const ThemeButton: React.FC<PropTypes> = ({ }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button id='theme-toggle' onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')} type='button' className={styles.button}>
      {theme == 'light' ?
        <SunIcon className={styles.svg} />
        :
        <MoonIcon className={styles.svg} />
      }
    </button>
  )
}
