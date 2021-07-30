import React from 'react'

import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/Navbar'
import Suggestions from './Components/Suggestions/Suggestions'
import { Actions, Originals } from './url'
function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <Suggestions title="Netflix Originals" url={Originals} />
      <Suggestions title="Actions" url={Actions} />
    </div>
  );
}

export default App;
