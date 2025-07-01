
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./components/index.css"
import { Bounce, Flip, ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper>
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
  </Wrapper>
)
