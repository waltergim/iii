 
 import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Content } from './pages/content'
import { AppRouter } from './routes/AppRouter'

function III() {
 

  return (
    <>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

    </>
  )
}

export default III
