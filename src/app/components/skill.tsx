'use client'
import React, { useEffect, useState } from 'react';
import { Avatar, Progress } from '@material-tailwind/react';
import { Typography, } from '@material-tailwind/react';
import { Title } from './title';
import Image from 'next/image'

interface PropTypes { }

const styles = {
  p: `mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400`,
  hr: `w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700`,
  lanContainer: `flex w-full flex-row flex-wrap`,
  lanBlock: `flex sm:w-2/4 w-full last:w-full flex-col gap-4 px-6 mt-6`,
  h6: `text-left`,
  slideContainer: `mt-12`,
  slideBlock: `w-full inline-flex flex-nowrap overflow-hidden`,
  slideUlOne: `flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`,
  slideUlTwo: `flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse`,
  toolContainer: `flex flex-row flex-wrap justify-start mt-12`,
  toola: `flex items-center gap-2 sm:w-2/4 md:w-1/4  w-full mb-6`,
  toolAvatar: `object-contain`,
  toolDesc: `font-normal text-start dark:text-slate-50`
}

export const Skill: React.FC<PropTypes> = ({ }) => {
  const [mounted, setMounted] = useState(false);

  const frontendList = [
    {
      name: 'HTML',
      percent: 95
    },
    {
      name: 'CSS3',
      percent: 95
    },
    {
      name: 'TailWind',
      percent: 60
    },
    {
      name: 'Angular',
      percent: 75
    },
    {
      name: 'React',
      percent: 50
    },
    {
      name: 'Next.js',
      percent: 60
    },
  ];

  const backendList = [
    {
      name: 'Python',
      percent: 85
    },
    {
      name: 'Go',
      percent: 60
    },
    {
      name: 'PHP',
      percent: 80
    },
    {
      name: 'NestJS',
      percent: 70
    },
    {
      name: 'Express.js',
      percent: 70
    },
  ];

  const frameworkList = [
    {
      name: 'Flask(Python)',
      percent: 80
    },
    {
      name: 'Wordpress',
      percent: 70
    },
    {
      name: 'Gin(Go)',
      percent: 50
    },
    {
      name: 'Strapi',
      percent: 85
    }
  ];

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

  const toolList = [
    {
      link: 'https://swagger.io/',
      path: '/images/logo/swagger.svg',
      title: 'Swagger',
      desc: 'API development'
    },
    {
      link: 'https://www.openapis.org/',
      path: '/images/logo/openapis.svg',
      title: 'OpenAPI',
      desc: 'API development'
    },
    {
      link: 'https://www.docker.com/',
      path: '/images/logo/docker.svg',
      title: 'Docker',
      desc: 'Development tools'
    },
    {
      link: 'https://github.com/',
      path: '/images/logo/github.svg',
      title: 'Git',
      desc: 'Version Control'
    },
    {
      link: 'https://microservices.io/',
      path: '/images/logo/micro.svg',
      title: 'Micro Service',
      desc: 'Microservice Architecture'
    },
    {
      link: 'https://grpc.io/',
      path: '/images/logo/grpc.svg',
      title: 'gRPC',
      desc: 'gRPC Architecture'
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <>
      <Title title={'My skills'} />
      <div className={styles.lanContainer}>
        <div className={styles.lanBlock}>
          <Typography variant='h6' className={styles.h6}>Frontend</Typography>
          <hr className={styles.hr} />
          {frontendList.map((f) => (
            <Progress key={f.name} value={f.percent} size='lg' label={f.name} color='blue' />
          ))}
        </div>
        <div className={styles.lanBlock}>
          <Typography variant='h6' className={styles.h6}>Backend</Typography>
          <hr className={styles.hr} />
          {backendList.map((f) => (
            <Progress key={f.name} value={f.percent} size='lg' label={f.name} color='blue' />
          ))}
        </div>
        <div className={styles.lanBlock}>
          <Typography variant='h6' className={styles.h6}>Framework</Typography>
          <hr className={styles.hr} />
          {frameworkList.map((f) => (
            <Progress key={f.name} value={f.percent} size='lg' label={f.name} color='blue' />
          ))}
        </div>
      </div>

      {mounted &&
        <div className={styles.slideContainer}>
          <Typography variant='h4' className={styles.h6}>Familiar with</Typography>
          <hr className={styles.hr} />
          <div className={styles.slideBlock}>
            <ul x-ref='logos' className={styles.slideUlOne}>
              {cloudLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
            <ul x-ref='logos' className={styles.slideUlOne} aria-hidden='true'>
              {cloudLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.slideBlock}>
            <ul x-ref='logos' className={styles.slideUlTwo}>
              {dbLogoList.map((logo) => (
                <li key={logo.link}>
                  <a href={logo.link} target='_blank'>
                    <Image src={logo.path} width={150} height={150} alt='Google' />
                  </a>
                </li>
              ))}
            </ul>
            <ul x-ref='logos' className={styles.slideUlTwo} aria-hidden='true'>
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
      <div className={styles.toolContainer}>
        {toolList.map((tool) => (
          <a key={tool.title} className={styles.toola} href={tool.link} target='_blank'>
            <Avatar src={tool.path} alt='avatar' className={styles.toolAvatar} variant='rounded' />
            <div>
              <Typography variant='h6' className={styles.h6}>{tool.title}</Typography>
              <Typography variant='small' color='gray' className={styles.toolDesc}>
                {tool.desc}
              </Typography>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
