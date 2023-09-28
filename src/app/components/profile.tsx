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
  Avatar
} from '@material-tailwind/react';

interface PropTypes { }

const styles = {
  card: `w-full max-w-xs max-h-[90vh] bg-white/[.6] border border-gray-200 rounded-lg shadow dark:bg-gray-800/[.6] dark:border-gray-700`,
  cardHeader: `m-0 rounded-none`,
  cardBody: `text-center`,
  cardBodyName: `mb-2 dark:text-white`,
  cardBodyField: `font-medium dark:text-gray-400`,
  cardFooter: `flex flex-wrap justify-evenly gap-7 pt-2`,
  avatar: `object-cover`,
}

interface PropTypes { }

export const Profile: React.FC<PropTypes> = ({ }) => {
  const socilaList = [
    {
      social: 'LinkedIn',
      link: '#',
      color: 'blue',
      path: '/images/logo/linkedin.svg'
    },
    {
      social: 'GitHub',
      link: '#',
      color: 'blue',
      path: '/images/logo/github.svg'
    },
    {
      social: 'Email',
      link: '#',
      color: 'blue',
      path: '/images/logo/mail.svg'
    },
    {
      social: 'LINE',
      link: '#',
      color: 'blue',
      path: '/images/logo/line.svg'
    },
    {
      social: 'Skpye',
      link: '#',
      color: 'blue',
      path: '/images/logo/skype.svg'
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
          Natalie Paisley
        </Typography>
        <Typography color='blue-gray' className={styles.cardBodyField} textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className={styles.cardFooter}>
        {socilaList.map((s) => (
          <Tooltip content={s.social} key={s.social}>
            <Typography
              as='a'
              href={s.link}
              variant='lead'
              color='blue'
              textGradient
            >
              <Avatar src={s.path} alt='avatar' size='xs' variant='rounded' className={styles.avatar} />
            </Typography>
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  )
}
