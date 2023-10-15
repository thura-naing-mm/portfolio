'use client'
import React from 'react';
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Button
} from '@material-tailwind/react';
import {
  IdentificationIcon
} from '@heroicons/react/24/solid';

interface PropTypes { }

const styles = {
  card: `w-full max-w-xs max-h-[90vh] bg-white/[.6] border border-gray-200 rounded-lg shadow dark:bg-gray-800/[.6] dark:border-gray-700`,
  cardHeader: `m-0 rounded-none`,
  cardBody: `text-center`,
  cardBodyName: `mb-2 dark:text-white`,
  cardBodyField: `font-medium dark:text-gray-400`,
  cardFooter: `flex flex-wrap justify-evenly gap-7 pt-2`,
  avatar: `object-cover`,
  button: `flex items-center gap-3`,
  icon: `h-5 w-5`
}

interface PropTypes { }

export const Profile: React.FC<PropTypes> = ({ }) => {
  const socilaList = [
    // {
    //   social: 'LinkedIn',
    //   link: '#',
    //   color: 'blue',
    //   path: '/images/logo/linkedin.svg'
    // },
    {
      social: 'GitHub',
      link: 'https://github.com/thura-naing-mm',
      color: 'blue',
      path: '/images/logo/github.svg'
    },
    // {
    //   social: 'Email',
    //   link: 'mailto:thuranaing.ucsm@gmail.com',
    //   color: 'blue',
    //   path: '/images/logo/mail.svg'
    // },
    {
      social: 'LINE',
      link: 'https://line.me/R/ti/p/thuranaing7',
      color: 'blue',
      path: '/images/logo/line.svg'
    },
    {
      social: 'Skpye',
      link: 'https://join.skype.com/invite/JmQI3I34gXWK',
      color: 'blue',
      path: '/images/logo/skype.svg'
    },
    {
      social: 'Viber',
      link: 'viber://contact?number=%2B959777929199',
      color: 'blue',
      path: '/images/logo/viber.svg'
    },
  ];
  return (
    <Card className={styles.card}>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className={styles.cardHeader}>
        <Image src='/images/profile.jpg' width={350} height={350} alt='profile-picture' />
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <Typography variant='h4' color='blue-gray' className={styles.cardBodyName}>
          Thura Naing
        </Typography>
        <Typography color='blue-gray' className={styles.cardBodyField} textGradient>
          Web Developer
        </Typography>
      </CardBody>
      <CardFooter className={styles.cardFooter}>
        {socilaList.map((s) => (
          <Tooltip content={s.social} key={s.social}>
            <a href={s.link} target='_blank'>
              <Avatar src={s.path} alt='avatar' size='xs' variant='rounded' className={styles.avatar} />
            </a>
          </Tooltip>
        ))}
        <a href='/Thura-Naing-CV.pdf' target='_blank'>
          <Button size='lg' color='white' className={styles.button}>
            <IdentificationIcon className={styles.icon} />
            Download CV
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
