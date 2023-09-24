'use client'
import React from 'react';
import { About } from './about';
import { Education } from './education';
import { Skill } from './skill';
import { Experience } from './experience';
import { Project } from './project';
import { Contact } from './contact';


interface PropTypes { }

const styles = {
  container: `min-h-[73vh] mt-12`,
  block: `w-full md:p-12 p-6 mt-12 text-center bg-white/[.6] border border-gray-200 rounded-lg shadow dark:bg-gray-800/[.6] dark:border-gray-700`
}

export const Container: React.FC<PropTypes> = ({ }) => {
  return (
    <div className={styles.container}>
      <div id='about' className={styles.block}>
        <About />
      </div>
      <div id='education' className={styles.block}>
        <Education />
      </div>
      <div id='skill' className={styles.block}>
        <Skill />
      </div>
      <div id='experience' className={styles.block}>
        <Experience />
      </div>
      <div id='project' className={styles.block}>
        <Project />
      </div>
      <div id='contact' className={styles.block}>
        <Contact />
      </div>
    </div>
  )
}
