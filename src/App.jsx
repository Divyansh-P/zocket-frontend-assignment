
import { Provider } from 'react-redux'
import './App.css'
import store from './utills/store'
import Display from './components/Canvas/Display'

import EditArea from './components/EditingFields/EditArea'

function App() {


  return (
   <Provider store={store}>
    <div className='flex flex-col sm:flex-row w-screen'>
  
    <Display/>
    <EditArea/>
   
  
    </div>

    </Provider>
  
  
  )
}

export default App
