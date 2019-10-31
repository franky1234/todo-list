import React from 'react';
import './Content.scss';
import { TaskManager } from '../../container/index';

const Section = () => {
  return (
    <section className="section-body">
      <TaskManager />
    </section>
  );
};

export default Section;