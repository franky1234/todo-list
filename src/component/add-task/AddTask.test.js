import React from 'react';
import { mount } from 'enzyme';
import '../../setupTests';
import { AddTask } from '../index';

describe('Component <AddTask />', () => {
  let addTaskComponent;
  const { task, addCallbackTask, updateCallbackTask } = {
    task: 'abc',
    addCallbackTask: () => { },
    updateCallbackTask: () => { }
  }
  beforeEach(() => {
    addTaskComponent = mount(<AddTask task={task} updateCallbackTask={updateCallbackTask} addCallbackTask={addCallbackTask} />)
  });

  it('should change the text of the task.', () => {
    const inputText = addTaskComponent.find('input');
    inputText.props().value = 'Change';
    expect(inputText.get(0).props.value).toEqual('Change');
  });

  it('should have the props values sended.', () => {
    const instance = addTaskComponent.props();
    const props = {
      task,
      addCallbackTask,
      updateCallbackTask
    }
    expect(props).toEqual(instance);
  });
})