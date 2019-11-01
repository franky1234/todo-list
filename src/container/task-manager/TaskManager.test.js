import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import { TaskManager } from '../index';
import { AddTask, ListTask } from '../../component/index';

describe('Container <TaskManager /> component.', () => {
  let taskManagerComponent;
  const setTask = jest.fn().mockReturnValue({
    taskToAdd: '',
    tasks: []
  });
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(task => [task, setTask]);

  beforeEach(() => {
    taskManagerComponent = shallow(<TaskManager />);
  });

  afterEach(() => jest.clearAllMocks());

  it('should initially display a AddTask component.', () => {
    const addTaskComponent = taskManagerComponent.find(AddTask);
    expect(addTaskComponent).toHaveLength(1);
  });

  it('should check initial state tasks to empty array.', () => {
    expect(setTask().tasks).toEqual([]);
  });

  it('should have one task on the list of tasks.', () => {
    const tasks = [...setTask().tasks, { key: 0, name: 'abc' }];
    expect(tasks.length).toBe(1);
  });

  it('should not show the List task component initially.', () => {
    const hasListComponent = taskManagerComponent.is(ListTask);
    expect(hasListComponent).toBe(false);
  });

  it('should show the List component with at least one task.', () => {
    const tasks = [...setTask().tasks, { key: 0, name: 'abc' }];
    const listTaskComponent = shallow(<ListTask tasks={tasks} />);
    expect(listTaskComponent.find('li')).toHaveLength(1);
  });

  it('should have the input text equal to state taskToAdd.', () => {
    const { taskToAdd } = { ...setTask(), taskToAdd: 'New item' };
    const addTaskComponent = mount(<AddTask />);
    addTaskComponent.find("input[type='text']").getDOMNode().value = 'New item';
    expect(taskToAdd).toEqual(addTaskComponent.find("input[type='text']").getDOMNode().value);
  });

  it('should remove one task from list of tasks.', () => {
    const allTasks = [{ key: 0, name: 'abc' }, { key: 1, name: 'def' }];
    const { tasks } = { ...setTask(), tasks: allTasks };

    const lisTaskComponent = mount(<ListTask tasks={tasks} deleteCallbackTask={() => { }} />);
    lisTaskComponent
      .find('li button')
      .at(0)
      .simulate('click');
    expect(lisTaskComponent.find('li')).toHaveLength(2);

  });
});