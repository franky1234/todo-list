import React from 'react';
import './AddTask.scss';

const AddTask = ({ task, addCallbackTask, updateCallbackTask }) => {
  const handleChange = ({ target: { value } }) => updateCallbackTask(value);
  return (
    <div className="task">
      <input name="task" type="text" value={task} onChange={handleChange} />
      <button type="button" onClick={addCallbackTask}> Add </button>
    </div>
  );
};

export default AddTask;