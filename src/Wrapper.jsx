import { useState } from 'react';
import { createContext } from 'react';
export const todoContext=createContext(null)
const wrapper = (props) => {

 const [todos, settodos] = useState([
    {
      id: 1,
      title: 'kam karle',
      isCompleted: false,
    },
  ]);
 


  return (
 <todoContext.Provider value={[todos,settodos]}>
     {props.children}
 </todoContext.Provider>
  )
}

export default wrapper
