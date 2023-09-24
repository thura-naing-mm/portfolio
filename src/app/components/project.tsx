'use client'
import React from 'react';
import { Title } from './title';

interface PropTypes { }

export const Project: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'Project'} />
      Project container
    </>
  )
}
