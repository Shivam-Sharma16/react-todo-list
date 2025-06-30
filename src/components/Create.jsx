import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from 'react';


const Create = (props) => {
   const  todos=props.todos;
   const settodos=props.settodos;
     const [title, settitle] = useState('');
 const submitHandler = (e) => {
    e.preventDefault();

    // Don't allow empty task
    if (title.trim() === '') return;

    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    settodos([...todos, newTodo]); // ✅ Corrected: adding the object, not an array
    settitle('');
  };

  return (
    <div className='w-[50vw] '>
      <h1 className='text-6xl font-thin'>CREATE YOUR <span className='text-red-400'>DAILY</span> TASK</h1>
      <form onSubmit={submitHandler}>
        <input 
        className='p-2 w-[45vw] text-2xl mt-[2rem] cursor-context-menu thinner rounded border-2 outline-none '
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title..."
        />
        <br />
        <br />
       <textarea placeholder='enter description...'         className='p-2 w-[45vw] text-2xl  cursor-context-menu thinner rounded border-2 outline-none '
></textarea>
        <br />        
        <br />
        <br />
        <button  className='text-2xl border-2 rounded-xl px-2 py-1 cursor-pointer active:scale-[0.97]'>Create Todo</button>
      </form>
    </div>
  )
}

export default Create
