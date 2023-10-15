'use client'
import React from 'react';
import Image from 'next/image'
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import { Title } from './title';

interface PropTypes { }

const styles = {
  container: `flex w-full flex-wrap justify-between px-6`,
  block: `flex sm:w-[calc(50%-0.5rem)] w-full flex-col mt-4 bg-white/[.6] border border-gray-200 rounded-lg shadow dark:bg-gray-800/[.6] dark:border-gray-700`,
  image: `object-contain`,
  count: `text-start my-4 dark:text-white`,
  text: `text-start dark:text-gray-400`
}

export const Project: React.FC<PropTypes> = ({ }) => {
  const projectList = [
    {
      path: '/images/logo/angular.svg',
      count: 20,
      text: 'I have created web applications using Angular for the frontend, incorporating Material Design principles for sleek and user-friendly interfaces.',
      project: ['rescue-web', 'saitenkun', 'crawler', 'pingus', 'chienowa']
    },
    {
      path: '/images/logo/python.svg',
      count: 5,
      text: 'I have leveraged Python to build robust web applications using Flask as the backend framework.',
      project: ['']
    },
    {
      path: '/images/logo/wordpress.svg',
      count: 10,
      text: 'I have designed and developed WordPress websites that combine functionality and aesthetics. These projects highlight my ability to create visually appealing, user-friendly sites while customizing themes, adding plugins, and ensuring responsive design.',
      project: ['']
    },
    {
      path: '/images/logo/strapi.svg',
      count: 3,
      text: 'I have leveraged Strapi, a powerful headless CMS, to swiftly develop robust backend APIs. These projects demonstrate my ability to create flexible and scalable content management solutions, making it easier to manage, deliver, and extend content to various platforms and applications.',
      project: ['']
    },

  ];
  return (
    <>
      <Title title={'Project'} />
      <div className={styles.container}>
        {projectList.map((p) => (
          <Card className={styles.block} key={p.path}>
            <CardBody>
              <Image src={p.path} width={150} height={150} alt='avatar' className={styles.image} />
              <Typography variant='h4' color='blue-gray' className={styles.count}>
                {p.count}+
              </Typography>
              <Typography className={styles.text}>{p.text}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}
