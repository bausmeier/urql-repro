import UrqlProvider from './UrqlProvider'
import AccountInfo from './AccountInfo'
import LoginForm from './LoginForm'

function App() {
  return (
    <UrqlProvider>
      <AccountInfo />
      <LoginForm />
    </UrqlProvider>
  )
}

export default App
