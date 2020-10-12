import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Recommendation from './components/Recommendation'
import Actor from './components/Actor'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FooterContainer } from './containers/footer'


function App() {

  const baseUrl = 'http://localhost:3001/movie'
  const acturl = 'http://localhost:3001/actor'

  const [movies, setMovies] = useState([])
  const [actors, setActors] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(baseUrl)
  //     .then(response => {
  //       setMovies(response.data)
  //       console.log(response)
  //     })
  // }, [])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log('promise fulfilled')
        setMovies(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(acturl)
      .then(response => {
        console.log('promise fulfilled')
        setActors(response.data)
      })
  }, [])

  console.log('render', movies.length)

  const Info = ({ movie }) => {
    return (
      <li >
        {movie.name}
        <button>like</button>
      </li>
    )
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <Recommendation movies={movies} style={{ marginLeft:'20%',marginRight:'auto' }}></Recommendation>
      <Actor actors={actors}/>
      <FooterContainer />
    </div>







  )

}



export default App

