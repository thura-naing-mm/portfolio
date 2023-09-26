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
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'Interesting',
      value: 'interesting',
      icon: StarIcon,
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Future Plan',
      value: 'future',
      icon: TrophyIcon,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
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
