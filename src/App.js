import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from'./About'
import Skills from './Skills'
import Resume from './Resume'
import "./App.css"

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import Lower from './Lower'

function App() {
  const [data, setData] = useState('')
  const [clicked, setClicked] = useState('false')

  const getData = () => {
    axios.get('Data.json')
    .then(res=>{
      const data=res.data
      setData(data)
      
    })
  }
  const handleHamClick = (e) => {
    e.preventDefault()
    const isclicked = !clicked
    setClicked(isclicked)
    console.log(clicked)
}
  useEffect(()=>{
    getData()
    
  },[])

    const {main,skills,navbar,education,work} = data
  
 console.log(skills)
  
  return (
    <div className="App">
      
      <Router>
      <Navbar navbar={navbar} handleHamClick={handleHamClick}/>
      <Sidebar navbar={navbar} clicked={clicked}/>
      {/* <Home  main={main} /> */}
      <About main={main}/>
      
      <Resume education={education} work={work}/>
      <Lower skills={skills} />
      
      
        <Switch>
          <Route path="#about">
            <About />
          </Route>
          <Route path="#">
            <Home />
          </Route>
          <Route path = "#skills">
          <Skills />
          </Route>
        </Switch>
   
    
     </Router>
    </div>
  );
}

export default App;
