import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import "./App.css";
import RotateLoader from "react-spinners/RotateLoader";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [firebase, setUser]);
  
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user)
  //   })
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // }, [Login, Signup, App])

  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            {loading ? <RotateLoader
              color="#369bd6"
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <Home />}
          </Route>
          <Route path="/signup">
            {loading ? <RotateLoader
              color="#369bd6"
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <Signup />}
          </Route>
          <Route path='/login'>
            {loading ? <RotateLoader
              color="#369bd6"
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <Login />}
          </Route>
          <Route path='/create'>
            {loading ? <RotateLoader
              color="#369bd6"
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <Create />}
          </Route>
          <Route path='/view'>
            {loading ? <RotateLoader
              color="#369bd6"
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <View />}
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
