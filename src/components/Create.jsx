import React from 'react'
import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form"
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify/unstyled';



const Create = (props) => {
   const  todos=props.todos;
   const settodos=props.settodos;
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()




 const submitHandler = (data) => {
   

   
    data.id=nanoid();
    data.isCompleted=false;
    let copy =[...todos];
    copy.push(data);
    settodos(copy);
    reset()
    toast.success('🦄 Wow so easy!', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Flip,
});
   
  };

  return (
    <div className='w-[50vw] '>
      <h1 className='text-6xl font-thin'>CREATE YOUR <span className='text-red-400'>DAILY</span> TASK</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input 
        className='p-2 w-[45vw] text-2xl mt-[2rem] cursor-context-menu thinner rounded border-2 outline-none '
          {...register('title',{required:"title can't be empty"})}
          
          type="text"
          placeholder="title..."
        />
        <br />
        <small className='text-xl font-thin text-red-600'>{errors?.title?.message}</small>
        <br />
        <br />
       <textarea placeholder='enter description...' className='p-2 w-[45vw] text-2xl  cursor-context-menu thinner rounded border-2 outline-none '
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
