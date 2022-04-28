import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from './firebase.init'

function App() {

  const [signIn] = useSignInWithGoogle(auth)

  return (
    <div>
      <h1>Hello Assignment 11</h1>
      <button onClick={() => signIn()} >GOogle</button>
    </div>
  );
}

export default App;
