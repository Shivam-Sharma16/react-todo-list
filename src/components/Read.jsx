import React from "react";
import { toast, ToastContainer } from 'react-toastify';


const Read = (props) => {
  const todos = props.todos;
const settodos=props.settodos;
  const deleteHandler=(id)=>{
    let filterTodo=todos.filter((todo)=> todo.id != id);
    settodos(filterTodo);
    toast.error("work deleted")
    
  }
  const clearHandler=()=>{
    settodos([])
    toast.error("all task cleared")
  }

  const renderTodos = todos.map((todo) =>
   <li className="w-full flex justify-between items-center mt-[1rem] text-2xl border-2 rounded-2xl p-[1rem] font-thin" key={todo.id}>
    {todo.title}   <button  className="text-red-500 cursor-pointer text-xl " onClick={()=>deleteHandler(todo.id)}>Delete</button>
    
  </li>);

  return (
    <div className="w-[50vw]m-l-[2rem] px-[2rem] border-l-2 border-white h-[62vh] overflow-y-scroll">
      <br />
      <br />
  
      <h1 className="text-6xl mt-[-3rem] font-thin"><span className="text-pink-400">Work</span> to be <span className="text-pink-400">Completed</span> </h1>
      <ol>{renderTodos}</ol>
      <button onClick={clearHandler} className="text-2xl border-2 rounded-xl px-2 py-1 cursor-pointer active:scale-[0.97] mt-[1rem]">Clear All Task</button>
    </div>
  );
};

export default Read;
