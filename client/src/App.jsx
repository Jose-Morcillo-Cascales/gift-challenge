
import  Router from './router/Router'
import './App.css'
import { GeneralProvider } from './utils'
function App() {

  return (
    <GeneralProvider>
      <Router />
    </GeneralProvider>
  )
}

export default App
