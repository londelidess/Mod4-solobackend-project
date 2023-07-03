import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch></Switch>}
      <div>
        <h1>This is the main content of the page</h1>
        <p>More content here...</p>
      </div>
    </div>
  //   <>
  //   <Navigation isLoaded={isLoaded} />
  //   {isLoaded && (
  //     <>
  //       <Switch></Switch>
  //       <div>
  //         <h1>This is the main content of the page</h1>
  //         <p>More content here...</p>
  //       </div>
  //     </>
  //   )}
  // </>
  );
}

export default App;
