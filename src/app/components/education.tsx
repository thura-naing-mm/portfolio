'use client'
import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader
} from '@material-tailwind/react';
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  LanguageIcon
} from '@heroicons/react/24/solid';
import { Title } from './title';

interface PropTypes { }

export const Education: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'Education'} />
      <Timeline className='mt-5'>
        <TimelineItem className='h-28'>
          {/* <TimelineConnector className='!w-[78px]' /> */}
          <TimelineHeader className='relative rounded-xl border border-blue-gray-50 dark:border-blue-gray-900 bg-white dark:bg-gray-400 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 dark:shadow-blue-gray-100/5'>
            <TimelineIcon className='p-3' variant='ghost' color='red'>
              <AcademicCapIcon className='h-5 w-5' />
            </TimelineIcon>
            <div className='flex flex-col gap-1'>
              <Typography variant='h6' color='blue-gray'>
                Bachelor of Computer Science (B.C.Sc) at University Of Computer Studies(UCSM)
              </Typography>
              <Typography variant='small' color='gray' className='font-normal text-start dark:text-blue-gray-900'>
                2011-12 to 2015-09
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        {/* <TimelineItem className='h-28'>
          <TimelineHeader className='relative rounded-xl border border-blue-gray-50 dark:border-blue-gray-900 bg-white dark:bg-gray-400 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 dark:shadow-blue-gray-100/5'>
            <TimelineIcon className='p-3' variant='ghost' color='red'>
              <LanguageIcon className='h-5 w-5' />
            </TimelineIcon>
            <div className='flex flex-col gap-1'>
              <Typography variant='h6' color='blue-gray'>
                New order #1832412
              </Typography>
              <Typography variant='small' color='gray' className='font-normal text-start dark:text-blue-gray-900'>
                21 DEC 11 PM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem> */}
      </Timeline>
    </>
  )
}
