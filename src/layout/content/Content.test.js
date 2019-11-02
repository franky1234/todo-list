import React from 'react';
import { shallow } from 'enzyme';
import { Section } from '../index';
import { TaskManager } from '../../container/index';
import '../../setupTests';

describe('Layout <Content /> Component.', () => {
  let contentComponent;
  beforeEach(() => contentComponent = shallow(<Section />));

  it('should have the TaskManager component.', () => {
    const taskManager = contentComponent.find(TaskManager);
    expect(taskManager).toHaveLength(1);
  });

  it('should contain a TaskManager component.', () => {
    expect(contentComponent.contains(<TaskManager />)).toBe(true);
  });

});