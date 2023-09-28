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
  block: `flex sm:w-[calc(50%-0.5rem)] w-full flex-col mt-4`,
  image: `object-contain`,
  count: `text-start my-4`,
  text: `text-start`
}

export const Project: React.FC<PropTypes> = ({ }) => {
  const projectList = [
    {
      path: '/images/logo/angular.svg',
      count: 20,
      text: 'Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.'
    },
    {
      path: '/images/logo/python.svg',
      count: 5,
      text: 'Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.'
    },
    {
      path: '/images/logo/wordpress.svg',
      count: 10,
      text: 'Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.'
    },
    {
      path: '/images/logo/strapi.svg',
      count: 3,
      text: 'Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.'
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
