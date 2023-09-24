'use client'
import React from 'react';
import { TabsWithIcon } from './tab';
import { Title } from './title';

interface PropTypes { }

const styles = {
  container: `h-[73vh]`,
}

export const About: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'About Me'}/>
      <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
        I&#39;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
      <hr className='w-full h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700' />
      <TabsWithIcon />
    </>
  )
}
