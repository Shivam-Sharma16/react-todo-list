import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./components/index.css"
import { Bounce, Flip, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 <>
 <App />,
<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Flip}
/>


 </>
    
  
)
