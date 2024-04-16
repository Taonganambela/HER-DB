import { Table } from '@mui/material';
import {  useState } from 'react';

const Test = () => {
  const [tasks, setTasks] = useState<string[]>([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4"
  ]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const moveTaskToTasks = (index: number) => {
    const taskToMove = completedTasks[index];
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
    setTasks([...tasks, taskToMove]);
  };
  const moveTaskToCompleted = (index: number) => {
    const taskToMove = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, taskToMove]);
  };
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
  
    // <div className="visme_d" data-title="Untitled Project" data-url="n08mmg1n-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="47851"></div>
    <div className="flex justify-center">
    <Table className="table-auto">
    <thead>
          <tr>
            <th className="px-4 py-2">Tasks</th>
            <th className="px-4 py-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <ul>
                {tasks.map((task, index) => (
                  <li key={index} onClick={() => moveTaskToCompleted(index)} className="cursor-pointer hover:text-blue-500">
                    {task}
                  </li>
                ))}
              </ul>
            </td>
            <td className="border px-4 py-2">
              <ul>
                {completedTasks.map((task, index) => (
                  <li key={index} onClick={() => moveTaskToTasks(index)} className="cursor-pointer hover:text-blue-500">
                    {task}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
    </Table>
  </div>
   
  );
};

export default Test;
