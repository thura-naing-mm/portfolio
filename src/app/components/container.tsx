'use client'
import React from 'react';
import { About } from './about';


interface PropTypes { }

const styles = {
  container: `h-[73vh] mt-12`,
}

export const Container: React.FC<PropTypes> = ({ }) => {
  return (
    <div className={styles.container}>
      <About />
    </div>
  )
}
