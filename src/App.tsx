import './App.css'
import Card from './components/Card'
import Graphics from './components/Graphics'
import UserProvider from './context/userContext'
import Logout from './components/Logout'
import Info from './components/Info'

function App() {

  return (
    <UserProvider>
      <Card>
        <div style={{background: 'yellow', color: 'black'}}>
          soy children
        </div>
      </Card>
      <Graphics/>
      <Logout/>
      <Info/>
    </UserProvider>
  )
}

export default App
