'use client'
import React from 'react';
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';
import {
  PlusIcon,
  UserCircleIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ChartBarIcon,
  TrophyIcon,
  CodeBracketIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';

interface PropTypes { }

const styles = {
  container: `fixed bottom-24 right-5`,
  handlerIconButton: `rounded-full`,
  handlerIcon: `h-5 w-5 transition-transform group-hover:rotate-45`,
  dialAction: `relative dark:bg-gray-900`,
  tab: `w-5 h-5`,
}

export const Dial: React.FC<PropTypes> = ({ }) => {
  const labelProps = {
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal',
  };

  const iconList = [
    {
      icon: UserCircleIcon,
      link: '#about',
      text: 'About'
    },
    {
      icon: AcademicCapIcon,
      link: '#education',
      text: 'Education'
    },
    {
      icon: ChartBarIcon,
      link: '#skill',
      text: 'Skill'
    },
    {
      icon: TrophyIcon,
      link: '#experience',
      text: 'Experience'
    },
    {
      icon: CodeBracketIcon,
      link: '#project',
      text: 'Project'
    },
    {
      icon: EnvelopeIcon,
      link: '#contact',
      text: 'Contact'
    },
  ];

  return (
    <div className={styles.container}>
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size='lg' className={styles.handlerIconButton}>
            <PlusIcon className={styles.handlerIcon} />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          {iconList.map((i) => (
            <SpeedDialAction key={i.text} className={styles.dialAction}>
              <a href={i.link}>
                {React.createElement(i.icon, { className: styles.tab })}
              </a>
              <Typography {...labelProps}>{i.text}</Typography>
            </SpeedDialAction>
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
