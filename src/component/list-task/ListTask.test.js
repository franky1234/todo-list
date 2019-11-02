import React from 'react';
import { mount } from 'enzyme';
import '../../setupTests';
import { ListTask } from '../index';

describe('Component <listTask />', () => {
  let listTaskComponent;
  const { tasks, deleteCallbackTask } = {
    tasks: [{key: 0, name: 'abc'}], 
    deleteCallbackTask: () => {}
  }
  beforeEach(() => {
    listTaskComponent = mount(<ListTask tasks={tasks} deleteCallbackTask={deleteCallbackTask} />)
  });

  it('should have one element on the list.', () => {
    expect(listTaskComponent.find('li')).toHaveLength(1);
  });

  it('should have been pressed the button delete.', () => {
    const callback = jest.fn();
    listTaskComponent
    .find('li button')
    .simulate('click', callback());
    listTaskComponent.update();
    expect(callback).toHaveBeenCalled();
  });

  it('should have all default parametter passed.', () => {
    const instance = listTaskComponent.props();
    const props = {
      tasks, 
      deleteCallbackTask
    }
    expect(props).toEqual(instance);
  });
})