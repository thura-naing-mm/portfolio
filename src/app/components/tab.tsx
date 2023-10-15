'use client'
import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import {
  TrophyIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/solid';

interface PropTypes { }

const styles = {
  tabHeader: `flex-col md:flex-row`,
  tabHeaderIndicatorProps: `bg-gray-900/10 shadow-none !text-gray-900`,
  tabBlock: `flex items-center gap-2 text-gray-900`,
  tab: `w-5 h-5`,
  TabPanel: `mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400`
}

export const TabsWithIcon: React.FC<PropTypes> = ({ }) => {
  const data = [
    {
      label: 'Characters',
      value: 'characters',
      icon: HeartIcon,
      desc: `Problem-Solver, Continuous Learner, Innovative, Quality-Driven, Time Management`,
    },
    {
      label: 'Interesting',
      value: 'interesting',
      icon: StarIcon,
      desc: `Enjoy tackling challenging issues and finding elegant solutions to technical problems.
      Always learn and stay current with new programming languages, frameworks, and tools.`,
    },
    {
      label: 'Future Plan',
      value: 'future',
      icon: TrophyIcon,
      desc: `I am dedicated to evolving as a web developer, with a focus on gaining 
      leadership experience and improving my communication skills. 
      My ultimate goal is to lead a small IT-based company, fostering innovation 
      and effective collaboration within the team.`,
    },
  ];

  return (
    <Tabs value='characters'>
      <TabsHeader
        className={styles.tabHeader}
        indicatorProps={{
          className: styles.tabHeaderIndicatorProps,
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className={styles.tabBlock}>
              {React.createElement(icon, { className: styles.tab })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className={styles.TabPanel}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
