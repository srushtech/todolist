import React, { useState } from 'react';
import { FaCheckCircle, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Apps: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');
  const [view, setView] = useState<'all' | 'completed' | 'remaining'>('all');

  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (view === 'completed') return todo.completed;
    if (view === 'remaining') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-gray-100 flex items-center justify-center p-4">
      <Navbar />
      <div className="bg-gray-800 shadow-xl rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">Modern To-Do List</h1>

        {/* Input Section */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            className="flex-grow border border-gray-600 rounded-md p-3 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Add a new task..."
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-md flex items-center justify-center"
          >
            <FaPlus size={18} />
          </button>
        </div>

        {/* View Buttons */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setView('all')}
            className={`py-2 px-4 rounded-lg text-sm font-medium ${view === 'all' ? 'bg-teal-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setView('completed')}
            className={`py-2 px-4 rounded-lg text-sm font-medium ${view === 'completed' ? 'bg-teal-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
          >
            Completed
          </button>
          <button
            onClick={() => setView('remaining')}
            className={`py-2 px-4 rounded-lg text-sm font-medium ${view === 'remaining' ? 'bg-teal-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
          >
            Remaining
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-4 rounded-md transition ${todo.completed ? 'bg-teal-600 text-white' : 'bg-gray-700'
                  }`}
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  <FaCheckCircle
                    size={20}
                    className={`${todo.completed ? 'text-teal-300' : 'text-gray-400'
                      }`}
                  />
                  <span className={`${todo.completed ? 'line-through' : ''}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(todo.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrashAlt size={20} />
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400">No tasks to display.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Apps;
