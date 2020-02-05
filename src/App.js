import React from "react";
import "./styles.css";
import {useHistory} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Test from "./Test";

export default function App() {
  const history = useHistory()
  const signInHandler = () => {
    localStorage.setItem("token", 'token');
    history.push('/test')
  }
  return (
    <div className="App">
      <button onClick={() => signInHandler()}>Sign In </button>
      <button onClick={() => localStorage.clear()}>Delete Token</button>
      <PrivateRoute path="/test" component={Test} hello="helloWorld" goodBye="GoodBye"/>
      
      
    </div>
  );
}
