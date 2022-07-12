import { useState } from "react";

import Home from "./components/Home";
import Layout from "./components/Layout";
import { GuestContext, guestValue } from "./contexts/guestContext";
import GlobalStyles from "./global/global"

function App() {
  const [state, setState] = useState('');

  return (
    <GuestContext.Provider value={guestValue}>
      {state == "Enter" ? <Layout /> : <Home setState={setState} />}
      <GlobalStyles />
    </GuestContext.Provider>
  );
}

export default App;
