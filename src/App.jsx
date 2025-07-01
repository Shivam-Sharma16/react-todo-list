import React, { useContext } from 'react';
import Create from './components/Create';
import Read from './components/Read';
import { todoContext } from './Wrapper';
const App = () => {
 const [todos,settodos]= useContext(todoContext)

 

  
  return (
    <div className="w-screen h-screen bg-gray-700 p-10 ">
      <h1 className='text-8xl text-center text-white text-shadow-lg/30 ' >YOUR <span className='hover:text-red-600 '>TODO</span> LIST</h1>
    <div className='flex items-start  justify-between py-7 text-white'>
      <Create todos={todos} settodos={settodos}/>
    <Read todos={todos} settodos={settodos}/>
    </div>
    </div>
  );
};

export default App;
