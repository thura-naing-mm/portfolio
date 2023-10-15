'use client'
import React from 'react';
import { Title } from './title';

interface PropTypes { }

export const Experience: React.FC<PropTypes> = ({ }) => {
  return (
    <>
      <Title title={'Experience'} />
      <div>Sorry, this section is under development.
        <br />If you are interested, please contact me using the contact form.</div>
    </>
  )
}
