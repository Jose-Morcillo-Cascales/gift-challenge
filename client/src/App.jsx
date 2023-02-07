
import './App.css'
import { LoginButton } from './components'
import { GeneralProvider } from './utils'
function App() {

  return (
    <GeneralProvider>
      <LoginButton /> 
    </GeneralProvider>
  )
}

export default App
