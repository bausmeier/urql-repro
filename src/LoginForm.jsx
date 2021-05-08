import {useState} from 'react'

function LoginForm() {
  const [accessToken, setAccessToken] = useState('')
  return (
    <div style={{padding: 16, margin: 16, border: '1px solid black'}}>
      <h2>Login Form</h2>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          sessionStorage.setItem('accessToken', accessToken)
          setAccessToken('')
        }}
      >
        <label htmlFor="accessToken">Access Token</label>
        <input
          id="accessToken"
          type="text"
          value={accessToken}
          onChange={(ev) => setAccessToken(ev.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default LoginForm
