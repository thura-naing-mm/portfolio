'use client'
import React from 'react';
import { TabsWithIcon } from './tab';
import { Title } from './title';

interface PropTypes { }

const styles = {
  p: `mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400`,
  hr: `w-full h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10 dark:bg-gray-700`
}

export const About: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'About Me'} />
      <p className={styles.p}>
        Highly skilled Web Developer with a strong background in a wide range of technologies and frameworks.
        Experienced in designing and developing web applications, using both front-end and back-end technologies.
        Proficient in Python, Go, PHP, Angular, React, NestJS, Next.js, Express.js, Strapi, WordPress, Docker,
        gRPC, Microservices, Google Cloud and Firebase.
      </p>
      <hr className={styles.hr} />
      <TabsWithIcon />
    </>
  )
}
