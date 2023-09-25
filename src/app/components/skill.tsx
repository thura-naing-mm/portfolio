'use client'
import React, { useEffect, useState } from 'react';
import { Button, Progress } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { Title } from './title';
import Image from 'next/image'

interface PropTypes { }

export const Skill: React.FC<PropTypes> = ({ }) => {
  const [mounted, setMounted] = useState(false);

  const cloudLogoList = [
    {
      link: 'https://cloud.google.com/',
      path: '/images/logo/google.svg'
    },
    {
      link: 'https://firebase.google.com/',
      path: '/images/logo/firebase.svg'
    },
    {
      link: 'https://aws.amazon.com/',
      path: '/images/logo/aws.svg'
    },
    {
      link: 'https://www.heroku.com/',
      path: '/images/logo/heroku.svg'
    },
    {
      link: 'https://render.com/',
      path: '/images/logo/render.svg'
    },
    {
      link: 'https://vercel.com/',
      path: '/images/logo/vercel.svg'
    },
  ];

  const dbLogoList = [
    {
      link: 'https://www.mysql.com/',
      path: '/images/logo/mysql.svg'
    },
    {
      link: 'https://www.postgresql.org/',
      path: '/images/logo/postgresql.svg'
    },
    {
      link: 'https://www.mongodb.com/',
      path: '/images/logo/mongodb.svg'
    },
    {
      link: 'https://www.sqlite.org/index.html',
      path: '/images/logo/sqlite.svg'
    },
  ];

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <>
      <Title title={'tesst'} />
      <div className='flex w-full flex-row flex-wrap'>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Frontend</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={95} size='lg' label='HTML' color='blue' />
          <Progress value={95} size='lg' label='CSS3' color='blue' />
          <Progress value={60} size='lg' label='TailWind' color='blue' />
          <Progress value={90} size='lg' label='Angular' color='blue' />
          <Progress value={60} size='lg' label='React' color='blue' />
          <Progress value={60} size='lg' label='Next' color='blue' />
        </div>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Backend</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='Python' color='blue' />
          <Progress value={65} size='lg' label='Go' color='blue' />
          <Progress value={70} size='lg' label='PHP' color='blue' />
          <Progress value={60} size='lg' label='Nest' color='blue' />
        </div>
        <div className='flex w-full flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Framework</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={90} size='lg' label='Flask(Python)' color='blue' />
          <Progress value={80} size='lg' label='Wordpress' color='blue' />
          <Progress value={70} size='lg' label='Gin(Go)' color='blue' />
          <Progress value={90} size='lg' label='Strapi' color='blue' />
          <Progress value={60} size='lg' label='Express' color='blue' />
        </div>
        {/* <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Cloud</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={60} size='lg' label='Google' color='blue' />
          <Progress value={40} size='lg' label='AWS' color='blue' />
          <Progress value={70} size='lg' label='Heroku' color='blue' />
          <Progress value={75} size='lg' label='Render' color='blue' />
          <Progress value={80} size='lg' label='vercel' color='blue' />
        </div>
        <div className='flex w-full flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Databse</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='MySQL' color='blue' />
          <Progress value={80} size='lg' label='PostgreSQL' color='blue' />
          <Progress value={80} size='lg' label='MongoDB' color='blue' />
          <Progress value={80} size='lg' label='SQLite' color='blue' />
        </div>
        <div className='flex w-full flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left'>Tool</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='Swagger' color='blue' />
          <Progress value={70} size='lg' label='Docker' color='blue' />
          <Progress value={60} size='lg' label='OpenAPI' color='blue' />
          <Progress value={75} size='lg' label='Micro Services' color='blue' />
          <Progress value={90} size='lg' label='Git' color='blue' />
        </div> */}
      </div>

      {mounted &&
        <div className='mt-12'>
          <Typography variant='h4' className='text-left'>Familiar with</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <div className='w-full inline-flex flex-nowrap overflow-hidden'>
            <ul x-ref='logos' className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              {cloudLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
            <ul x-ref='logos' className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden='true'>
              {cloudLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full inline-flex flex-nowrap overflow-hidden'>
            <ul x-ref='logos' className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse'>
              {dbLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
            <ul x-ref='logos' className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse' aria-hidden='true'>
              {dbLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }

    </>
  )
}
