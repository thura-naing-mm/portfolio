'use client'
import React from 'react';
import { Progress } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { Title } from './title';

interface PropTypes { }

export const Skill: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'My Skills'} />
      <div className='flex w-full flex-row flex-wrap'>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Frontend</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={95} size='lg' label='HTML' color='blue' />
          <Progress value={95} size='lg' label='CSS3' color='red' />
          <Progress value={60} size='lg' label='TailWind' color='green' />
          <Progress value={90} size='lg' label='Angular' color='purple' />
          <Progress value={60} size='lg' label='React' color='pink' />
          <Progress value={60} size='lg' label='Next' color='pink' />
        </div>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Backend</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='Python' color='amber' />
          <Progress value={65} size='lg' label='Go' color='teal' />
          <Progress value={70} size='lg' label='PHP' color='indigo' />
          <Progress value={60} size='lg' label='Nest' color='pink' />
        </div>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Framework</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={90} size='lg' label='Flask(Python)' color='amber' />
          <Progress value={80} size='lg' label='Wordpress' color='teal' />
          <Progress value={70} size='lg' label='Gin(Go)' color='indigo' />
          <Progress value={90} size='lg' label='Strapi' color='indigo' />
          <Progress value={60} size='lg' label='Express' color='pink' />
        </div>
        <div className='flex w-2/4 flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Cloud</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={60} size='lg' label='Google' color='amber' />
          <Progress value={40} size='lg' label='AWS' color='teal' />
          <Progress value={70} size='lg' label='Heroku' color='indigo' />
          <Progress value={75} size='lg' label='Render' color='indigo' />
          <Progress value={80} size='lg' label='vercel' color='indigo' />
        </div>
        <div className='flex w-full flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Databse</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='MySQL' color='amber' />
          <Progress value={80} size='lg' label='PostgreSQL' color='teal' />
          <Progress value={80} size='lg' label='MongoDB' color='indigo' />
          <Progress value={80} size='lg' label='SQLite' color='indigo' />
        </div>
        <div className='flex w-full flex-col gap-4 px-6 mt-6'>
          <Typography variant='h6' className='text-left '>Tool</Typography>
          <hr className='w-full h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <Progress value={80} size='lg' label='Swagger' color='amber' />
          <Progress value={70} size='lg' label='Docker' color='teal' />
          <Progress value={60} size='lg' label='OpenAPI' color='indigo' />
          <Progress value={75} size='lg' label='Micro Services' color='indigo' />
          <Progress value={90} size='lg' label='Git' color='indigo' />
        </div>
      </div>
    </>
  )
}
