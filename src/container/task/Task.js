import React, { useState } from 'react';

const TaskManager = () => {
  const [task, setTask] = useState({
    taskToAdd: '',
    tasks: []
  });
  return (
    <div className="task-manager">
      Content goes here!.
    </div>
  );
};

export default TaskManager;